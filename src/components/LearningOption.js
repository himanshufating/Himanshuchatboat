import React from "react";
import "./LearningOption.css";

const LearningOption = (props) => {
  const options = [
    { text: "Personal Info", handler: ()=>{props.actionProvider.handlePersonalInfo()}, id: 1 },
    { text: "Academic Info", handler: ()=> {props.actionProvider.handleAcademicInfo()}, id: 2 },
    { text: "Projects Info", handler: () => {props.actionProvider.handleProjectInfo()}, id: 3 },
    { text: "Technical Stack", handler: () => {props.actionProvider.technical()}, id: 4 },
    { text: "Contacts Info", handler: () => {props.actionProvider.contacts()}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="learning-option-button" key={option.id} onClick={option.handler}> {option.text}  </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOption;