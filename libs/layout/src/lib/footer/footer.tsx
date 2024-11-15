import Link from "next/link";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer
      className={`${styles["footer"]} border-t border-border/40 py-6 dark:border-border md:px-8 md:py-0`}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            href="https://github.com/ebcp-dev"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            ebcp-dev
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/ebcp-dev/fs-starter"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
