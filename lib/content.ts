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

export interface AboutSection {
  text: string;
  /** Path under /public, e.g. "/images/robotics.jpg". Leave undefined to show a placeholder box. */
  image?: string;
  imageAlt?: string;
}

export const siteContent = {
  name: "varshini",
  tagline: [
    "i'm a software engineer + product builder.",
    "prev working at a startup and doing research with ML systems at UC Davis.",
    "reach me at vgurushankar@ucsd.edu",
  ],
  about: {
    sections: [
      {
        text: "i was born in india and grew up in san diego, ca for most of my life. i was a curious child, and spent a lot of my childhood building things, like dolls out of toliet paper rolls to keep me entertained .",
        image: "/images/toiletpaperdolls.jpg",
        imageAlt: "dolls i made out of toilet paper rolls as a kid",
      },
      {
        text: "during my time at UC san diego, joining clubs like the AI student collective and having the opportunity to go to conferences and meet ambitious and passionate people like mark zuckerburg solidified that tech, specifically the intersection of swe + product is something I want to do.",
        image: "/images/stripesessions-crop.jpg",
        imageAlt: "stripe sessions conference",
      },
      {
        text: "apart from work i love going to the beach, rating different food spots on beli, and traveling with friends and family.",
        image: "/images/varshinibeach-crop.jpg",
        imageAlt: "me at the beach",
      },
    ] as AboutSection[],
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
