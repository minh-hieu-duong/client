import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import AppLink from "@/components/common/AppLink";
import LangToggle from "@/components/layout/Header/LangToggle";

import { ROUTES } from "@/constants/routes";
import { LocaleKeys } from "@/types/locales";
import AppIcon from "@/components/common/AppIcon";
import SearchBar from "./SearchBar";

const ThemeToggle = dynamic(
  () => import("@/components/layout/Header/ThemeToggle"),
  { ssr: false }
);

interface NavBarProps {
  lang: string;
  dictionary: LocaleKeys;
}

function Header(props: NavBarProps) {
  const { lang, dictionary } = props;

  return (
    <header className="sticky z-header min-h-[100px]">
      <div className="container text-xs h-10 flex items-center font-medium justify-between uppercase">
        <div>
          <AppLink href={"/"} aria-label={dictionary["hello"]} className="">
            {dictionary["hello"]}
          </AppLink>
        </div>
        <div className="flex gap-4">
          <AppLink
            href={"/"}
            aria-label={dictionary["Sign In"]}
            className="flex items-center gap-1"
          >
            {dictionary["Sign In"]}
          </AppLink>
          <AppLink
            href={"/"}
            aria-label={dictionary["Sign up"]}
            className="flex items-center gap-1 border-l-2 pl-3.5"
          >
            {dictionary["Sign up"]}
          </AppLink>
          <AppLink
            href={"/"}
            aria-label={dictionary["store locator"]}
            className="flex items-center gap-1"
          >
            <AppIcon
              src="/svg/location.svg#id"
              aria-label={dictionary["store locator"]}
            />
            <span className="pl-1">{dictionary["store locator"]}</span>
          </AppLink>
        </div>
      </div>
      <div className="container grid grid-cols-12">
        <div className="col-span-3 flex items-center">
          <AppLink href={ROUTES.HOME.LINK} aria-label={dictionary.HieuShop}>
            <Image
              src="/svg/logo.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </AppLink>
        </div>
        <div className="col-span-5">
          <SearchBar dictionary={dictionary} />
        </div>
        <div className="col-span-4 flex items-center justify-end gap-8">
          <ThemeToggle dictionary={dictionary} />
          <LangToggle lang={lang} />
          <AppIcon src="/svg/cart.svg#id" aria-label="cart" />
          {/* <i
            className="bg-[url('https://cellphones.com.vn/media/icons/menu/icon-cps-3.svg')] w-20 h-20"
            aria-label="cart"
          /> */}
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
