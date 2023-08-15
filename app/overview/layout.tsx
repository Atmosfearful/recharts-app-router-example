import OverviewCard from "@/components/OverviewCard";
import Skeleton from "@/components/Skeleton";
import VerraCreditsChart from "@/components/charts/VerraCredits";
import { Suspense } from "react";
import TokenizedCreditsByBridge from "./@tokenizedCreditsChart/page";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {props.children}
      <OverviewCard
        title="Tokenized credits by bridge"
        href="/details/tokenized-credits-by-bridge"
      >
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
    </>
  );
}
