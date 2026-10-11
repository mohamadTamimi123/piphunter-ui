import { ArrowLeft } from "lucide-react";

import { PostCard, FundCard } from "@/components/sections/cards";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PlansGrid } from "@/components/sections/plans";
import { Rules } from "@/components/sections/rules";
import { Container, SectionTitle } from "@/components/sections/section-title";
import { LinkButton } from "@/components/ui/link-button";
import { getFunds, getPlans, getPosts } from "@/lib/api";

export default async function Home() {
  const [plans, funds, posts] = await Promise.all([
    getPlans(),
    getFunds(),
    getPosts("?pageSize=3"),
  ]);

  return (
    <>
      <Hero plans={plans} />
      <HowItWorks />

      <Container id="plans">
        <SectionTitle
          description="همه پلن‌ها روی متاتریدر ۵ و با اهرم ۱:۱۰۰ ارائه می‌شوند. قیمت‌ها به دلار است و معادل تومانی بر اساس نرخ روز محاسبه می‌شود."
          eyebrow="پلن‌های چالش"
          title="سرمایه مناسب سبک معاملاتی‌ات را انتخاب کن"
        />
        <PlansGrid plans={plans} />
      </Container>

      <Features />

      <Container id="rules">
        <SectionTitle
          description="قبل از شروع چالش، قوانین را با دقت مطالعه کنید. سیستم پایش خودکار، رعایت این قوانین را به‌صورت لحظه‌ای بررسی می‌کند."
          eyebrow="قوانین معامله"
          title="قوانین ساده، بدون غافلگیری"
        />
        <Rules />
      </Container>

      {funds && funds.length > 0 && (
        <Container>
          <SectionTitle
            description="سرمایه خود را به تیم معامله‌گران حرفه‌ای پیپ‌هانتر بسپارید و متناسب با ریسک‌پذیری خود، صندوق مناسب را انتخاب کنید."
            eyebrow="صندوق‌های سرمایه‌گذاری"
            title="معامله‌گر نیستی؟ سرمایه‌گذاری کن"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funds.slice(0, 3).map((f) => (
              <FundCard key={f.id} fund={f} />
            ))}
          </div>
        </Container>
      )}

      {posts && posts.items.length > 0 && (
        <Container>
          <SectionTitle
            eyebrow="بلاگ و آموزش"
            title="یاد بگیر، تمرین کن، فاند شو"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {posts.items.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <LinkButton
              endContent={<ArrowLeft size={16} />}
              href="/blog"
              variant="bordered"
            >
              همه مقالات
            </LinkButton>
          </div>
        </Container>
      )}

      <Container className="max-w-4xl">
        <SectionTitle eyebrow="سوالات متداول" title="سوالی داری؟" />
        <Faq limit={6} />
        <div className="flex justify-center mt-8">
          <LinkButton
            color="primary"
            endContent={<ArrowLeft size={16} />}
            href="/faq"
            variant="light"
          >
            مشاهده همه سوالات
          </LinkButton>
        </div>
      </Container>

      <Cta />
    </>
  );
}
