"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/header.css";

function Header({ onWorksClick, onAboutClick, onContactClick }) {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(headerRef.current, {
        y: 0,
        duration: 0.5,
        delay: 1.7,
        opacity: 1,
      });
    }, headerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  useEffect(() => {
    gsap.to("header", {
      backdropFilter: "blur(5px)",
      scrollTrigger: {
        trigger: "body",
        start: "5% top",
        end: "30% top",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const progressBar = document.querySelector(".progressBar");
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="progressBarDiv">
        <div className="progressBar" />
      </div>
      <header ref={headerRef}>
        <div className="name">
          <p>Reinis Varavs</p>
          <p className="headerProf">AI Automation Engineer</p>
        </div>
        <nav>
          <ul>
            <li>
              <button className="btns throughWhite" onClick={onWorksClick}>
                works |
              </button>
            </li>
            <li>
              <button className="btns throughWhite" onClick={onAboutClick}>
                about |
              </button>
            </li>
            <li>
              <button className="btns throughWhite" onClick={onContactClick}>
                contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
