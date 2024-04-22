import Link from "next/link";

export function FooterLink({
  href,
  logo,
  title,
}: {
  href: string;
  logo: React.ReactNode;
  title: string;
}) {
  return (
    <Link className="flex items-center gap-1" href={href}>
      {logo}
      {title}
    </Link>
  );
}
