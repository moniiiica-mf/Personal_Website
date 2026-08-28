import styles from "./Insights.module.css";

export default function Insights({
  label,
  items,
}: {
  label?: string;
  items: { title: string; body: string }[];
}) {
  return (
    <div className={styles.wrap}>
      {label && <p className={`eyebrow ${styles.label}`}>{label}</p>}
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.item}>
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
