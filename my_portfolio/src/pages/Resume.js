import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Resume</h1>

      <section>
        <h2>About Me</h2>
        <p>
          I’m a passionate Front-End Developer and Machine Learning enthusiast, currently pursuing B.Tech in CSE. I love building responsive UIs and solving real-world problems with intelligent systems.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li><strong>B.Tech, CSE</strong> – GEHU, Haldwani (2022–present), CPI: 8.8</li>
          <li><strong>Intermediate</strong> – BLM Academy, 2022 – 83.5%</li>
          <li><strong>High School</strong> – BLM Academy, 2020 – 92.2%</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>Skin Cancer Classifier</strong> – DL model with CNN & LIME, 95% precision</li>
          <li><strong>Audio Sentiment Analysis</strong> – Emotion detection from speech (CNN + Streamlit)</li>
          <li><strong>Flickr Comments Clustering</strong> – NLP tool using KMeans, DBSCAN</li>
        </ul>
      </section>

      <section>
        <h2>Skills</h2>
        <p>
          <strong>Languages:</strong> C, C++, Python<br />
          <strong>Tools:</strong> TensorFlow, GitHub, MySQL, Figma, VS Code<br />
          <strong>Tech:</strong> ML, DL, NLP, Web Dev, UI/UX
        </p>
      </section>

      <section>
        <h2>Research & Certifications</h2>
        <ul>
          <li><strong>Paper:</strong> “Beyond the Swipe” – ICACCM 2024 (Credit Card Fraud Detection)</li>
          <li>Data Analysis with Python (Coursera, 2024)</li>
          <li>Deep Learning with Keras (Coursera, 2025)</li>
          <li>Google UX Design (Coursera, 2025)</li>
        </ul>
      </section>

      <section>
        <h2>Achievements & Activities</h2>
        <ul>
          <li>2nd Place – Science Exhibition, 2024</li>
          <li>Certificate – ICACCM 2024 (Paper Presentation)</li>
          <li>Core Member – TECHGEEKS Club</li>
          <li>Volunteer – ICACIS 2023</li>
        </ul>
      </section>

      <div className="download">
        <a href="/Megha_Papola_resume.pdf" download className="btn">Download Full PDF</a>
      </div>
    </div>
  );
};

export default Resume;
