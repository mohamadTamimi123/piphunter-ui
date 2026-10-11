import clsx from "clsx";
import { CalendarDays, Eye, Lock, TrendingUp } from "lucide-react";
import NextLink from "next/link";

import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/config/site";
import { Fund, PostSummary } from "@/lib/api";
import { RISK_LABEL, date, num, pct, usd } from "@/lib/format";

const COVER_GRADIENTS = [
  "from-[#FF9A4D] to-[#F2416B]",
  "from-[#7828c8] to-[#FD7245]",
  "from-[#0ea5e9] to-[#7828c8]",
  "from-[#17c964] to-[#0ea5e9]",
];

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <NextLink
      className="group rounded-3xl border border-divider bg-content1/40 overflow-hidden flex flex-col hover:border-primary/50 transition-colors"
      href={`/blog/${post.slug}`}
    >
      {post.coverImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={post.title}
          className="h-48 w-full object-cover"
          src={post.coverImage}
        />
      ) : (
        <div
          className={clsx(
            "h-48 bg-gradient-to-br flex items-end p-5",
            COVER_GRADIENTS[post.id % COVER_GRADIENTS.length],
          )}
        >
          <span className="text-white/90 text-2xl font-black leading-snug line-clamp-2">
            {post.title}
          </span>
        </div>
      )}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <span className="text-xs text-primary font-semibold">
          {post.category}
        </span>
        <h3 className="font-bold text-lg leading-8 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-sm text-default-500 leading-7 line-clamp-3">
            {post.excerpt}
          </p>
        )}
        <div className="mt-auto flex justify-between text-xs text-default-400 pt-2">
          <span className="flex items-center gap-1">
            <CalendarDays size={14} /> {date(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Eye size={14} /> {num(post.views)}
          </span>
        </div>
      </div>
    </NextLink>
  );
}

export function FundCard({ fund }: { fund: Fund }) {
  const risk = RISK_LABEL[fund.riskLevel];
  const fill =
    Number(fund.capacity) > 0
      ? Math.min(100, (Number(fund.raised) / Number(fund.capacity)) * 100)
      : null;

  return (
    <div className="rounded-3xl border border-divider bg-content1/40 p-6 flex flex-col gap-5">
      <div className="flex justify-between items-start gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">{fund.name}</h3>
          <span className="text-xs text-default-500">{fund.strategy}</span>
        </div>
        <span
          className={clsx(
            "text-xs px-2.5 py-1 rounded-full shrink-0",
            risk.className,
          )}
        >
          {risk.label}
        </span>
      </div>
      <p className="text-sm text-default-500 leading-7">{fund.description}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-content2/50 p-3 flex flex-col gap-1">
          <span className="text-xs text-default-500 flex items-center gap-1">
            <TrendingUp size={14} /> بازده ماهانه پیش‌بینی
          </span>
          <span className="font-bold text-success text-lg">
            {pct(fund.expectedMonthlyReturn)}
          </span>
        </div>
        <div className="rounded-2xl bg-content2/50 p-3 flex flex-col gap-1">
          <span className="text-xs text-default-500 flex items-center gap-1">
            <Lock size={14} /> دوره قفل
          </span>
          <span className="font-bold text-lg">{num(fund.lockDays)} روز</span>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 text-sm">
        <div className="flex justify-between">
          <span className="text-default-500">حداقل سرمایه‌گذاری</span>
          <span className="ltr">{usd(fund.minInvestment)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-default-500">کارمزد مدیریت / عملکرد</span>
          <span>
            {pct(fund.managementFee)} / {pct(fund.performanceFee)}
          </span>
        </div>
      </div>
      {fill !== null && (
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between text-xs text-default-500">
            <span>ظرفیت تکمیل شده</span>
            <span>{pct(Math.round(fill))}</span>
          </div>
          <div className="h-2 rounded-full bg-content2 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${fill}%` }}
            />
          </div>
        </div>
      )}
      <LinkButton
        className="mt-auto font-semibold"
        color="primary"
        href={`${siteConfig.links.panel}/funds`}
        isDisabled={fund.status !== "open"}
        variant="flat"
      >
        {fund.status === "open" ? "سرمایه‌گذاری در صندوق" : "ظرفیت تکمیل شد"}
      </LinkButton>
    </div>
  );
}
