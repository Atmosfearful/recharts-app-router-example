import OverviewCard from "@/components/OverviewCard";
import Skeleton from "@/components/Skeleton";
import VerraCreditsChart from "@/components/charts/VerraCredits";
import { Suspense } from "react";

export default function RootLayout(props: {
  children: React.ReactNode;
  tokenizedCreditsChart: JSX.Element;
}) {
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
        {props.tokenizedCreditsChart}
      </OverviewCard>
    </>
  );
}
