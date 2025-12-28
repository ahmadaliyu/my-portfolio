import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Ahmad Aliyu, a seasoned Software Engineer with over 8 years of experience building scalable web and mobile applications.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I specialize in React, Next.js, React Native, TypeScript, and Kotlin, creating responsive and high-performance solutions for both web and mobile platforms.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I've worked with various companies across different sectors, from agriculture tech to fintech, delivering impactful software solutions that drive business growth.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="experience">
            <h3>Work Experience:</h3>
            
            <h4>Software Engineer</h4>
            <p>Kredi (Financial Institution) | Current</p>
            <p>Building fintech solutions for digital banking and payments</p>
            
            <h4>Software Engineer</h4>
            <p>Loopscribe</p>
            <p>Developed web and mobile applications</p>
            
            <h4>Software Engineer</h4>
            <p>White Axis (Ride-Hailing Platform)</p>
            <p>Built Bolt-like transportation solutions</p>
            
            <h4>Software Engineer</h4>
            <p>NippyEats</p>
            <p>Developed food delivery platform</p>
            
            <h4>Software Engineer</h4>
            <p>Everyfarmer Ecosystem</p>
            <p>Created agricultural technology solutions</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={typescriptIcon} alt="TypeScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={nodeIcon} alt="Node.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={htmlIcon} alt="HTML" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={cssIcon} alt="CSS" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src="https://res.cloudinary.com/dgyy2fwlu/image/upload/v1766940325/WhatsApp_Image_2025-12-28_at_17.44.11_x4uc2n.jpg" alt="Ahmad Aliyu" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
