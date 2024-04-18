import { MapPin } from "@phosphor-icons/react/dist/ssr";
export default function Location({ place }: { place: string }) {
  return (
    <div className="items-center hidden gap-1 p-1 rounded-md bg-purple-light md:flex">
      <MapPin size={22} weight="fill" color="var(--purple)" />
      <span className="text-sm text-purple-dark roboto">{place}</span>
    </div>
  );
}
