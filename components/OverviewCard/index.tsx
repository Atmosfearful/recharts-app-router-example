import Link from "next/link";
import styles from "./styles.module.css";

/**
 * A card that contain a chart or other data to be displayed in an overview page.
 * Includes a title, description, hyperlink and other elements.
 */
export default function OverviewCard(props: {
  children: React.ReactNode;
  title: string;
  href: string;
}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h2>{props.title}</h2>
        <Link href={props.href}>Details👉</Link>
      </div>
      <div className={styles.cardContent}>{props.children}</div>
    </div>
  );
}
