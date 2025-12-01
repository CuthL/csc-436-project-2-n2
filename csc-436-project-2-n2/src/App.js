import { useState, useEffect } from "react";
import ResumeForm from "./components/ResumeForm";
import Preview from "./components/Preview";
import "./App.css";

export default function App() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: [],
    education: "",
    skills: ""
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("app-dark");
    } else {
      document.body.classList.remove("app-dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`app-container ${darkMode ? "app-dark" : ""}`}>
      <header className="app-header">
        <h1>Interactive Résumé Builder</h1>

        <button className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <div className="grid">
        <ResumeForm profile={profile} setProfile={setProfile} />
        <Preview profile={profile} />
      </div>
    </div>
  );
}
