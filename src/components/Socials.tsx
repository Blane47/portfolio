import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./ui/BrandIcons";
import { socials } from "@/content/profile";

const ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  mail: Mail,
};

export default function Socials({ size = 17 }: { size?: number }) {
  return (
    <ul className="flex items-center gap-1">
      {socials.map((s) => {
        const Icon = ICONS[s.icon];
        const external = s.href.startsWith("http");
        return (
          <li key={s.label}>
            <a
              href={s.href}
              aria-label={s.label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer noopener" : undefined}
              className="grid size-11 place-items-center rounded-pill text-muted transition-colors duration-150 hover:bg-accent-soft hover:text-accent"
            >
              <Icon size={size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
