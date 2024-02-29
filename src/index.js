import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const sub = [
  { name: "react", color: "blue" },
  { name: "Html+css", color: "purple" },
  { name: "Javascript", color: "red" },
  { name: "Svelte", color: "pink" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="jonas.jpeg" alt="profile" />;
}
function Intro() {
  return (
    <div>
      <h1>Jonas Bairwa</h1>
      <p>
        I am passionate frontend developer known for design and attractive
        websites,teaches student for skill enhancement.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {sub.map((skill) => (
        <Skill name={skill.name} color={skill.color} emoji="💪" />
      ))}
    </div>
  );
}

function Skill({ name, color, emoji }) {
  return (
    <p className="skill" style={{ backgroundColor: color }}>
      {name} {emoji}
    </p>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
