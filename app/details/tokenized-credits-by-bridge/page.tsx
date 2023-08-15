import styles from "./page.module.css";
import Link from "next/link";
import TokenizedCreditsByBridge from "@/components/charts/TokenizedCreditsByBridge";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton";

export default function Page() {
  return (
    <main className={styles.main}>
      <Link href="/">👈 Back</Link>
      <h1>Tokenized credits by bridge</h1>
      <div className={styles.chartContainer}>
        <Suspense fallback={<Skeleton />}>
          <TokenizedCreditsByBridge />
        </Suspense>
      </div>
      <p>Lorum Ipsum yo. Its a pie chart bro</p>
    </main>
  );
}
