export function BannerItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center text-base-text font-roboto font-light gap-2">
      {icon}
      <p>{title}</p>
    </div>
  );
}
