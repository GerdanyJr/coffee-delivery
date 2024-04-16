export function BannerItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 text-base font-normal text-base-text font-roboto lg:text-base lg:font-light">
      {icon}
      <p>{title}</p>
    </div>
  );
}
