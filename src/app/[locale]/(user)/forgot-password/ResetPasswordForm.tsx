"use client"

import type React from "react"
import { useState } from "react"
import { useTranslations } from "next-intl"

interface ResetPasswordFormProps {
  isRTL: boolean
}

const ResetPasswordForm = ({ isRTL }: ResetPasswordFormProps) => {
  const t = useTranslations("resetpassword")
  const [step, setStep] = useState<"email" | "verify" | "newPassword">("email")
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    setTimeout(() => {
      console.log("Email sent:", email)
      setStep("verify")
      setIsLoading(false)
    }, 1500)
  }

  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    setTimeout(() => {
      console.log("Code verified:", verificationCode)
      setStep("newPassword")
      setIsLoading(false)
    }, 1500)
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError(t("passwordMismatch"))
      return
    }

    if (formData.password.length < 8) {
      setError(t("passwordTooShort"))
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      console.log("Password reset successful")
      // Redirect to login page
      window.location.href = "/login"
      setIsLoading(false)
    }, 1500)
  }

  return (
    <>
      {/* Progress Steps */}
      <div className="flex gap-2 mb-8 justify-center">
        <div
          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
            step === "email" || step === "verify" || step === "newPassword"
              ? ""
              : "bg-gray-300 dark:bg-gray-600"
          }`}
          style={{
            background:
              step === "email" || step === "verify" || step === "newPassword"
                ? "linear-gradient(to right, var(--mushrif-orange), var(--mushrif-red))"
                : undefined,
          }}
        ></div>

        <div
          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
            step === "verify" || step === "newPassword"
              ? ""
              : "bg-gray-300 dark:bg-gray-600"
          }`}
          style={{
            background:
              step === "verify" || step === "newPassword"
                ? "linear-gradient(to right, var(--mushrif-orange), var(--mushrif-red))"
                : undefined,
          }}
        ></div>

        <div
          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
            step === "newPassword" ? "" : "bg-gray-300 dark:bg-gray-600"
          }`}
          style={{
            background:
              step === "newPassword"
                ? "linear-gradient(to right, var(--mushrif-orange), var(--mushrif-red))"
                : undefined,
          }}
        ></div>
      </div>

      {/* Email Step */}
      {step === "email" && (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("emailAddress")}
            </label>
            <input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">{t("emailInstructions")}</p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style={{
              background: "linear-gradient(to right, var(--mushrif-orange), var(--mushrif-red))",
            }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {t("sendingReset")}
              </div>
            ) : (
              t("sendResetLink")
            )}
          </button>
        </form>
      )}

      {/* Verification Code Step */}
      {step === "verify" && (
        <form onSubmit={handleVerifySubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="code" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("verificationCode")}
            </label>
            <input
              id="code"
              type="text"
              placeholder="000000"
              maxLength={6}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ""))}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-center text-2xl tracking-widest font-mono"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">{t("checkEmail")}</p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || verificationCode.length !== 6}
            className="w-full text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style={{
              background: "linear-gradient(to right, var(--mushrif-orange), var(--mushrif-red))",
            }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {t("verifying")}
              </div>
            ) : (
              t("verifyCode")
            )}
          </button>

          <button
            type="button"
            onClick={() => setStep("email")}
            className="w-full text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            {t("backToEmail")}
          </button>
        </form>
      )}

      {/* New Password Step */}
      {step === "newPassword" && (
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("newPassword")}
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder={t("enterNewPassword")}
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${
                  isRTL ? "pl-12 pr-4" : "pr-12 pl-4"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 ${
                  isRTL ? "left-3 right-auto" : "right-3 left-auto"
                }`}
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{t("passwordRequirements")}</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("confirmPassword")}
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder={t("confirmNewPassword")}
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${
                  isRTL ? "pl-12 pr-4" : "pr-12 pl-4"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 ${
                  isRTL ? "left-3 right-auto" : "right-3 left-auto"
                }`}
              >
                {showConfirmPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:opacity-90 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style={{
              background: "linear-gradient(to right, var(--mushrif-orange), var(--mushrif-red))",
            }}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {t("resettingPassword")}
              </div>
            ) : (
              t("resetPassword")
            )}
          </button>
        </form>
      )}
    </>
  )
}

export default ResetPasswordForm
