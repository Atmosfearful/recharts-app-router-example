import OverviewCard from "@/components/OverviewCard";
import Skeleton from "@/components/Skeleton";
import VerraCreditsChart from "@/components/charts/VerraCredits";
import { Suspense } from "react";
import styles from "./page.module.css";
import TokenizedCreditsByBridge from "@/components/charts/TokenizedCreditsByBridge";

/** Overview page (index/landing page) */
export default function Page() {
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
        I have added a 2 second delay to fetch for the Verra chart. Take note of
        Skeleton loading states and the default caching behavior. The fetch is
        shared across page navigations, so no reload is needed when clicking{" "}
        <code>details</code> or <code>back</code>.
      </p>{" "}
      <p>
        Caching & fetching behavior can be further fine-tuned for a page or
        layout using{" "}
        <a
          href="https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config"
          target="_blank"
        >
          Route Segment Config
        </a>
        , outside the scope of this demo.
      </p>
      <OverviewCard title="Verra credits" href="/details/verra-credits">
        <Suspense fallback={<Skeleton />}>
          <VerraCreditsChart />
        </Suspense>
      </OverviewCard>
      <OverviewCard
        title="Tokenized credits by bridge"
        href="/details/tokenized-credits-by-bridge"
      >
        <Suspense fallback={<Skeleton />}>
          <TokenizedCreditsByBridge />
        </Suspense>
      </OverviewCard>
    </main>
  );
}
