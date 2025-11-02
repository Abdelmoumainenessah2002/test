'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ThemeToggle } from '@/components/theme-toggle'
import { useTranslations, useLocale } from "next-intl";

interface HeaderProps {
  screenClicked?: boolean;
  onScreenClickHandled?: () => void;
}

const Header = ({ screenClicked, onScreenClickHandled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when screen is clicked outside
  useEffect(() => {
    if (screenClicked && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
      onScreenClickHandled?.(); // Notify parent that we handled the click
    }
  }, [screenClicked, isMobileMenuOpen, onScreenClickHandled])


  // Translations
  const tHeader = useTranslations("header");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  const isRTL = locale === "ar";

  const logoSrc =
    locale === "ar"
      ? "/Mushrif-logo-arabic.svg"
      : "/Mushrif-logo-english.svg";
    

  return (
    <header dir={isRTL ? "rtl" : "ltr"} className="bg-white dark:bg-gray-900 shadow-md dark:shadow-none dark:drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3 sm:space-x-0' : 'space-x-3 sm:space-x-0'}`}>
              <Image width={160} height={50} src={logoSrc} alt="Mushrif Logo" className={`w-32 h-auto sm:w-40 md:w-44 lg:w-48 `}/>
            </div>

            {/* Navigation */}
            <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8 pt-3' : 'space-x-8'}`}>
              <a href="/features" className="relative text-lg text-gray-600 dark:text-gray-300 hover:text-mushrifOrange dark:hover:text-mushrifOrange transition-colors duration-200 cursor-pointer group">
                {tHeader("features")}
                <span className={`absolute ${isRTL ? 'right-0' : 'left-0'} bottom-0 w-0 h-0.5 bg-mushrifOrange transition-all duration-300 group-hover:w-full`}></span>
              </a>
              <a href="/about" className="relative text-lg text-gray-600 dark:text-gray-300 hover:text-mushrifOrange dark:hover:text-mushrifOrange transition-colors duration-200 cursor-pointer group">
                {tHeader("about")}
                <span className={`absolute ${isRTL ? 'right-0' : 'left-0'} bottom-0 w-0 h-0.5 bg-mushrifOrange transition-all duration-300 group-hover:w-full`}></span>
              </a>
              <a href="/contact" className="relative text-lg text-gray-600 dark:text-gray-300 hover:text-mushrifOrange dark:hover:text-mushrifOrange transition-colors duration-200 cursor-pointer group">
                {tHeader("contact")}
                <span className={`absolute ${isRTL ? 'right-0' : 'left-0'} bottom-0 w-0 h-0.5 bg-mushrifOrange transition-all duration-300 group-hover:w-full`}></span>
              </a>
            </nav>

            {/* Auth Buttons & Theme Toggle */}
            <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <ThemeToggle />
              <Link href="/login">
                <button className={`px-5 rounded-md py-2 text-gray-700 dark:text-gray-300 border border-[#f97316] hover:text-mushrifOrange transition-colors hover:scale-105 duration-200 `}>
                  {tCommon("signIn")}
                </button>
              </Link>
              <Link href="/register">
                <button
                  className={`px-6 py-2 text-white rounded-lg font-medium transition-all duration-200 hover:opacity-90 transform hover:scale-105 bg-mushrifOrange `}
                >
                  {tCommon("getStarted")}
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className={`md:hidden flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <ThemeToggle />
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 relative"
              >
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="px-4 py-4 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  <a 
                    href="/features" 
                    className="block px-4 py-3 text-lg text-gray-600 dark:text-gray-300 hover:text-mushrifOrange hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                    
                  >
                    {tHeader("features")}
                  </a>
                  <a 
                    href="/about" 
                    className="block px-4 py-3 text-lg text-gray-600 dark:text-gray-300 hover:text-mushrifOrange hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                    
                  >
                    {tHeader("about")}
                  </a>
                  <a 
                    href="/contact" 
                    className="block px-4 py-3 text-lg text-gray-600 dark:text-gray-300 hover:text-mushrifOrange hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                    
                  >
                    {tHeader("contact")}
                  </a>
                </div>
                
                {/* Mobile Auth Buttons */}
                <div className="space-y-3 pt-4 z-100 border-t border-gray-100 dark:border-gray-800 dark:shadow-md">
                  <Link href="/login">
                    <button 
                      className={`w-full px-4 py-3 text-gray-700 dark:text-gray-300 border border-[#f97316] hover:text-mushrifOrange rounded-lg transition-colors duration-200 ${isRTL ? 'pt-4' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {tCommon("signIn")}
                    </button>
                  </Link>
                  <Link href="/register">
                    <button
                      className={`w-full mt-3 px-4 py-3 text-white rounded-lg font-medium bg-mushrifOrange hover:opacity-90 transition-all duration-200 ${isRTL ? 'pt-4' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {tCommon("getStarted")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
  )
}

export default Header