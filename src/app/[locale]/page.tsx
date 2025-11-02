'use client'
import Header from "@/components/layouts/Header"
import HomePageComponent from "@/components/layouts/HomePageComponent"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [screenCliked, setScreenCliked] = useState(false)

  const handleScreenClickHandled = () => {
    setScreenCliked(false); // Reset the state after Header processes it
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <Header screenClicked={screenCliked} onScreenClickHandled={handleScreenClickHandled} />

      <HomePageComponent onScreenClick={() => setScreenCliked(true)} />
    </div>
  )
}
