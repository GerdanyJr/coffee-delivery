import styles from "./bannerItem.module.css";

export function BannerItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className={styles.banner_item}>
      {icon}
      <p>{title}</p>
    </div>
  );
}
