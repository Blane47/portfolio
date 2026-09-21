import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="inline-flex h-11 items-center transition-colors duration-150 hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
