import React, { useEffect } from "react";
import "../home/home.css";
import MediaQuery from "react-responsive";
// import Global from './Globalstyles';
import TypingEffect from "./TypingEffect";
// import Contact from "./contact";
// import WorkExperiences from "./workExperience/WorkExperiences";
import { useInView } from "react-intersection-observer";

const Home = ({ setColor, scrollToSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setColor("#ffffff");
    }
  }, [inView, setColor]);

  return (
    <section id="home" ref={ref}>
      <div
        style={{
          height: "90vh",
        }}
      >
        <div class="home-container">
          <div style={{ paddingBottom: "10px" }}>
            <div className="greeting">
              <div>G'day, I'm</div>
              <div>Bhagyashri Purohit,</div>
            </div>
            <TypingEffect />
            <div class="desc">
              I build fast, scalable, and user-focused apps—from backend logic
              to pixel-perfect frontends. Let's code something amazing.
            </div>
            <div className="btn">
              <a
                href="https://drive.google.com/file/d/109v2OjFRT6-19LTtH1Vml-F9tTXAcrdI/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
              >
                Download Resume
              </a>
            </div>
            <div></div>
          </div>
        </div>
        {/* <div>
        <WorkExperiences />
        <Contact />
      </div> */}
      </div>
    </section>
  );
};

export default Home;
