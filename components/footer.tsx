import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="sticky bottom-0 z-40 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:space-x-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
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
