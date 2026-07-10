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
  /** External link — opens in a new browser tab. */
  url?: string;
  /** Opens one of the site's floating windows instead of a link. */
  window?: "books";
}

export interface BookItem {
  title: string;
  author: string;
  /** Your thoughts on the book. */
  thoughts: string;
  /** Cover image under /public, e.g. "/images/books/cover.jpg". Leave off for a placeholder box. */
  image?: string;
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
      role: "Software Engineering Intern",
      company: "Droisys",
      period: "July 2025 — September 2025",
      description:
        "I built a production agentic chatbot that combines LangGraph, MCP, and GPT-4 to help teams prep pitches in 30 minutes instead of 3+ hours. Along the way, I designed an eval framework that catches and corrects AI hallucinations automatically, pushing task success up to 90%, and built out a fast, async API layer (sub-220ms responses, 99.5% uptime) to handle it all at scale; all containerized with Docker so new devs can be up and running in under 5 minutes.",
    },
    {
      role: "Software Developer Intern",
      company: "LifeStages Inc.",
      period: "October 2025 — January 2026",
      description:
        "I architected scalable RESTful microservices on Google Cloud Run using Python and FastAPI, letting 1,000+ users pull personalized data without any latency drop, cutting retrieval time by 40%. On the frontend, I built reusable React + TypeScript components wired into those APIs to power personalized recommendations, using strict typing across 10+ shared components to cut prop-related bugs in half. I also stayed closely involved in the team's process, joining daily standups and code reviews to help keep quality high and best practices consistent.",
    },
    {
      role: "Machine Learning Intern",
      company: "UC Davis Center for Mind and Brain",
      period: "January 2025 — Present",
      description:
        "I engineered an automated data pipeline with FreeSurfer and Python to parallelize brain scan segmentation across 100+ scans, optimizing file I/O to slash processing time from 8 hours down to 45 minutes. I also designed and ran controlled ML experiments on multi-region neuroimaging data, building feature extraction pipelines and cross-validation frameworks to test how well models generalized across different patient cohorts. To close the loop, I built a statistical data platform with Pandas and Scikit-learn that processed 200+ patient records through automated reporting pipelines and RESTful APIs, cutting manual analysis time by 70%.",
    },
    {
      role: "Full Stack Developer Intern",
      company: "TerraAI",
      period: "July 2024 — January 2025",
      description:
        "I developed 6 responsive web pages using reusable React and Node.js components, cutting code redundancy by 30% and making the system easier to maintain and scale long-term. I also designed and optimized a relational SQL database schema with 10+ tables, writing complex queries for efficient retrieval and enforcing referential integrity to keep data consistent across the system. To protect all of it, I built automated Jest testing pipelines with 50+ unit tests reaching 95% coverage, catching regressions early and shipping with zero critical production issues.",
    },
  ] satisfies ExperienceItem[],
  links: [
    { label: "GitHub", url: "https://github.com/varshini-gurushankar", icon: "github" },
    { label: "Twitter", url: "https://twitter.com/varsh_guru", icon: "twitter" },
    { label: "Resume", url: "https://drive.google.com/file/d/1Y9lC3dZosu4qXqg8mWWRMXAlZxLQFbE6/view?usp=sharing", icon: "file" },
  ] satisfies LinkItem[],
  contact: {
    emails: ["varshinigurushankar15@gmail.com", "vgurushankar@ucsd.edu"],
    formEnabled: false,
  },
  extras: [
    {
      title: "Projects",
      description: "",
      url: "https://github.com/varshini-gurushankar",
    },
    {
      title: "some books i've been reading",
      description: "books that have altered my brain chemistry and given me a new perspective on life",
      window: "books",
    },
  ] satisfies ExtraItem[],
  books: [
    {
      title: "The Mountain Is You",
      author: "Brianna Wiest",
      thoughts: "by reading this book I realized that self-sabatoge is done as a protection from past trauma and are coping mechanisms to it. The metaphor, the 'mountain' is actually you preventing yourself from growing through these patterns. from this book I understood that by understanding and working through these patterns, the obstacle transforms into something you can climb and grow from. ",
      image: "/images/books/mountain-is-you.jpg",
    },
    {
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      thoughts: "I started reading this book in one of the lowest points in my life, and it taught me practical ways to manage interpersonal relationships, communication, and leadership. It helped me understand that people are driven by ego, and how most of the social/professional friction comes from ignoring that. However, I would not the recommend using the advice from this book to make genuine friends. ",
      image: "/images/books/win-friends.jpg",
    },
    {
      title: "The 48 Laws of Power",
      author: "Robert Greene",
      thoughts: "my friend recommeneded this book to me. i didn't really read this book to learn how to gain power. this book informed me of how people act, in both professional and personal spaces when they want to gain power. it helped me read rooms better and has saved me from bad situations.",
      image: "/images/books/48-laws.jpg",
    },
  ] satisfies BookItem[],
};
