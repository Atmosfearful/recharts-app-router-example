Example app demonstrating data fetching, layouts and folder structure using new NextJS App router with React Suspense.

Instead of defining route-level caching and revalidation, I've defined these at the `fetch` level for each chart.

For example, we could have the Prices chart always render in real time on the server, while other charts on the same page have a much longer revalidation time.

I also tried both <Suspense> and next routes with `loading.tsx`, it's unclear what the performance difference is between these two.
