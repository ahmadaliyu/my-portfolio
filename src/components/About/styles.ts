import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;
  h2 { font-size: 3rem; margin-bottom: 2rem; color: var(--green); }
  h3 { font-size: 2rem; margin-bottom: 1rem; }
  p { font-size: 1.8rem; line-height: 1.75; margin-bottom: 1.6rem; }
  .about-intro { display: grid; grid-template-columns: 2fr 1fr; gap: 5rem; align-items: center; }
  .portrait { width: 100%; max-width: 320px; height: auto; aspect-ratio: 1; object-fit: cover; border-radius: 50%; justify-self: center; }
  .skills-section, .approach { margin-top: 7rem; }
  .skills-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2rem; margin-top: 2.5rem; }
  article { padding: 2.4rem; border: 1px solid #80808066; border-radius: 1.2rem; }
  article p { margin-bottom: 0; font-size: 1.6rem; }
  @media (max-width: 960px) {
    .about-intro { grid-template-columns: 1fr; gap: 2rem; }
    .portrait { max-width: 240px; }
    .skills-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr; } }
`;
