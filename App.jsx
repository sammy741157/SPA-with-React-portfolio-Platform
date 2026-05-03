import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal portfolio built with React",
      image: "https://via.placeholder.com/300"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProjectForm addProject={addProject} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;