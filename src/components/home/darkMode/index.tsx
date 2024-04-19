"use client";
import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import { useEffect } from "react";

export default function DarkMode() {
  const systemPreferences = window.matchMedia("(prefers-color-scheme:dark)");
  const pageMode = document.documentElement.classList;
  useEffect(() => {
    pageMode.add("dark");
  }, []);
  const toggle = () => {
    systemPreferences && pageMode.toggle("dark");
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
