import VerraCreditsChart from "@/components/charts/VerraCredits";
import styles from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main className={styles.main}>
      <Link href="/">👈 Back</Link>
      <h1>Verra credits</h1>
      <div className={styles.chartContainer}>
        <Suspense fallback={<Skeleton />}>
          <VerraCreditsChart />
        </Suspense>
      </div>
      <p>
        I have added a 2 second delay to fetch. Take note of Skeleton loading
        states and the default caching behavior. The fetch is shared across page
        navigations, so no reload is needed when clicking <code>details</code>{" "}
        or <code>back</code>
      </p>
    </main>
  );
}
