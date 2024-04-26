"use client";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";

export default function DarkMode() {
  const [systemPreferences, setSystemPreferences] = useState<MediaQueryList>();
  useEffect(() => {
    setSystemPreferences(window.matchMedia("(prefers-color-scheme:dark)"));
    document.documentElement.classList.add("dark");
  }, []);
  const toggle = () => {
    systemPreferences && document.documentElement.classList.toggle("dark");
  };
  return (
    <button
      className="p-2 rounded-md bg-purple-light dark:bg-yellow-light"
      onClick={toggle}
    >
      <Moon size={22} weight="fill" className="text-purple dark:hidden" />
      <Sun size={22} weight="fill" className="hidden text-yellow dark:block" />
    </button>
  );
}
