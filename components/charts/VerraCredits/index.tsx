import Chart from "./Chart";

const demoFixture = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

async function fetchData() {
  const res = await fetch(
    "https://staging-carbon-dashboard-9yimq.ondigitalocean.app/api/v1/credits/agg/daily?bridge=toucan&status=bridged&operator=cumsum",
    {
      cache: "no-store",
      next: {
        revalidate: 0,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch verra credits data");
  }
  const _data = await res.json(); // just fetching for a real async experience
  return demoFixture;
}

/** Async server component that renders a Recharts client component */
export default async function VerraCreditsChart() {
  const data = await fetchData();
  return <Chart data={data} />;
}
