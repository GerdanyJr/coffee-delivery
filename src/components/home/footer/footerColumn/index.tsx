import React from "react";

export function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 py-2 text-sm text-base-text">
      <h3 className="mb-1 text-sm font-bold uppercase text-base-title">
        {title}
      </h3>
      {children}
    </div>
  );
}
