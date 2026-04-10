import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatBlogDate, getAllPosts } from "../../lib/blog";

export const metadata = {
  title: "Blog | MagisData",
  description:
    "Inzichten van MagisData over websites, conversie, vertrouwen en online groei.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-surface py-28">
      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-secondary-container/35 px-4 py-1.5 text-sm font-semibold tracking-wide text-on-secondary-container">
            MagisData Blog
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold text-on-surface md:text-5xl">
            Praktische inzichten over websites die vertrouwen winnen
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-on-surface-variant">
            Artikelen over conversie, webstrategie en de keuzes die ervoor zorgen
            dat een website niet alleen mooi oogt, maar ook beter werkt voor je klant.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-5xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-on-surface-variant">
                {post.publishedAt ? <span>{formatBlogDate(post.publishedAt)}</span> : null}
                {post.author ? <span>Door {post.author}</span> : null}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-on-surface">{post.title}</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-on-surface-variant">
                {post.description}
              </p>
              {post.tags.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
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
              <Link
                className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
                href={`/blog/${post.slug}`}
              >
                Lees artikel <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

