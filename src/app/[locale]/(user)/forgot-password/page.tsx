import Link from "next/link"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import ResetPasswordForm from "./ResetPasswordForm"

const ResetPasswordPage = () => {
  const locale = useLocale()
  const isRTL = locale === "ar"
  const t = useTranslations("resetpassword")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: "var(--mushrif-orange)" }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: "var(--mushrif-blue)" }}
        ></div>
      </div>

      {/* Back Button */}
      <div className="w-full max-w-md mb-8">
        <Link
          href="/login"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
        >
          <svg
            className={`w-4 h-4 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t("backToLogin")}
        </Link>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-10">
          {/* Logo and Header */}
          <div className="text-center mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
              <Image
                src="/Mushrif-logo-icon.svg"
                alt="Mushrif Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            <h1
              className="text-3xl font-bold mb-3"
              style={{
                background: "linear-gradient(to right, var(--mushrif-orange), var(--mushrif-red))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("resetPassword")}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">{t("enterEmailToReset")}</p>
          </div>    

          {/* Reset Password Form */}
          <ResetPasswordForm isRTL={isRTL} />

          {/* Divider */}
          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
                {t("orContinueWith")}
              </span>
            </div>
          </div>

          {/* Alternative Actions */}
          <div className="space-y-3">
            <button className="w-full bg-white hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {t("emailSupport")}
            </button>

            <button className="w-full text-gray-700 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
              {t("contactSupport")}
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {t("rememberedPassword")}{" "}
              <Link
                href="/login"
                className="font-medium hover:underline transition-colors"
                style={{ color: "var(--mushrif-orange)" }}
              >
                {t("signInHere")}
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Security Badge */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          {t("securedConnection")}
        </p>
      </div>
    </div>
  )
}

export default ResetPasswordPage