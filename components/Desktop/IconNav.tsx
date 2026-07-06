"use client";

import {
  BriefcaseBusiness,
  Link2,
  Mail,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { SectionId } from "@/context/SiteContext";
import IconButton from "./IconButton";

const NAV: { section: SectionId; icon: LucideIcon }[] = [
  { section: "about", icon: UserRound },
  { section: "experience", icon: BriefcaseBusiness },
  { section: "links", icon: Link2 },
  { section: "contact", icon: Mail },
  { section: "extras", icon: Sparkles },
];

export default function IconNav() {
  return (
    <nav aria-label="Sections" className="flex flex-wrap justify-center gap-5">
      {NAV.map(({ section, icon }) => (
        <IconButton key={section} section={section} icon={icon} />
      ))}
    </nav>
  );
}
