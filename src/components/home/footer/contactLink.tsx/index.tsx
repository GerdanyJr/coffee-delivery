import Link from "next/link";

export function ContactLink({
  href,
  logo,
}: {
  href: string;
  logo: React.ReactNode;
}) {
  return (
    <Link
      className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-dark"
      target="_blank"
      href={href}
    >
      {logo}
    </Link>
  );
}
