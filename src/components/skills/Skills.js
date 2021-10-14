import "./skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="skills-title">
        <h2>Habilidades</h2>
      </div>
      <div className="skills-list-container grid-fluid">
        <ul className="skills-list">
          <li>
            <img src="assets/html.png" alt="html" />
            <span>HTML</span>
          </li>
          <li>
            <img src="assets/css.png" alt="css" />
            <span>CSS</span>
          </li>
          <li>
            <img src="assets/javascript.png" alt="js" />
            <span>JS</span>
          </li>
          <li>
            <img src="assets/react.png" alt="react" />
            <span>REACT.JS</span>
          </li>
          <li>
            <img src="assets/java.png" alt="java" />
            <span>JAVA</span>
          </li>
          <li>
            <img src="assets/ux.png" alt="ux" />
            <span>UI/UX</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
