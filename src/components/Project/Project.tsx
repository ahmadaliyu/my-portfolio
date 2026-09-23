import { Container } from "./styles";

const work = [
  { name: "LoopScribe", sector: "Collaborative note-taking", description: "Built web and mobile features for a collaborative note-taking product, with a focus on responsive interactions and offline use.", contribution: "Improved startup and rendering performance, developed reusable UI components, implemented offline functionality, and contributed to architecture and delivery decisions.", stack: ["React", "React Native", "TypeScript"] },
  { name: "Global Cargo Logistics", sector: "Logistics & operations", description: "Developed dashboards for shipment tracking, bookings, and customer operations.", contribution: "Integrated REST APIs for live updates and created reusable UI components to keep operational workflows consistent across the product.", stack: ["React", "Next.js", "TypeScript", "REST APIs"] },
  { name: "WhiteAxis", sector: "Ride-hailing & transportation", description: "Worked across the Partner and Client mobile applications and the company website.", contribution: "Built and maintained React Native applications and React / Next.js web experiences, working with stakeholders to deliver improvements across products.", stack: ["React Native", "React", "Next.js"] },
  { name: "Kredi", sector: "Financial services", description: "Contributed to web and mobile fintech applications for digital banking and payments.", contribution: "Worked on customer-facing experiences that connect financial services with everyday web and mobile workflows.", stack: ["React Native", "TypeScript", "Next.js"] },
  { name: "NippyEats", sector: "Food delivery", description: "Developed a food delivery application connecting customers and restaurants.", contribution: "Worked on ordering and delivery workflows, including order tracking and interfaces supporting restaurant operations.", stack: ["React Native", "TypeScript"] },
  { name: "Everyfarmer Ecosystem", sector: "Agricultural technology", description: "Contributed to web and mobile products for an agricultural technology ecosystem.", contribution: "Built interfaces supporting farm management, marketplace activity, and access to agricultural information.", stack: ["React Native", "React", "JavaScript"] },
];

export function Project() {
  return (
    <Container id="project">
      <h2>Selected work & experience</h2>
      <p className="section-intro">Products I've contributed to, the problems they address, and my role in building them.</p>
      <div className="projects">
        {work.map(project => (
          <article className="project" key={project.name}>
            <header>{project.sector}</header>
            <div className="body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <h4>My contribution</h4>
              <p>{project.contribution}</p>
            </div>
            <footer><ul className="tech-list" aria-label={`${project.name} technologies`}>
              {project.stack.map(technology => <li key={technology}>{technology}</li>)}
            </ul></footer>
          </article>
        ))}
      </div>
      <p className="section-intro work-links">Explore my <a href="https://github.com/ahmadaliyu" target="_blank" rel="noreferrer">GitHub profile</a> or view my <a href="https://www.linkedin.com/in/ahmad-aliyu-b13345178" target="_blank" rel="noreferrer">LinkedIn experience</a>.</p>
    </Container>
  );
}
