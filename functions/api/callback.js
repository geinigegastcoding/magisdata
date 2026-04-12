function parseCookies(cookieHeader = "") {
  return cookieHeader.split(";").reduce((cookies, item) => {
    const [rawName, ...rawValue] = item.trim().split("=");

    if (!rawName) {
      return cookies;
    }

    cookies[rawName] = rawValue.join("=");
    return cookies;
  }, {});
}

function renderResponse(status, content) {
  return `<!doctype html>
<html lang="en">
  <body>
    <script>
      (function () {
        function receiveMessage(message) {
          window.opener.postMessage(
            "authorization:github:${status}:" + ${JSON.stringify(JSON.stringify(content))},
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
          window.close();
        }

        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  </body>
</html>`;
}

export async function onRequest({ request, env }) {
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response("Missing GitHub OAuth environment variables", {
      status: 500,
      headers: {
        "content-type": "text/plain; charset=UTF-8",
      },
    });
  }

  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const returnedState = url.searchParams.get("state");
    const cookies = parseCookies(request.headers.get("Cookie"));
    const storedState = cookies["decap-cms-state"];

    if (!code || !returnedState || !storedState || returnedState !== storedState) {
      return new Response(renderResponse("error", { error: "Invalid OAuth state" }), {
        status: 401,
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "Set-Cookie": "decap-cms-state=; HttpOnly; Path=/; Secure; SameSite=Lax; Max-Age=0",
          "Cache-Control": "no-store",
        },
      });
    }

    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "user-agent": "magisdata-decap-cms-auth",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const result = await tokenResponse.json();

    if (!tokenResponse.ok || result.error || !result.access_token) {
      return new Response(renderResponse("error", result), {
        status: 401,
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "Set-Cookie": "decap-cms-state=; HttpOnly; Path=/; Secure; SameSite=Lax; Max-Age=0",
          "Cache-Control": "no-store",
        },
      });
    }

    return new Response(
      renderResponse("success", {
        token: result.access_token,
        provider: "github",
      }),
      {
        status: 200,
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "Set-Cookie": "decap-cms-state=; HttpOnly; Path=/; Secure; SameSite=Lax; Max-Age=0",
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    return new Response(
      renderResponse("error", {
        error: "GitHub OAuth callback failed",
        error_description: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          "content-type": "text/html; charset=UTF-8",
          "Set-Cookie": "decap-cms-state=; HttpOnly; Path=/; Secure; SameSite=Lax; Max-Age=0",
          "Cache-Control": "no-store",
        },
      },
    );
  }
}
