import React from "react";
import "./App.css";
import PatientNotes from "./components/Top";
import ComplianceSection from "./components/ComplianceSection";
import TestimonialsGrid from "./components/TestimonialGrid";

function App() {
  return (
    <div className="App">
      <PatientNotes />
      <ComplianceSection />
      <TestimonialsGrid />
    </div>
  );
}

export default App;
