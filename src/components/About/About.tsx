import { Container } from "./styles";

const skills = [
  ["Web & frontend", "React, Next.js, TypeScript, JavaScript, Redux, HTML, CSS, Tailwind CSS, Styled Components"],
  ["Mobile applications", "React Native, Flutter, Kotlin · Cross-platform interfaces and offline functionality"],
  ["Backend & APIs", "NestJS, Laravel, C#, Node.js, REST APIs, GraphQL, Firebase"],
  ["AI", "AI integration and AI-assisted software development"],
  ["DevOps & delivery", "Docker, CI/CD, GitHub Actions, Codemagic, Git · Build and deployment automation"],
  ["Architecture & quality", "System design, component architecture, state management, performance optimization, maintainability"],
];

export function About() {
  return (
    <Container id="about">
      <div className="about-intro">
        <div>
          <h2>Engineering across the product</h2>
          <p>I'm Ahmad Aliyu, a software engineer with 8+ years of experience building web and mobile applications across fintech, logistics, transportation, food delivery, and agritech.</p>
          <p>My strongest foundation is in React, Next.js, React Native, and TypeScript. I also work with Flutter, backend services, AI, and DevOps, connecting the user experience with the systems that support it.</p>
          <p>I focus on software that is clear to use, reliable in everyday workflows, and straightforward for teams to maintain. From reusable interfaces and API integration to system design and delivery automation, I bring a practical understanding of the full development lifecycle.</p>
        </div>
        <img className="portrait" src={`${process.env.PUBLIC_URL}/Images/ahmad-aliyu.png`} alt="Ahmad Aliyu" loading="lazy" width="320" height="320" />
      </div>
      <div id="skills" className="skills-section">
        <h2>Technical expertise</h2>
        <p>A strong frontend and mobile foundation, with the backend and delivery skills to take a product further.</p>
        <div className="skills-grid">
          {skills.map(([title, description]) => (
            <article key={title}><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </div>
      <div className="approach">
        <h2>How I approach the work</h2>
        <div className="skills-grid">
          <article><h3>Understand the problem</h3><p>Start with the people using the product, the business goal, and the constraints that shape a useful solution.</p></article>
          <article><h3>Design for change</h3><p>Choose clear component boundaries, predictable data flow, and practical architecture that the team can build on.</p></article>
          <article><h3>Deliver with care</h3><p>Pay attention to performance, failure states, and release workflows so features work beyond the happy path.</p></article>
        </div>
      </div>
    </Container>
  );
}

