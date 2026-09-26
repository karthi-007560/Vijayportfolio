import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import "./Portfolio.css";

const projects = [
  

  {
    id: 1,
    title: "Srineevi Coffeehouse Promotion",
    client: "Srineevi Coffeehouse",
    category: "Commercial Video",
    duration: "00:31",
    video: "/Videos/Srineevi.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
  

  {
    id: 2,
    title: "Mettupalayam Campaign",
    client: "SP Velumani ADMK",
    category: "Social Media",
    duration: "00:59",
    video: "/Videos/Mettupalayam_2026_ADMK.mp4",
    description:
      "Short-form social media content created for high engagement, fast pacing and visually attractive storytelling.",
  },
  

  {
    id: 3,
    title: "TN1 Media",
    client: "TN1 Media",
    category: "AI Animation",
    duration: "00:29",
    video: "/Videos/TN1 media.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
  

  {
    id: 4,
    title: "GD Naidu Flyover Explainer",
    client: "SP Velumani ADMK",
    category: "Social Media",
    duration: "02:48",
    video: "/Videos/Flyover.mp4",
    description:
      "Energetic event highlights combining cinematic transitions, crowd moments and memorable experiences.",
  },
  
 {
    id: 5,
    title: "Explainer 1",
    client: "Political Mind",
    category: "Motion Graphics",
    duration: "01:31",
    video: "/Videos/Video_5 (1).mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
     {
    id: 6,
    title: "Explainer 2",
    client: "Political Mind",
    category: "Motion Graphics",
    duration: "01:13",
    video: "/Videos/Video_6 (1).mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
    {
    id: 7,
    title: "Ariyalur Albam Song",
    client: "S Photography",
    category: "Social Media",
    duration: "00:47",
    video: "/Videos/Ariyalur_Final.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
    {
    id: 8,
    title: "Logo Animation",
    client: "TN1 Media",
    category: "Logo Animation",
    duration: "00:47",
    video: "/Videos/Sequence 01_2.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
    {
    id: 9,
    title: "MGR Birthday Content",
    client: "SP Velumani ADMK",
    category: "Social Media",
    duration: "02:32",
    video: "/Videos/@aiadmk.official @eps.tamilnadu @spvelumanicbe 🌱🌱🌱🫂.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
   {
    id: 10,
    title: "Rural Development SPV",
    client: "SP Velumani ADMK",
    category: "Motion Graphics",
    duration: "01:32",
    video: "/Videos/@spvelumanicbe 🔥.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
   {
    id: 11,
    title: "SPV Promotion",
    client: "YouTube Channel",
    category: "Motion Graphics",
    duration: "00:47",
    video: "/Videos/Mission .mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
  {
    id: 12,
    title: "Explainer 3",
    client: "Political Mind",
    category: "Motion Graphics",
    duration: "00:47",
    video: "/Videos/Video_6 (1).mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },

  {
    id: 13,
    title: "Thondamuthur Campaign",
    client: "SP Velumani ADMK",
    category: "Social Media",
    duration: "00:23",
    video: "/Videos/Video_3 (1).mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },

  {
    id: 14,
    title: "AI Animation Edappadi",
    client: "SP Velumani ADMK",
    category: "AI Animation",
    duration: "00:43",
    video: "/Videos/Eagle Intro.mp4",
    description:
      "A premium product commercial focused on beauty, detail, product shots and strong visual presentation.",
  },

  {
    id: 15,
    title: "TATA SGA Maskcut",
    client: "TATA SGA Motores",
    category: "Motion Graphics",
    duration: "00:17",
    video: "/Videos/Tata_SGA_1 (2).mp4",
    description:
      "A clean explainer video combining motion graphics, typography, animation and easy-to-understand storytelling.",
  },
   {
    id: 16,
    title: "Edappadi ADMK",
    client: "SP Velumani ADMK",
    category: "Social Media",
    duration: "00:24",
    video: "/Videos/Colleges.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
   {
    id: 17,
    title: "Alliance ADMK",
    client: "SP Velumani ADMK",
    category: "Social Media",
    duration: "00:28",
    video: "/Videos/WhatsApp Video 2026-09-25 at 3.26.40 PM.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
     {
    id: 18,
    title: "Logo Animation",
    client: "S Photography",
    category: "Logo Animation",
    duration: "00:17",
    video: "/Videos/VID-20240911-WA0000 (1).mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
  
     {
    id: 19,
    title: "ADMK Campaign",
    client: "SP Velumani ADMK",
    category: "Social Media",
    duration: "00:28",
    video: "/Videos/Video 5.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
  {
    id: 20,
    title: "2026 Trailer Edappadi",
    client: "SP Velumani ADMK",
    category: "Social Media",
    duration: "00:36",
    video: "/Videos/ADMK_2026.mp4",
    description:
      "A cinematic travel film designed to showcase destinations through emotional storytelling and premium visuals.",
  },
     {
    id: 21,
    title: "Leo ReCreation",
    client: "Social Media",
    category: "Motion Graphics",
    duration: "00:19",
    video: "/Videos/VID-20240913-WA0002.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
    

   {
    id: 22,
    title: "Goat Recreation",
    client: "Social Media",
    category: "Motion Graphics",
    duration: "00:47",
    video: "/Videos/VID-20240903-WA0003.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
   {
    id: 23,
    title: "Vitchu Ritchu EP-5",
    client: "TN1 Media",
    category: "Youtube Webseries",
    duration: "00:47",
    video: "/Videos/videoplayback (56).mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
   {
    id: 24,
    title: "Vitchu Ritchu EP-7",
    client: "TN1 Media",
    category: "Youtube Webseries",
    duration: "00:47",
    video: "/Videos/videoplayback (57).mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
     {
    id: 25,
    title: "As a Content Writer Not An Editor",
    client: "C Shanmugavelu",
    category: "Motion Graphics",
    duration: "00:47",
    video: "/Videos/Trailer.mp4",
    description:
      "Long-form interview editing with clean cuts, engaging pacing, subtitles and professional visual treatment.",
  },
];

const filters = [
  "All",
  "Social Media",
  "AI Animation",
  "Logo Animation",
  "Commercial Video",
  "Motion Graphics",
  "Youtube Webseries",
];

/* First load-la 6 videos */
const VIDEOS_PER_PAGE = 6;

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [hoveredVideo, setHoveredVideo] =
    useState(null);

  const [visibleCount, setVisibleCount] =
    useState(VIDEOS_PER_PAGE);

  /*
  =========================================================
  FILTER PROJECTS
  =========================================================
  */

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === active
        );

  /*
  =========================================================
  VISIBLE PROJECTS

  Initially 6 only.
  View More click -> next videos.
  Show Less -> first 6.
  =========================================================
  */

  const visibleProjects =
    filteredProjects.slice(
      0,
      visibleCount
    );

  /*
  =========================================================
  VIEW MORE
  =========================================================
  */

  const handleViewMore = () => {
    setVisibleCount((previousCount) =>
      Math.min(
        previousCount + VIDEOS_PER_PAGE,
        filteredProjects.length
      )
    );
  };

  /*
  =========================================================
  SHOW LESS
  =========================================================
  */

  const handleShowLess = () => {
    setVisibleCount(VIDEOS_PER_PAGE);

    /*
      Smooth-ah portfolio section-ku
      scroll back pannum
    */
    setTimeout(() => {
      const portfolioSection =
        document.getElementById(
          "portfolio"
        );

      if (portfolioSection) {
        portfolioSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  /*
  =========================================================
  FILTER CHANGE

  Filter change pannumbodhu
  again first 6 videos show aagum.
  =========================================================
  */

  const handleFilterChange = (filter) => {
    setActive(filter);

    setVisibleCount(
      VIDEOS_PER_PAGE
    );

    setHoveredVideo(null);
  };

  /*
  =========================================================
  ESC KEY
  =========================================================
  */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /*
  =========================================================
  BODY SCROLL LOCK
  =========================================================
  */

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "";
    }

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="portfolio"
        className="portfolio"
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="portfolio-head">
          <div className="portfolio-heading">
            <p className="clients-tag">
              MY WORK
            </p>

            <h2>
              Featured Projects
            </h2>

            <p>
              A glimpse of some of the
              projects I've worked on.
              Each video is crafted with
              a focus on storytelling,
              engagement and brand value.
            </p>
          </div>

          {/* =================================================
              FILTERS
          ================================================= */}

          <div className="filter-row">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  "filter-pill" +
                  (active === filter
                    ? " active"
                    : "")
                }
                onClick={() =>
                  handleFilterChange(
                    filter
                  )
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div className="project-grid">
          {visibleProjects.map(
            (project, index) => (
              <article
                className="project-card"
                key={project.id}
                style={{
                  "--delay": `${index * 0.08}s`,
                }}
                onMouseEnter={() =>
                  setHoveredVideo(
                    project.id
                  )
                }
                onMouseLeave={() =>
                  setHoveredVideo(null)
                }
              >
                {/* =================================================
                    VIDEO THUMBNAIL
                ================================================= */}

                <div
                  className="project-thumb"
                  onClick={() =>
                    setSelectedProject(
                      project
                    )
                  }
                >
                  {/* HOVER VIDEO */}

                  {hoveredVideo ===
                    project.id && (
                    <video
                      className="project-preview-video"
                      src={
                        project.video
                      }
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="metadata"
                    />
                  )}

                  {/* DARK OVERLAY */}

                  <div className="project-overlay" />

                  {/* CATEGORY */}

                  <span className="project-category">
                    {project.category}
                  </span>

                  {/* DURATION */}

                  <span className="duration">
                    {project.duration}
                  </span>

                  {/* PLAY BUTTON */}

                  <button
                    type="button"
                    className="play-btn"
                    aria-label={`Play ${project.title}`}
                    onClick={(event) => {
                      event.stopPropagation();

                      setSelectedProject(
                        project
                      );
                    }}
                  >
                    <Icon
                      name="play"
                      size={20}
                    />
                  </button>

                  {/* WATCH PROJECT */}

                  <div className="view-project">
                    <span>
                      Watch Project
                    </span>

                    <span className="view-arrow">
                      ↗
                    </span>
                  </div>
                </div>

                {/* =================================================
                    PROJECT DETAILS
                ================================================= */}

                <div className="project-meta">
                  <div>
                    <h4>
                      {project.title}
                    </h4>

                    <span>
                      {project.client}
                    </span>
                  </div>

                  <span className="project-number">
                    {String(
                      project.id
                    ).padStart(2, "0")}
                  </span>
                </div>
              </article>
            )
          )}
        </div>

        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {filteredProjects.length ===
          0 && (
          <div className="portfolio-empty">
            <div className="empty-icon">
              🎬
            </div>

            <h3>
              No projects found
            </h3>

            <p>
              Try another category.
            </p>
          </div>
        )}

        {/* =================================================
            VIEW MORE / SHOW LESS
        ================================================= */}

        {filteredProjects.length >
          VIDEOS_PER_PAGE && (
          <div className="portfolio-footer">

            {/* VIEW MORE */}

            {visibleCount <
            filteredProjects.length ? (
              <button
                type="button"
                className="btn btn-outline portfolio-view-btn"
                onClick={
                  handleViewMore
                }
              >
                <span>
                  View More
                </span>

                <span className="view-more-count">
                  {visibleProjects.length}{" "}
                  /{" "}
                  {
                    filteredProjects.length
                  }
                </span>

                <span className="view-more-arrow">
                  ↓
                </span>
              </button>
            ) : (
              /* SHOW LESS */

              <button
                type="button"
                className="btn btn-outline portfolio-view-btn"
                onClick={
                  handleShowLess
                }
              >
                <span>
                  Show Less
                </span>

                <span className="view-more-count">
                  Show 6
                </span>

                <span className="view-more-arrow">
                  ↑
                </span>
              </button>
            )}

          </div>
        )}

        {/* =================================================
            VIDEO COUNT
        ================================================= */}

        {filteredProjects.length >
          0 && (
          <div className="portfolio-count">
            <span>
              Showing{" "}
              <strong>
                {visibleProjects.length}
              </strong>{" "}
              of{" "}
              <strong>
                {
                  filteredProjects.length
                }
              </strong>{" "}
              projects
            </span>
          </div>
        )}
      </section>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {selectedProject && (
        <div
          className="portfolio-video-modal"
          onClick={() =>
            setSelectedProject(
              null
            )
          }
          role="dialog"
          aria-modal="true"
        >
          <div
            className="portfolio-video-modal-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* CLOSE */}

            <button
              type="button"
              className="portfolio-modal-close"
              onClick={() =>
                setSelectedProject(
                  null
                )
              }
              aria-label="Close video"
            >
              ×
            </button>

            {/* VIDEO */}

            <div className="portfolio-player">
              <video
                src={
                  selectedProject.video
                }
                controls
                autoPlay
                playsInline
                preload="auto"
                className="main-portfolio-video"
              >
                Your browser does not
                support the video tag.
              </video>
            </div>

            {/* VIDEO INFO */}

            <div className="portfolio-modal-info">
              <div>
                <span className="modal-category">
                  {
                    selectedProject.category
                  }
                </span>

                <h3>
                  {
                    selectedProject.title
                  }
                </h3>

                <p>
                  {
                    selectedProject.description
                  }
                </p>
              </div>

              
            </div>
          </div>
        </div>
      )}
    </>
  );
}