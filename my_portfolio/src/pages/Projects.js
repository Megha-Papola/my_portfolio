import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <div className="projects-grid">

        <div className="project-card">
          <h2>HouseOfPaws</h2>
          <p>A pet adoption platform built using MERN stack with authentication, search, and dashboard.</p>
          <div className="project-links">
            <a href="https://github.com/Megha-Papola/houseofpaws" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h2>Audio Sentiment Analysis</h2>
          <p>Real-time emotion recognition from speech using 1D CNN and Streamlit web app.</p>
          <div className="project-links">
            <a href="https://github.com/Megha-Papola/audio-sentiment" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h2>Quantum Lung Disease Classifier</h2>
          <p>Hybrid Quantum-Classical ML model for multi-class chest X-ray classification (QCNN + QKNN/QSVM).</p>
          <div className="project-links">
            <a href="https://github.com/Megha-Papola/quantum-lung-disease" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h2>Skin Cancer Classifier</h2>
          <p>CNN model with LIME explainability for identifying benign/malignant skin lesions with 95% precision.</p>
          <div className="project-links">
            <a href="https://github.com/Megha-Papola/skin-cancer-classifier" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
