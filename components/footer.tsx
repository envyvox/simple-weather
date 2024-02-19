import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-40 min-h-[4vh] w-full bg-background/20 backdrop-blur supports-[backdrop-filter]:bg-background/20">
      <div className="container flex h-16 items-center">
        <p className="text-sm leading-loose text-foreground">
          Build by {""}
          <Link
            className="font-medium underline underline-offset-4"
            href={siteConfig.links.twitter}
          >
            envyvox
          </Link>
          . The source code is avaible on {""}
          <Link
            className="font-medium underline underline-offset-4"
            href={siteConfig.links.github}
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
