import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import "./Hero.css";

export default function Hero() {
  const roles = [
    "Graphic Designer",
    "Video Editor",
    "Content Creator",
    "Visual Storyteller",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [showreelOpen, setShowreelOpen] = useState(false);

  /* =========================================================
     ROLE ANIMATION
     ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     ESC KEY - CLOSE SHOWREEL
     ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowreelOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================================
     LOCK BODY SCROLL WHEN MODAL IS OPEN
     ========================================================= */

  useEffect(() => {
    if (showreelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showreelOpen]);

  /* =========================================================
     SHOWREEL OPEN
     ========================================================= */

  const openShowreel = () => {
    setShowreelOpen(true);
  };

  /* =========================================================
     SHOWREEL CLOSE
     ========================================================= */

  const closeShowreel = () => {
    setShowreelOpen(false);
  };

  return (
    <>
      <section id="home" className="hero">

        {/* =====================================================
            LEFT CONTENT
            ===================================================== */}

        <div className="hero-copy">

          {/* EYEBROW */}

          <p className="hero-eyebrow">
            HELLO, I'M
          </p>

          {/* NAME */}

          <h1 className="hero-title">
            <span className="name-text">
              Vijaya
            </span>{" "}
            <span className="accent">
              Kumar
            </span>
          </h1>

          {/* ANIMATED ROLE */}

          <div className="hero-role-wrapper">
            <span
              key={roleIndex}
              className="hero-role animated-role"
            >
              {roles[roleIndex]}
            </span>
          </div>

          {/* DESCRIPTION */}

          <p className="hero-desc">
            I turn ideas into engaging visuals and videos that
            inform, inspire and create impact.
          </p>

          {/* ===================================================
              WHY CHOOSE ME
              =================================================== */}

          <p className="hero-why-label">
            Why Choose Me?
          </p>

          <div className="hero-why-grid">

            {/* CARD 1 */}

            <div className="why-item">
              <Icon
                name="target"
                className="why-icon"
              />

              <h4>
                Creative Storytelling
              </h4>

              <p>
                Ideas that connect with people
              </p>
            </div>

            {/* CARD 2 */}

            <div className="why-item">
              <Icon
                name="target"
                className="why-icon"
              />

              <h4>
                Fast & Reliable
              </h4>

              <p>
                On-time delivery with quality
              </p>
            </div>

            {/* CARD 3 */}

            <div className="why-item">
              <Icon
                name="target"
                className="why-icon"
              />

              <h4>
                Versatile Skills
              </h4>

              <p>
                From social media reels to long-form content
              </p>
            </div>

            {/* CARD 4 */}

            <div className="why-item">
              <Icon
                name="target"
                className="why-icon"
              />

              <h4>
                Client Focused
              </h4>

              <p>
                Your vision is my priority
              </p>
            </div>

          </div>

          {/* ===================================================
              BUTTONS
              =================================================== */}

          <div className="hero-actions">

            {/* SHOWREEL BUTTON */}

            <button
              className="btn btn-primary"
              type="button"
              onClick={openShowreel}
            >
              <Icon
                name="play"
                size={14}
              />

              Watch Showreel
            </button>

            {/* DOWNLOAD CV */}

            <a
              className="btn btn-outline"
              href="/CV/Mahesh-Vijay-CV.pdf"
              download="Mahesh-Vijay-CV.pdf"
            >
              <Icon
                name="download"
                size={14}
              />

              Download CV
            </a>

          </div>

          {/* ===================================================
              SIGNOFF
              =================================================== */}

          <div className="hero-signoff">

            <span>
              Let's create something amazing together.
            </span>

            <span className="sig">
              Vijaya Kumar
            </span>

          </div>

        </div>
      </section>

      {/* =======================================================
          SHOWREEL MODAL
          ======================================================= */}

      {showreelOpen && (
        <div
          className="showreel-modal"
          onClick={closeShowreel}
          role="dialog"
          aria-modal="true"
          aria-label="Showreel video"
        >

          <div
            className="showreel-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="showreel-close"
              onClick={closeShowreel}
              aria-label="Close showreel"
            >
              ×
            </button>

            {/* VIDEO */}

            <video
              className="showreel-video"
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              <source
                src="/showreel.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      )}
    </>
  );
}