import { ArrowRight, CalendarDays, Eye, UserRound } from "lucide-react";
import { Metadata } from "next";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { PostCard } from "@/components/sections/cards";
import { Cta } from "@/components/sections/cta";
import { getPost } from "@/lib/api";
import { date, num } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost((await params).slug);

  return post
    ? {
        title: post.title,
        description: post.excerpt || undefined,
        openGraph: {
          title: post.title,
          description: post.excerpt || undefined,
          type: "article",
        },
      }
    : {};
}

export default async function PostPage({ params }: Props) {
  const post = await getPost((await params).slug);

  if (!post) notFound();

  return (
    <>
      <article className="max-w-3xl mx-auto px-6 py-16">
        <NextLink
          className="text-sm text-default-500 hover:text-primary flex items-center gap-1 mb-8"
          href="/blog"
        >
          <ArrowRight size={16} /> بازگشت به بلاگ
        </NextLink>
        <span className="text-primary text-sm font-semibold">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-black leading-[1.5] mt-3 mb-6">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-5 text-sm text-default-500 pb-8 mb-8 border-b border-divider">
          <span className="flex items-center gap-1.5">
            <UserRound size={16} /> {post.author?.fullName || "تیم پیپ‌هانتر"}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays size={16} /> {date(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Eye size={16} /> {num(post.views)} بازدید
          </span>
        </div>
        {post.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={post.title}
            className="w-full rounded-3xl mb-10"
            src={post.coverImage}
          />
        )}
        <div className="article">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </div>
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-content2 text-default-600"
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </article>
      {post.related?.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 pb-10">
          <h2 className="text-2xl font-bold mb-6">مقالات مرتبط</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {post.related.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}
      <Cta />
    </>
  );
}
