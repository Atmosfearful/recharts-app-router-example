import OverviewCard from "@/components/OverviewCard";

export default function RootLayout(props: {
  children: React.ReactNode;
  verraCreditsChart: JSX.Element;
  tokenizedCreditsChart: JSX.Element;
}) {
  return (
    <>
      {props.children}
      <OverviewCard title="Verra credits" href="/details/verra-credits">
        {props.verraCreditsChart}
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
