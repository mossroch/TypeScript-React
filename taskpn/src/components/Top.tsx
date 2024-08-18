import React from "react";
import "./Top.css";
import image from "../assets/all.png"; // Update the path to your image

const PatientNotes: React.FC = () => {
  return (
    <div className="patient-notes-container">
      <header className="patient-notes-header">
        <h1>Patient Notes</h1>
        <nav>
          <ul>
            <li>Pricing</li>
            <li>FAQs</li>
            <li>Privacy</li>
            <li>Security</li>
            <li>Our Customers</li>
            <li>Help Center</li>
          </ul>
        </nav>
        <div className="login-link">Log in</div>
      </header>

      <main className="patient-notes-main">
        <div className="patient-notes-content">
          <h2>
            Let AI write your clinical notes so you can focus on your patients
          </h2>
          <p>
            PatientNotes is a clinical note-taking tool that uses AI to write
            clinical notes, patient summaries, and medical letters. It is
            designed to save you time and improve the quality of your notes.
            With a focus on privacy and security, PatientNotes is a safe and
            secure way to start leveraging AI in your work today.
          </p>
          <button className="trial-button">
            Get started with your free 14-day trial
          </button>
        </div>
        <div className="patient-notes-image-container">
          <img
            src={image}
            alt="Patient Notes screenshot"
            className="half-image-left"
          />
        </div>
      </main>
    </div>
  );
};

export default PatientNotes;
