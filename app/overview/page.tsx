import styles from "./page.module.css";

/** Overview page (index/landing page) captured via rewrite in next.config.js*/
export default function OverviewPage() {
  return (
    <main className={styles.main}>
      <h1>State of the digital carbon market</h1>
      <p>
        This demo shows how we can leverage the new App router for more flexible
        data fetching, caching, and loading states. See the{" "}
        <a
          href="https://github.com/Atmosfearful/recharts-app-router-example"
          target="_blank"
        >
          example repository
        </a>{" "}
        and explore the directory/file structure.
      </p>
      <p>
        Caching & fetching behavior can be further fine-tuned for a page or
        layout using{" "}
        <a
          href="https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config"
          target="_blank"
        >
          Route Segment Config
        </a>
        .
      </p>
    </main>
  );
}
