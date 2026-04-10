import { notFound } from "next/navigation";
import { formatBlogDate, getAllPosts, getPostBySlug } from "../../../lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | MagisData`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | MagisData`,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface py-28">
      <article className="container">
        <div className="mx-auto max-w-3xl">
          <a
            className="inline-flex rounded-full bg-surface-container-high px-4 py-2 text-sm font-semibold text-on-surface transition hover:bg-surface-container-highest"
            href="/blog"
          >
            Terug naar blog
          </a>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-on-surface-variant">
            {post.publishedAt ? <span>{formatBlogDate(post.publishedAt)}</span> : null}
            {post.author ? <span>Door {post.author}</span> : null}
          </div>

          <h1 className="mt-4 text-balance text-4xl font-extrabold text-on-surface md:text-5xl">
            {post.title}
          </h1>
          {post.description ? (
            <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
              {post.description}
            </p>
          ) : null}

          {post.tags.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary-container px-3 py-1 text-xs font-bold text-on-secondary-container"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {post.coverImage ? (
            <img
              alt={post.title}
              className="mt-10 h-auto w-full rounded-5xl border border-outline-variant object-cover"
              src={post.coverImage}
            />
          ) : null}

          <div
            className="mt-12 max-w-none text-on-surface [&_a]:text-primary [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-primary/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-bold [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-bold [&_li]:leading-relaxed [&_ol]:mt-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-6 [&_p]:leading-8 [&_strong]:text-on-surface [&_ul]:mt-6 [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>
    </main>
  );
}

