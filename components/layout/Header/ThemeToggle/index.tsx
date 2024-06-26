"use client";

import React from "react";
import { useTheme } from "next-themes";

import AppIcon from "@/components/common/AppIcon";

import { LocaleKeys } from "@/types/locales";

interface Props {
  dictionary: LocaleKeys;
}

function ThemeToggle(props: Props) {
  const { dictionary } = props;

  const { theme, setTheme } = useTheme();

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target as HTMLInputElement;
    setTheme(checked ? "dark" : "light");
  };

  return (
    <label htmlFor="theme-toggle" aria-label="Theme Toggle">
      <input
        type="checkbox"
        id="theme-toggle"
        onChange={onToggle}
        defaultChecked={theme === "dark"}
        className="hidden"
      />

      <AppIcon
        src={theme === "dark" ? "/svg/sun.svg#id" : "/svg/moon.svg#id"}
        aria-label={dictionary["Turn on the light"]}
        width={20}
        height={20}
        className="cursor-pointer"
      />
    </label>
  );
}

export default React.memo(ThemeToggle);
