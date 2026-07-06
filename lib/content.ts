export type LinkIcon = "github" | "twitter" | "globe" | "file";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface LinkItem {
  label: string;
  url: string;
  icon: LinkIcon;
}

export interface ExtraItem {
  title: string;
  description: string;
  url?: string;
}

export interface SocialItem {
  platform: string;
  url: string;
}

export const siteContent = {
  name: "Your Name",
  tagline: "designer · developer · placeholder",
  about: {
    bio: "This is placeholder bio copy. Write a few sentences about who you are, what you care about, and what you're working on right now. Edit everything in lib/content.ts.",
    photo: "/images/you.png",
  },
  experience: [
    {
      role: "Job Title",
      company: "Company One",
      period: "2024 — present",
      description:
        "Placeholder description of what you did here: the product, your responsibilities, and what you shipped.",
    },
    {
      role: "Previous Job Title",
      company: "Company Two",
      period: "2022 — 2024",
      description:
        "Another placeholder entry. Add or remove items in the experience array to match your history.",
    },
  ] satisfies ExperienceItem[],
  links: [
    { label: "GitHub", url: "https://github.com/yourhandle", icon: "github" },
    { label: "Twitter", url: "https://twitter.com/yourhandle", icon: "twitter" },
    { label: "Website", url: "https://example.com", icon: "globe" },
  ] satisfies LinkItem[],
  contact: {
    email: "you@example.com",
    formEnabled: false,
  },
  extras: [
    {
      title: "Side Project",
      description: "A placeholder side project. Link it, or delete this entry.",
      url: "https://example.com",
    },
    {
      title: "Fun Fact",
      description: "Something fun about you — no link needed.",
    },
  ] satisfies ExtraItem[],
  socials: [
    { platform: "github", url: "https://github.com/yourhandle" },
    { platform: "twitter", url: "https://twitter.com/yourhandle" },
    { platform: "instagram", url: "https://instagram.com/yourhandle" },
  ] satisfies SocialItem[],
};
