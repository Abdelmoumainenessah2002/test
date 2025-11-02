
'use client'
import React from 'react'
import { useLocale } from 'next-intl'
import Image from 'next/image'

const Loading = () => {
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <div className={`min-h-screen flex ${isRTL ? "flex-row-reverse" : "flex-row"}`}>
      {/* Left Section - Social Login with Background */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        {/* Background Image with Loading Animation */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse"
          style={{
            backgroundImage: `url('/login-bg.jpg?height=800&width=600')`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, var(--mushrif-blue) 0%, var(--mushrif-orange) 50%, var(--mushrif-yellow) 75%)",
              opacity: 0.9,
            }}
          ></div>
        </div>

        {/* Content Overlay with Loading Animation */}
        <div className="relative z-10 flex flex-col items-center w-full px-12 mt-20 text-white">
          <div className="max-w-md text-center">
            {/* Animated Logo */}
            <div className="w-20 h-20 rotate-90 rounded-2xl flex items-center justify-center mx-auto my-8 animate-spin">
              <Image
                src="/Mushrif-logo-icon.svg"
                alt="Mushrif Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Loading Text with Fade Animation */}
            <div className="animate-pulse">
              <div className="h-10 bg-white bg-opacity-20 rounded-lg mb-6 animate-pulse"></div>
              <div className="h-6 bg-white bg-opacity-15 rounded-lg mb-8 animate-pulse"></div>
            </div>

            {/* Social Login Button Skeletons */}
            <div className="space-y-4 w-full max-w-sm mx-auto">
              <div className="w-full h-12 bg-white bg-opacity-20 rounded-lg animate-pulse"></div>
              <div className="w-full h-12 bg-white bg-opacity-20 rounded-lg animate-pulse"></div>
              <div className="w-full h-12 bg-white bg-opacity-20 rounded-lg animate-pulse"></div>
            </div>

            {/* Loading Dots */}
            <div className="mt-8 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form Loading Skeleton */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md">
          {/* Back Button Skeleton */}
          <div className="mb-8">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded mr-2 animate-pulse"></div>
              <div className="w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Main Form Container */}
          <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm shadow-2xl border-0 rounded-2xl p-8">
            {/* Header Skeleton */}
            <div className="text-center pb-6">
              <div className="w-48 h-8 mx-auto mb-2 rounded animate-pulse"
                   style={{
                     background: "linear-gradient(to right, var(--mushrif-orange), var(--mushrif-red))",
                     opacity: 0.3
                   }}>
              </div>
              <div className="w-32 h-4 bg-gray-300 dark:bg-gray-600 mx-auto rounded animate-pulse"></div>
            </div>

            {/* Form Fields Skeleton */}
            <div className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                <div className="relative">
                  <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                  <div className="absolute top-1/2 right-3 -translate-y-1/2 w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`flex items-center space-x-2 ${isRTL ? "space-x-reverse" : ""}`}>
                  <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                  <div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                </div>
                <div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
              </div>

              {/* Submit Button */}
              <div className="w-full h-12 rounded-lg animate-pulse"
                   style={{
                     background: "linear-gradient(to right, var(--mushrif-orange), var(--mushrif-red))",
                     opacity: 0.6
                   }}>
              </div>
            </div>

            {/* Mobile Social Login Skeleton */}
            <div className="lg:hidden mt-6">
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="w-24 h-4 bg-gray-200 dark:bg-gray-800 px-2 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              </div>
            </div>

            {/* Sign Up Link Skeleton */}
            <div className="mt-6">
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
              </div>
              <div className="text-center pt-3">
                <div className="w-48 h-4 bg-gray-300 dark:bg-gray-600 mx-auto rounded animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center mt-6">
            <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-500 mr-3"></div>
              <span className="text-sm font-medium">
                {isRTL ? 'جاري التحميل...' : 'Loading...'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading