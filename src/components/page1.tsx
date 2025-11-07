import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import bgImage from "../assets/bg.png";
import mntnImage from "../assets/mntn.png";
import mouseIcon from "../assets/Mouse.svg";
import shareIcon from "../assets/Share.svg";
import videoImage from "../assets/Video.png";

gsap.registerPlugin(ScrollTrigger);

function Page1() {
  const bgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const mntnRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef<HTMLDivElement>(null)
  const shareRef = useRef<HTMLDivElement>(null)
  const everestTextRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLImageElement>(null)
  const numberRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    // initial values 
    gsap.set(bgRef.current, { scale: 1.5 });
    gsap.set(textRef.current, { opacity: 0, y: -100, filter: "blur(10px)" });
    gsap.set(mntnRef.current, { y: 300 })
    gsap.set(mouseRef.current, { opacity: 0, filter: 'blur(10px)' })
    gsap.set(shareRef.current, { opacity: 0, filter: 'blur(10px)' })
    gsap.set(everestTextRef.current, { opacity: 0, y: 50 })
    gsap.set(videoRef.current, { opacity: 0, y: 50, scale: 0 })
    gsap.set(numberRef.current, { opacity: 0, x: -300 })

    // Initial animations
    const tl = gsap.timeline();

    tl.to(bgRef.current, {
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
    })
      .to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
        },
        0
      )
      .to(
        mntnRef.current,
        {
          y: 100,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.2,
        },
        0
      )
      .to(
        mouseRef.current,
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
        },
        0
      )
      .to(
        shareRef.current,
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
        },
        0
      );

    //Scroll animations
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(bgRef.current, {
          scale: 1 + progress * 1,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(mntnRef.current, {
          y: 100 - progress * 200,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
        if (textRef.current) {
          if (progress >= 0.4) {
            textRef.current.style.display = "none";
          } else {
            textRef.current.style.display = "flex";
          }
        }
        if (progress >= 0.3) {
          gsap.to(mouseRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(shareRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else {
          gsap.to(mouseRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(shareRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
        if (progress >= 0.45) {
          gsap.to(everestTextRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(videoRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(numberRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.5,
            overwrite: "auto",
          });
        } else {
          gsap.to(everestTextRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(videoRef.current, {
            opacity: 0,
            y: 50,
            scale: 0,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(numberRef.current, {
            opacity: 0,
            x: -300,
            duration: 0.5,
            ease: "power2.out",
            delay: 0,
            overwrite: true,
          });
        }
      },
    });
  }, { scope: containerRef });

  return (
    <>
      <div
        ref={containerRef}
        className="w-full h-screen flex items-center relative overflow-hidden"
      >
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full bg-cover"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <img
          ref={mntnRef}
          src={mntnImage}
          alt="Mountain"
          className="absolute bottom-0 left-0 w-full object-cover z-20"
        />
        
        <div
          ref={textRef}
          className="translate-x-23 flex flex-col gap-4 fixed z-10"
        >
          <h1 className="text-white text-7xl font-bold font-bebas">NEPAL MOUNTAINS</h1>
          <p className="text-white text-lg">
            Visit the most beautiful mountains in the world
          </p>
        </div>

        <div
          ref={mouseRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        >
          <p className="text-white text-sm font-medium rotate-90 -translate-y-4">
            SCROLL
          </p>
          <img src={mouseIcon} alt="Scroll" className="w-8 h-8" />
        </div>

        <div ref={shareRef} className="absolute bottom-8 right-8 z-30">
          <img
            src={shareIcon}
            alt="Share"
            className="w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
      
      <div ref={everestTextRef} className="fixed top-[20%] left-1/2 transform -translate-x-1/2 text-center z-30 flex flex-col items-center gap-2 pointer-events-none">
        <h2 className="text-white text-7xl font-bold font-bebas">EVEREST</h2>
        <p className="text-white text-xl">The highest mountain in the world</p>
      </div>
      
      <img 
        ref={videoRef}
        src={videoImage} 
        alt="Video" 
        className="fixed top-[40%] left-1/2 transform -translate-x-1/2 w-[60%] h-[60vh] object-cover z-25 rounded-lg  pointer-events-none"
      />
      
      <h1 
        ref={numberRef}
        className="fixed top-[38%] left-[76.5%] text-[15rem] font-bold z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #000000 0%, #ffffff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        01
      </h1>
      
      <div className="w-full h-[50vh] bg-black flex items-center justify-center">
      </div>
    </>
  );
}

export default Page1;
