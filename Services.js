import React from "react";
import Icon from "../Icon";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services">
      <div>
        <h2>Content I Create</h2>
        <p className="services-sub">
          From short clips to long-form stories — I create content for every
          platform and purpose.
        </p>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon" style={{ background: "#e0533d" }}>
              <Icon name="bolt" size={16} />
            </div>
            <h4>Reels & Shorts</h4>
            <span>(Instagram / YouTube)</span>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ background: "#e0344a" }}>
              <Icon name="bolt" size={16} />
            </div>
            <h4>YouTube Videos</h4>
            <span>(Short & Long Form)</span>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ background: "#2f7fe0" }}>
              <Icon name="bolt" size={16} />
            </div>
            <h4>Ad & Promo Videos</h4>
            <span>(Brand / Product)</span>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ background: "#1fb3a3" }}>
              <Icon name="bolt" size={16} />
            </div>
            <h4>Explainer Videos</h4>
            <span>(Complex &rarr; Simple)</span>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ background: "#e0344a" }}>
              <Icon name="bolt" size={16} />
            </div>
            <h4>Event Videos</h4>
            <span>(Conferences / Shows)</span>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{ background: "#e0a020" }}>
              <Icon name="bolt" size={16} />
            </div>
            <h4>Social Media Content</h4>
            <span>(Posts / Carousels / Reels)</span>
          </div>
        </div>

        <h2>Tools I Use</h2>
        <p className="services-sub">Professional tools for professional results.</p>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-badge" style={{ background: "#3b2fd6" }}>Pr</div>
            <h4>Adobe Premiere Pro</h4>
            <span>(Video Editing)</span>
          </div>
          <div className="tool-card">
            <div className="tool-badge" style={{ background: "#7d3fe0" }}>Ae</div>
            <h4>After Effects</h4>
            <span>(Motion Graphics)</span>
          </div>
          <div className="tool-card">
            <div className="tool-badge" style={{ background: "#2f6fe0" }}>Ps</div>
            <h4>Photoshop</h4>
            <span>(Design & Graphics)</span>
          </div>
          <div className="tool-card">
            <div className="tool-badge" style={{ background: "#1c1c1c" }}>Cc</div>
            <h4>CapCut</h4>
            <span>(Quick Edits / Social)</span>
          </div>
        </div>

 
      </div>

      <div className="services-side">
        <div className="together-card">
          <div className="sig">Let's Work Together</div>
          <p>Have a project in mind? Feel free to get in touch.</p>
        </div>

        <div className="contact-card" id="contact">
          <h3>Contact Me</h3>
          <div className="contact-row"><Icon name="phone" />+91 73391 30088</div>
          <div className="contact-row"><Icon name="mail" />cutsedit50@gmail.com</div>
          <div className="contact-row"><Icon name="pin" />Coimbatore, Tamil Nadu, India</div>
         
          <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                const phoneNumber = "917339130088";

                const message =
                  "Hi Studio Loop, I would like to know more about your services.";

                const whatsappURL =
                  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                window.open(whatsappURL, "_blank");
              }}
            >
            Send a Message
          </button>
        </div>
      </div>
    </section>
  );
}
