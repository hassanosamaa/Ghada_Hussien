"use client";
import { FC, useEffect } from "react";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/locales/client";
import { useRouter } from "next/navigation";
import { LanguageIcon } from "./icons/LanguageIcon";

interface IProps {}

const LanguageChanger: FC<IProps> = (props) => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const t = useI18n();
  const router = useRouter();

  useEffect(() => {
    document.querySelector("html")?.setAttribute("lang", currentLocale || "en");
    router.refresh();
  }, [currentLocale]);

  return (
    <div className="language-changer-container">
      <select
        className="language-select"
        value={currentLocale}
        onChange={(e) => changeLocale(e.target.value as "en" | "fr")}
        aria-label="Language selector"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
      </select>
    </div>
  );
};

export default LanguageChanger;
