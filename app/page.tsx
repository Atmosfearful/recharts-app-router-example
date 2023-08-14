import OverviewCard from "@/components/OverviewCard";
import Skeleton from "@/components/Skeleton";
import VerraCreditsChart from "@/components/charts/VerraCredits";
import { Suspense } from "react";
import styles from "./page.module.css";

/** Overview page (index/landing page) */
export default function Overview() {
  return (
    <main className={styles.main}>
      <h1>State of the digital carbon market</h1>
      <p>Overview cards go here</p>
      <OverviewCard title="Verra credits" href="/details/verra-credits">
        <Suspense fallback={<Skeleton />}>
          <VerraCreditsChart />
        </Suspense>
      </OverviewCard>
      <OverviewCard title="Verra credits" href="/details/verra-credits">
        <Skeleton />
      </OverviewCard>
    </main>
  );
}
