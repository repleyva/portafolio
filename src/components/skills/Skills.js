import "./skills.css";
import { skills } from "../../utils/data";

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <div className="skills-title">
        <h2>Habilidades</h2>
      </div>
      <div className="skills-list-container grid-fluid">
        <ul className="skills-list">
          {skills.map((el, key) => (
            <li key={key} className="skills-list-item">
              <img src={el.img} alt={el.title} />
              <span>{el.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
