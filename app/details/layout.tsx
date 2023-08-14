/** Shared layout to provide uniform header, footer, and content wrapper for Details views */
export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header>This is a shared layout header for /details pages</header>
      <div>chart goes here</div>
      <footer>This is a shared layout footer for /details pages</footer>
    </main>
  );
}
