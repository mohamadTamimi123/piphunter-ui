import { LogoMark } from "@/components/brand/logo";
import { LinkButton } from "@/components/ui/link-button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 text-center px-6">
      <LogoMark size={64} />
      <h1 className="text-6xl font-black text-gradient ltr">404</h1>
      <p className="text-default-500">
        صفحه‌ای که دنبالش هستید پیدا نشد؛ شاید این پیپ از دستمان در رفته!
      </p>
      <LinkButton color="primary" href="/">
        بازگشت به صفحه اصلی
      </LinkButton>
    </div>
  );
}
