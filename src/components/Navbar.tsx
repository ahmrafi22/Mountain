import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import menuIcon from '../assets/Menu.svg'
import mountainLogo from '../assets/Mountain Logo.svg'
import social from '../assets/Social.svg'

function Navbar() {
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }
      )
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className="w-full flex fixed justify-center py-8 z-50"
    >
      <div className="w-[90%]  grid grid-cols-[1fr_auto_1fr] items-center h-20">
        
        {/* Left section */}
        <div className="flex items-center gap-40 justify-start">
          <img src={menuIcon} alt="Menu" className="cursor-pointer" />
          <div className="flex items-center gap-20">
            <a href="#explore" className="text-white font-medium hover:opacity-80 transition-opacity">
              Explore
            </a>
            <a href="#store" className="text-white font-medium hover:opacity-80 transition-opacity">
              Store
            </a>
          </div>
        </div>

        {/* Center logo */}
        <div className="flex justify-center">
          <img src={mountainLogo} alt="Mountain Logo" className="h-8 scale-115" />
        </div>

        {/* Right section */}
        <div className="flex justify-end items-center">
          <img src={social} alt="Share" className="cursor-pointer scale-115" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
