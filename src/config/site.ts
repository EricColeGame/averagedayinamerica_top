export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Average Day In America Wiki",
  shortName: "Average Day In America",
  logoText: "AD",
  tagline: "Complete Guides, Weapons, Jobs & Map",
  description: "Your ultimate guide to Average Day In America on Roblox! Explore weapons, jobs, controls, robbery guides, and Verdania map secrets.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://averagedayinamerica.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://averagedayinamerica.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/10075248947/Average-Day-In-America",
  heroVideoId: "O5gYVtvMlnM", // Roblox Average Day In America gameplay video
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
