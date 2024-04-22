export function BannerItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (

    <div className="flex items-center gap-2 font-light text-base-text font-roboto dark:text-white lg:text-base lg:font-light">

      {icon}
      <p>{title}</p>
    </div>
  );
}
