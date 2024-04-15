import { MapPin } from "@phosphor-icons/react/dist/ssr";
import styles from "./location.module.css";

export default function Location({ place }: { place: string }) {
  return (
    <div className="bg-purple-light flex gap-1 p-1 items-center rounded-md">
      <MapPin size={22} weight="fill" color="var(--purple)" />
      <span className="text-purple-dark text-sm roboto">{place}</span>
    </div>
  );
}
