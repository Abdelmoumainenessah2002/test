import React from 'react'
import Link from 'next/link'
import Footer from '@/components/layouts/Footer';
import { useTranslations, useLocale } from "next-intl";

interface HomePageComponentProps {
  onScreenClick: () => void;
}

const HomePageComponent = ({ onScreenClick }: HomePageComponentProps) => {
  // Translations
  const tCommon = useTranslations("common");
  const tHomepage = useTranslations("homepage");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div onClick={onScreenClick} dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 `}>
                {tHomepage("heroTitle")}
                <br />
                <span className={`inline-block mt-2 `} style={{
                  background: "linear-gradient(to right, var(--mushrif-orange), var(--mushrif-red), var(--mushrif-yellow) )", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: "1.2",
                  paddingBottom: "4px"
                }}>
                  {tHomepage("heroSubtitle")}
                </span>
              </h1>
              <p className={`text-xl text-muted mb-8 max-w-3xl mx-auto leading-relaxed `}>
                {tHomepage("heroDescription")}
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? 'space-x-reverse' : ''}`}>
                <Link href="/register">
                    <button
                      className={`w-full sm:w-auto px-8 py-4 bg-mushrifOrange text-white text-lg font-semibold rounded-xl transition-all duration-200 hover:opacity-90 transform hover:scale-105 ${isRTL ? 'pt-5' : ''}`}
                    >
                      {tHomepage("startFreeToday")}
                    <svg className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'} inline`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M11 17l-5-5m0 0l5-5m-5 5h18" : "M13 7l5 5m0 0l-5 5m5-5H6"} />
                    </svg>
                    </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Background Decorations */}
          <div
            className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-30 dark:opacity-20 bg-mushrifBlue"
          ></div>
          <div
            className="absolute top-40 right-20 w-16 h-16 rounded-full opacity-30 dark:opacity-20 bg-mushrifRed"
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full opacity-40 dark:opacity-20 bg-mushrifOrange"
          ></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20  border-t border-gray-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl lg:text-4xl font-bold mb-4 `}>{tHomepage("featuresTitle")}</h2>
              <p className={`text-xl text-muted max-w-2xl mx-auto `}>
                {tHomepage("featuresDescription")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 hover:cursor-pointer">
              {/* Feature 1 */}
              <div className="bg-gray-100 dark:bg-white border p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-mushrifOrange"
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold text-gray-900 mb-3 `}>{tHomepage("teamManagement")}</h3>
                <p className={`text-gray-600 mb-4 `}>
                  {tHomepage("teamManagementDesc")}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className={`flex items-center ${isRTL ? '' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-mushrifOrange ${isRTL ? 'ml-3 mt-2' : 'mr-3'}`}></div>
                    <span className={``}>{tHomepage("multiLevelAdmin")}</span>
                  </li>
                  <li className={`flex items-center ${isRTL ? '' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-mushrifOrange ${isRTL ? 'ml-3 mt-2' : 'mr-3'}`}></div>
                    <span className={``}>{tHomepage("roleBasedAccess")}</span>
                  </li>
                  <li className={`flex items-center ${isRTL ? '' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-mushrifOrange ${isRTL ? 'ml-3 mt-2' : 'mr-3'}`}></div>
                    <span className={``}>{tHomepage("teamCollaboration")}</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-100 dark:bg-white border p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-mushrifYellow"
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold text-gray-900 mb-3 `}>{tHomepage("sprintPlanning")}</h3>
                <p className={`text-gray-600 mb-4 `}>{tHomepage("sprintPlanningDesc")}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className={`flex items-center ${isRTL ? '' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-mushrifYellow ${isRTL ? 'ml-3 mt-2' : 'mr-3'}`}></div>
                    <span className={``}>{tHomepage("kanbanScrum")}</span>
                  </li>
                  <li className={`flex items-center ${isRTL ? '' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-mushrifYellow ${isRTL ? 'ml-3 mt-2' : 'mr-3'}`}></div>
                    <span className={``}>{tHomepage("storyPointEstimation")}</span>
                  </li>
                  <li className={`flex items-center ${isRTL ? '' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-mushrifYellow ${isRTL ? 'ml-3 mt-2' : 'mr-3'}`}></div>
                    <span className={``}>{tHomepage("backlogManagement")}</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-100 dark:bg-white border p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-mushrifBlue"
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold text-gray-900 mb-3 `}>{tHomepage("analyticsReports")}</h3>
                <p className={`text-gray-600 mb-4 `}>
                  {tHomepage("analyticsReportsDesc")}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className={`flex items-center ${isRTL ? '' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-mushrifBlue ${isRTL ? 'ml-3 mt-2' : 'mr-3'}`}></div>
                    <span className={``}>{tHomepage("velocityTracking")}</span>
                  </li>
                  <li className={`flex items-center ${isRTL ? '' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-mushrifBlue ${isRTL ? 'ml-3 mt-2' : 'mr-3'}`}></div>
                    <span className={``}>{tHomepage("burndownCharts")}</span>
                  </li>
                  <li className={`flex items-center ${isRTL ? '' : ''}`}>
                    <div className={`w-2 h-2 rounded-full bg-mushrifBlue ${isRTL ? 'ml-3 mt-2' : 'mr-3'}`}></div>
                    <span className={``}>{tHomepage("customDashboards")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl lg:text-4xl font-bold mb-4 `}>{tHomepage("howItWorksTitle")}</h2>
              <p className={`text-xl text-muted max-w-2xl mx-auto `}>
                {tHomepage("howItWorksDescription")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold bg-mushrifOrange ${isRTL ? 'pt-2' : ''}`}
                >
                  1
                </div>
                <h3 className={`text-xl font-semibold mb-4 `}>{tHomepage("createWorkspace")}</h3>
                <p className={`text-muted `}>
                  {tHomepage("createWorkspaceDesc")}
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold bg-mushrifYellow ${isRTL ? 'pt-2' : ''}`}
                >
                  2
                </div>
                <h3 className={`text-xl font-semibold mb-4 `}>{tHomepage("planOrganize")}</h3>
                <p className={`text-muted `}>
                  {tHomepage("planOrganizeDesc")}
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold bg-mushrifBlue ${isRTL ? 'pt-2' : ''}`}
                >
                  3
                </div>
                <h3 className={`text-xl font-semibold mb-4 `}>{tHomepage("trackDeliver")}</h3>
                <p className={`text-muted `}>
                  {tHomepage("trackDeliverDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20" style={{ backgroundColor: "#f97316" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className={`text-4xl font-bold mb-2 `}>500+</div>
                <div className={`text-orange-100 `}>{tHomepage("teamsUsing")}</div>
              </div>
              <div>
                <div className={`text-4xl font-bold mb-2 `}>10k+</div>
                <div className={`text-orange-100 `}>{tHomepage("projectsCompleted")}</div>
              </div>
              <div>
                <div className={`text-4xl font-bold mb-2 `}>99.9%</div>
                <div className={`text-orange-100 `}>{tHomepage("uptimeGuarantee")}</div>
              </div>
              <div>
                <div className={`text-4xl font-bold mb-2 `}>24/7</div>
                <div className={`text-orange-100 `}>{tHomepage("supportAvailable")}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className={`text-3xl lg:text-4xl font-bold text-white mb-6 `}>
              {tHomepage("ctaTitle")}
            </h2>
            <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto `}>
              {tHomepage("ctaDescription")}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'space-x-reverse' : ''}`}>
              <Link href="/register">
                <button
                  className={`w-full sm:w-auto px-8 py-4 text-white text-lg font-semibold rounded-xl transition-all duration-200 hover:opacity-90 transform hover:scale-105 ${isRTL ? 'pt-5' : ''}`}
                  style={{ backgroundColor: "#f97316" }}
                >
                  {tHomepage("getStartedNow")}
                </button>
              </Link>
              <button className={`w-full sm:w-auto px-8 py-4 text-white text-lg font-semibold border-2 border-white rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-200 ${isRTL ? 'pt-5' : ''}`}>
                {tHomepage("contactSales")}
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
  )
}

export default HomePageComponent