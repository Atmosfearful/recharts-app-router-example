/** Shared layout to provide uniform header, footer, and content wrapper for Details views */
export default function DetailsLayout(props: { children: React.ReactNode }) {
  return (
    <main>
      <div>{props.children}</div>
    </main>
  );
}
