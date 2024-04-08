import { MapPin } from "@phosphor-icons/react/dist/ssr";
import styles from "./location.module.css";

export default function Location() {
  return (
    <div className={styles.container}>
      <MapPin size={22} weight="fill" color="var(--purple)" />
      <span>Porto Alegre, RS</span>
    </div>
  );
}
