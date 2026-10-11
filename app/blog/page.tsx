import clsx from "clsx";
import { Metadata } from "next";
import NextLink from "next/link";

import { PostCard } from "@/components/sections/cards";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/sections/section-title";
import { getCategories, getPosts } from "@/lib/api";
import { num } from "@/lib/format";

export const metadata: Metadata = {
  title: "بلاگ و آموزش",
  description:
    "مقالات آموزشی پراپ ترید، مدیریت ریسک، روانشناسی معامله و قوانین چالش‌های پیپ‌هانتر.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category, page = "1" } = await searchParams;
  const query = new URLSearchParams({
    page,
    pageSize: "9",
    ...(category ? { category } : {}),
  });
  const [posts, categories] = await Promise.all([
    getPosts(`?${query}`),
    getCategories(),
  ]);
  const pages = posts ? Math.ceil(posts.total / posts.pageSize) : 0;
  const link = (params: Record<string, string | undefined>) => {
    const q = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v) as [string, string][],
    ).toString();

    return `/blog${q ? `?${q}` : ""}`;
  };

  return (
    <>
      <PageHero
        description="هر آنچه برای پاس کردن چالش و موفقیت در حساب فاند باید بدانید."
        eyebrow="بلاگ پیپ‌هانتر"
        title="آموزش، تحلیل و تجربه"
      />
      <Container>
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <NextLink
              className={clsx(
                "px-4 py-2 rounded-full text-sm border",
                !category
                  ? "bg-primary text-white border-primary"
                  : "border-divider hover:border-primary/50",
              )}
              href="/blog"
            >
              همه
            </NextLink>
            {categories.map((c) => (
              <NextLink
                key={c.category}
                className={clsx(
                  "px-4 py-2 rounded-full text-sm border",
                  category === c.category
                    ? "bg-primary text-white border-primary"
                    : "border-divider hover:border-primary/50",
                )}
                href={link({ category: c.category })}
              >
                {c.category}{" "}
                <span className="opacity-60">({num(c.count)})</span>
              </NextLink>
            ))}
          </div>
        )}
        {posts?.items.length ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.items.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        ) : (
          <p className="text-center text-default-500 py-10">
            مقاله‌ای یافت نشد.
          </p>
        )}
        {pages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: pages }, (_, i) => String(i + 1)).map((p) => (
              <NextLink
                key={p}
                className={clsx(
                  "w-10 h-10 rounded-full flex items-center justify-center border",
                  p === page
                    ? "bg-primary text-white border-primary"
                    : "border-divider",
                )}
                href={link({ category, page: p })}
              >
                {num(p)}
              </NextLink>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
