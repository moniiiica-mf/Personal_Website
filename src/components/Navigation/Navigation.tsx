import Link from "next/link";
import { NAV } from "@/data/site";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <ul className={styles.list}>
        {NAV.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={`pillButton ${styles.link}`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
