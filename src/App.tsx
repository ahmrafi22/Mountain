import 'lenis/dist/lenis.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Page1 from './components/page1'
import ScreenSizeWarning from './components/ScreenSizeWarning'
import ReactLenis from 'lenis/react'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <ScreenSizeWarning />
      <ReactLenis root> 
        <div className="w-screen min-h-screen overflow-x-hidden">
          <Navbar />
          <Page1 />
        </div>
      </ReactLenis> 
    </>
  )
}

export default App
