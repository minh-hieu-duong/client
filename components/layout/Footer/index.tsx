import React from "react";
import { LocaleKeys } from "@/types/locales";

interface FooterProps {
  dictionary: LocaleKeys;
}

function Footer(props: FooterProps) {
  const { dictionary } = props;

  return (
    <footer className="container mb-14 mt-20 flex justify-between"></footer>
  );
}

export default React.memo(Footer);
