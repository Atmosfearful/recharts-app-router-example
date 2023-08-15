import Link from "next/link";
import styles from "./styles.module.css";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <Link href="/">👈 Back</Link>
      <h1>Tokenized credits by bridge</h1>
      <div className={styles.chartContainer}>{props.children}</div>
      <p>Lorum Ipsum yo. Its a pie chart bro</p>
    </main>
  );
}
