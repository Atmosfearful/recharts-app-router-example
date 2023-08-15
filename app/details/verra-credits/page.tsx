import VerraCreditsChart from "@/components/charts/VerraCredits";
import styles from "./styles.module.css";
import Link from "next/link";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";

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
        For this page, I have used Suspense and I have forced server rendering
        of each request with `no-cache` and `revalidate: 0`.
      </p>
    </main>
  );
}
