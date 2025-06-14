"use client";

import "../styles/about.css";
import { forwardRef, useLayoutEffect } from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// icons
import { techStacks } from "../config/techIcons";

gsap.registerPlugin(ScrollTrigger);

const About = forwardRef((props, ref) => {
  const headingRef = useRef(null);
  const nameRef = useRef(null);

  const words =
    `               I'm an AI automation engineer from Latvia focused on helping businesses run faster and more efficiently through smart no-code systems. Using tools like Make and OpenAI - and backed by my full-stack experience with the PERN stack (PostgreSQL, Express, React, Node.js) - I build powerful automations that eliminate manual work and boost performance.`.split(
      " "
    );

  useEffect(() => {
    const el = headingRef.current;

    // Clear content first
    el.innerHTML = "";

    // Wrap each word
    words.forEach((word) => {
      const wrapper = document.createElement("span");
      wrapper.className = "split-child";
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.marginRight = "8px";

      const inner = document.createElement("span");
      inner.textContent = word;
      inner.style.display = "inline-block";

      wrapper.appendChild(inner);
      el.appendChild(wrapper);
    });

    const splitWords = headingRef.current.querySelectorAll(".split-child span");
    gsap.from(splitWords, {
      yPercent: 100,
      stagger: 0.01,
      rotate: "5deg",
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutSection",
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nameAnim", {
        opacity: 0,
        rotate: "5deg",
        y: 100,
        scrollTrigger: {
          trigger: ".nameAnim",
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      });
    }, nameRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.from(".portretBorder", {
      transform: "translate(0, 0)",
      scrollTrigger: {
        trigger: ".portretBorder",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const grids = document.querySelectorAll(".techGrid");

      grids.forEach((grid) => {
        gsap.from(grid.querySelectorAll(".techItem"), {
          opacity: 0.5,
          y: 30,
          scale: 0.9,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <h1 className="techGridH1">Tech stack</h1>
      <div className="techGridContainer">
        <div className="techGroup">
          <h2 className="techGridH2">Frontend</h2>
          <div className="techGrid">
            {techStacks.frontend.map((item, i) => (
              <div className="techItem" key={i}>
                <img src={item.icon} alt={item.name} className="techIcon" />
                <p className="techName">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="techGroup">
          <h2 className="techGridH2">Backend</h2>
          <div className="techGrid">
            {techStacks.backend.map((item, i) => (
              <div className="techItem" key={i}>
                <img src={item.icon} alt={item.name} className="techIcon" />
                <p className="techName">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="techGroup">
          <h2 className="techGridH2">APIs & Integrations</h2>
          <div className="techGrid">
            {techStacks.api.map((item, i) => (
              <div className="techItem" key={i}>
                <img src={item.icon} alt={item.name} className="techIcon" />
                <p className="techName">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="techGroup">
          <h2 className="techGridH2">No-code</h2>
          <div className="techGrid">
            {techStacks.make.map((item, i) => (
              <div className="techItem" key={i}>
                <img src={item.icon} alt={item.name} className="techIcon" />
                <p className="techName">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="aboutSection" ref={ref}>
        <div className="about textHeading" ref={nameRef}>
          <h1 className="nameAnim">Hello. I am Reinis</h1>
          <h2 className="nameAnim">Roberts Varavs</h2>
          <p ref={headingRef}>
            {words.map((word, i) => (
              <span key={i} className="split-child">
                <span style={{ display: "inline-block" }}>{word}</span>
              </span>
            ))}
          </p>
        </div>
        <div className="portretDiv">
          <img
            src="/assets/portret.webp"
            alt="Reinis photo"
            className="portret"
          />
          <div className="portretBorder" />
        </div>
      </div>
    </>
  );
});

export default About;
