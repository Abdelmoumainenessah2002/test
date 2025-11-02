import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const Footer = () => {
  // Translations
  const tFooter = useTranslations("footer");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const logoSrc =
    locale === "ar" ? "/Mushrif-logo-arabic.svg" : "/Mushrif-logo-english.svg";
  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-gray-900 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div
              className={`flex items-center -mt-2 ${
                isRTL ? "space-x-reverse space-x-3" : "space-x-3"
              }`}
            >
              <h2 className="text-2xl font-bold"> Mushrif </h2>
            </div>
            <p className={`text-gray-400 mt-4 leading-[1.9] ${isRTL ? "pt-3" : ""}`}>
              {tFooter("tagline")}
            </p>
          </div>
          <div>
            <h3 className={`font-bold mb-4 ${isRTL ? "pt-3" : ""}`}>
              {tFooter("product")}
            </h3>
            <ul className="space-y-2 text-gray-400 text-md">
              <li>
                <a
                  href="#"
                  className={`hover:text-white transition-colors ${
                    isRTL ? "pt-3" : ""
                  }`}
                >
                  {tFooter("features")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-white transition-colors ${
                    isRTL ? "pt-3" : ""
                  }`}
                >
                  {tFooter("pricing")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-white transition-colors ${
                    isRTL ? "pt-3" : ""
                  }`}
                >
                  {tFooter("integrations")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`font-semibold mb-4 ${isRTL ? "pt-3" : ""}`}>
              {tFooter("company")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className={`hover:text-white transition-colors ${
                    isRTL ? "pt-3" : ""
                  }`}
                >
                  {tFooter("about")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-white transition-colors ${
                    isRTL ? "pt-3" : ""
                  }`}
                >
                  {tFooter("blog")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-white transition-colors ${
                    isRTL ? "pt-3" : ""
                  }`}
                >
                  {tFooter("careers")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`font-semibold mb-4 ${isRTL ? "pt-3" : ""}`}>
              {tFooter("support")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className={`hover:text-white transition-colors ${
                    isRTL ? "pt-3" : ""
                  }`}
                >
                  {tFooter("helpCenter")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-white transition-colors ${
                    isRTL ? "pt-3" : ""
                  }`}
                >
                  {tFooter("contact")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`hover:text-white transition-colors ${
                    isRTL ? "pt-3" : ""
                  }`}
                >
                  {tFooter("status")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className={`${isRTL ? "pt-3" : ""}`}>
            &copy; {new Date().getFullYear()} {tCommon("mushrif")}.{" "}
            {tFooter("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
