import { buttonVariants } from "./ui/button";
import { siteConfig } from "@/config/site";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href={siteConfig.links.twitter}
            >
              <Twitter />
            </Link>
            <Link
              className={buttonVariants({ variant: "ghost" })}
              href={siteConfig.links.github}
            >
              <Github />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
