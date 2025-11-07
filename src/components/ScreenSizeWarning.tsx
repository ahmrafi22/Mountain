import { useEffect, useState } from 'react'

function ScreenSizeWarning() {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      // 720p width is 1280px
      setShowWarning(window.innerWidth < 1280)
    }

    // Check on mount
    checkScreenSize()

    // Check on resize
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  if (!showWarning) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="text-center px-8">
        <h1 className="text-6xl font-bold text-white mb-4 font-bebas">
          SORRY
        </h1>
        <p className="text-2xl text-white/80 mb-4">
          Not Optimized for Small Screens
        </p>
        <p className="text-base text-white/60 max-w-md mx-auto">
          This website is best experienced on screens with a minimum width of 1280px (720p).
          Please view on a larger device for the full experience.
        </p>
      </div>
    </div>
  )
}

export default ScreenSizeWarning
