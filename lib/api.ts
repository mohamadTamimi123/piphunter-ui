const API_URL = process.env.API_PATH || "http://127.0.0.1:8084";

export interface Plan {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  accountSize: number;
  price: number;
  priceIrr: number;
  phases: number;
  profitTargetPhase1: number;
  profitTargetPhase2: number;
  dailyLossLimit: number;
  maxLossLimit: number;
  minTradingDays: number;
  maxDurationDays: number | null;
  profitSplit: number;
  leverage: number;
  features: string[];
  isPopular: boolean;
}

export interface PostSummary {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  category: string;
  tags: string[];
  publishedAt: string;
  views: number;
}

export interface Post extends PostSummary {
  content: string;
  author?: { fullName: string | null };
  related: PostSummary[];
}

export interface Fund {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  strategy: string | null;
  riskLevel: "low" | "medium" | "high";
  minInvestment: number;
  expectedMonthlyReturn: number;
  lockDays: number;
  managementFee: number;
  performanceFee: number;
  capacity: number;
  raised: number;
  status: "open" | "closed";
}

export interface PublicSettings {
  usdToIrr: number;
  supportEmail?: string;
  supportPhone?: string;
  telegram?: string;
  instagram?: string;
}

/** Server-side fetch with ISR; returns null when the API is unreachable so pages still render. */
export async function getApi<T>(
  path: string,
  revalidate = 60,
): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}/api/v1${path}`, {
      next: { revalidate },
    });

    if (!res.ok) return null;
    const json = await res.json();

    return json.data as T;
  } catch {
    return null;
  }
}

export const getPlans = () => getApi<Plan[]>("/plans");
export const getFunds = () => getApi<Fund[]>("/funds");
export const getSettings = () =>
  getApi<PublicSettings>("/settings/public", 300);
export const getPosts = (query = "") =>
  getApi<{
    items: PostSummary[];
    total: number;
    page: number;
    pageSize: number;
  }>(`/blog/posts${query}`);
export const getCategories = () =>
  getApi<{ category: string; count: string }[]>("/blog/categories");
export const getPost = (slug: string) =>
  getApi<Post>(`/blog/posts/${encodeURIComponent(slug)}`, 0);
