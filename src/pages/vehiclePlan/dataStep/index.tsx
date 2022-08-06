import React from "react";
import SectionBackground from "./sectionBackground.";
import SectionForm from "./sectionForm";
import "./data.scss";
import "./data.min.scss";

export default function Data() {
  return (
    <div className="container_data">
      <SectionBackground />
      <SectionForm />
    </div>
  );
}
