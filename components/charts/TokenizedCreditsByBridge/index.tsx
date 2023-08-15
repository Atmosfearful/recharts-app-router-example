import Chart from "./Chart";

const demoFixture = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

async function fetchData() {
  const res = await fetch(
    "https://staging-carbon-dashboard-9yimq.ondigitalocean.app/api/v1/credits/agg/daily?bridge=toucan&status=bridged&operator=cumsum"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch verra credits data");
  }
  const _data = await res.json(); // just fetching for a real async experience
  return demoFixture;
}

/** Async server component that renders a Recharts client component */
export default async function TokenizedCreditsByBridge() {
  const data = await fetchData();
  return <Chart data={data} />;
}
