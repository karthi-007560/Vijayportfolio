import React, { useState } from "react";
import Icon from "../Icon";
import "./Clients.css";

import Sp from "../IMAGES/Sp Velumani.jpg";
import Shanmugam from "../IMAGES/shanmugam.jpg";
import Udumalai from "../IMAGES/Udumalai_Radhakrishnan.jpg";
import Lakshmi from "../IMAGES/politicalmind.png";
import TN1 from "../IMAGES/TN1.jpg";


export default function Clients() {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      name: "S. P. Velumani",
      role: "Political Operations and Digital Communications Associate ",
      image: Sp,
      short:
        "Creative and visual content support for professional and public communication.",
      details:
        "Worked on creative visual content and digital presentation requirements and Worked Closely With Development and Implementation of a Booth Management Application for Party Organization.",
      contribution: [
        "Booth Cadre Training",
        "Social media Content Creation",
        "Video editing",
        "Professional visual presentation",
      ],
    },

    {
      name: "C Shanmugavelu",
      role: "Content Writer",
      image: Shanmugam,
      short:
        "Creative content support for digital communication and Campaigns.",
      details:
        "Provided creative support to improve the visual quality and presentation of digital content.",
      contribution: [
        "Campaign content creation",
        "Booth Cadre Training",
      ],
    },

    {
      name: "Udumalai Radhakrishnan",
      role: "Editor",
      image: Udumalai,
      short:
        "Visual content and creative communication support.",
      details:
        "Worked on visual communication requirements with an emphasis on clean, engaging Videos and Worked Closely With Development and Implementation of a Booth Management Application for Party Organization.",
      contribution: [
        "Booth Cadre Training",
        "Video editing",
        "Social media creatives",
        "Visual storytelling",
      ],
    },

    {
      name: "Political Mind",
      role: "Editor",
      image: Lakshmi,
      short:
        "Creative visual solutions for digital content.",
      details:
        "Supported To Edit Contents with visually engaging designs and Motion Graphics.",
      contribution: [
        "Content creation",
        "Video editing",
      ],
    },
     {
      name: "TN1 Media",
      role: "Editor",
      image: TN1,
      short:
        "Creative visual solutions for digital content and branding.",
      details:
        "Supported creative content requirements with visually engaging designs and edited media content.",
      contribution: [
        "Content creation",
        "Video editing",
        "Branding support",
      ],
    },
  ];

  const stats = [
    {
      icon: "handshake",
      number: "10+",
      label: "Happy Clients",
    },
    {
      icon: "play",
      number: "50+",
      label: "Projects Delivered",
    },
    {
      icon: "star",
      number: "100%",
      label: "Client Satisfaction",
    },
  ];

  const openClient = (client) => {
    setSelectedClient(client);
    document.body.style.overflow = "hidden";
  };

  const closeClient = () => {
    setSelectedClient(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="clients">

      {/* =====================================================
          CLIENT HERO
      ===================================================== */}

      <div className="clients-hero">

        <div className="clients-hero-content">

          <p className="clients-tag">
            CLIENTS & PROJECTS
          </p>

          <h2>
            Political & Commercial Clients
          </h2>

          <p>
            I've had the opportunity to work with amazing clients
            across different industries. Their trust keeps me
            motivated to create better every day.
          </p>

        </div>

        <div className="clients-hero-script">
          Great Brands
          <br />
          Great Stories
        </div>

      </div>


      {/* =====================================================
          CLIENT CARDS
      ===================================================== */}

      <div className="client-profile-grid">

        {clients.map((client, index) => (
          <div
            className="client-profile-card"
            key={client.name}
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >

            {/* Image */}

            <div className="client-image-wrapper">

              <img
                src={client.image}
                alt={client.name}
                className="client-profile-image"
              />

              <div className="client-image-overlay">
                View Profile
              </div>

            </div>


            {/* Content */}

            <div className="client-profile-content">

              <span className="client-profile-role">
                {client.role}
              </span>

              <h3>
                {client.name}
              </h3>

              <p>
                {client.short}
              </p>

              <button
                type="button"
                className="client-more-btn"
                onClick={() => openClient(client)}
              >
                Show More

                <Icon
                  name="arrowRight"
                  size={15}
                />
              </button>

            </div>

          </div>
        ))}

      </div>


      {/* =====================================================
          STATS
      ===================================================== */}

      <div className="stats-row">

        {stats.map((stat, index) => (
          <div
            className="stat"
            key={`${stat.label}-${index}`}
          >

            <Icon
              name={stat.icon}
              className="stat-icon"
            />

            <div>

              <span className="stat-num">
                {stat.number}
              </span>

              <span className="stat-label">
                {stat.label}
              </span>

            </div>

          </div>
        ))}

      </div>


      {/* =====================================================
          CLIENT DETAILS MODAL
      ===================================================== */}

      {selectedClient && (
        <div
          className="client-modal-backdrop"
          onClick={closeClient}
        >

          <div
            className="client-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}

            <button
              type="button"
              className="client-modal-close"
              onClick={closeClient}
              aria-label="Close"
            >
              <Icon
                name="x"
                size={22}
              />
            </button>


            {/* Modal Image */}

            <div className="client-modal-image">

              <img
                src={selectedClient.image}
                alt={selectedClient.name}
              />

            </div>


            {/* Modal Content */}

            <div className="client-modal-content">

              <span className="client-modal-role">
                {selectedClient.role}
              </span>

              <h2>
                {selectedClient.name}
              </h2>

              <div className="client-modal-line"></div>


              {/* Client Details */}

              <div className="client-detail-section">

                <h4>
                  About the Collaboration
                </h4>

                <p>
                  {selectedClient.details}
                </p>

              </div>


              {/* Our Contribution */}

              <div className="client-detail-section">

                <h4>
                  Our Contribution
                </h4>

                <div className="contribution-list">

                  {selectedClient.contribution.map(
                    (item, index) => (
                      <div
                        className="contribution-item"
                        key={index}
                      >

                        <span className="contribution-check">
                          ✓
                        </span>

                        <span>
                          {item}
                        </span>

                      </div>
                    )
                  )}

                </div>

              </div>


              <button
                type="button"
                className="client-modal-btn"
                onClick={closeClient}
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}