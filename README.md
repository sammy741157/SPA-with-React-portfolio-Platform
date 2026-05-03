# SPA-with-React-portfolio-Platform
 Atelier — Portfolio SPA (React)
A modern, responsive Single Page Application built with React and Vite for a creative agency portfolio platform.
 Features

Landing Page — Cinematic hero section with animated orbs and editorial typography
Project Grid — Responsive masonry-inspired grid with hover overlays; featured projects span two columns
Search — Real-time filtering by title, client, description, and tags
Category Filters — One-click filter pills (All, Branding, Web Design, Motion, Photography, Editorial, Product)
Add Project Form — Modal with validation, category selector, tag parsing, and success feedback
Responsive Design — Mobile-first, breakpoints at 480px / 700px / 900px
33 Tests Passing — Hook, component, and interaction tests via Vitest + React Testing Library

🗂 Component Hierarchy
App
├── Header            — sticky nav with logo + "Add Project" CTA
├── Hero              — full-screen landing with animated background
├── SearchBar         — search input + category filter pills
├── ProjectGrid       — renders ProjectCard list or empty state
│   └── ProjectCard   — image, overlay, meta, tags, featured badge
├── Footer            — links, brand, location
└── AddProjectModal   — controlled form with validation
    └── (useProjects) — custom hook: state, filtering, addProject
 State & Props
ComponentStateProps ReceivedAppmodalOpen—useProjects hookprojects, searchQuery, activeCategory, nextId—SearchBar—searchQuery, onSearchChange, activeCategory, onCategoryChange, resultCountProjectGrid—projects[]ProjectCardimgErrorproject, indexAddProjectModalform, errors, submittedisOpen, onClose, onAdd
 Getting Started
bashnpm install     # Install dependencies
npm run dev     # Start dev server at localhost:5173
npm test        # Run 33 tests
npm run build   # Production build
 Tech Stack
React 18 · Vite · Vitest · React Testing Library · CSS Custom Properties · Google Fonts
 Project Structure
src/
├── components/   Header, Hero, SearchBar, ProjectCard, ProjectGrid, AddProjectModal, Footer
├── hooks/        useProjects.js
├── data/         projects.js
├── tests/        app.test.jsx (33 tests)
├── App.jsx
└── index.css
 Rubric Coverage
CriterionImplementationComponent Hierarchy7 reusable components with clear parent-child relationshipsState ManagementuseProjects custom hook centralizes all state; useMemo for filtered resultsEvent HandlingSearch input, category clicks, form submit, modal open/close, scroll detectionPassing PropsEach component receives only what it needs; no unnecessary prop drillingStyling & UXEditorial dark luxury design, sticky search, animated cards, fully responsive
