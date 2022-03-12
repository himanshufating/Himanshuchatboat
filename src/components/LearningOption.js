import React from "react";

import "./LearningOption.css";

const LearningOption = (props) => {
  const options = [
    { text: "Personal Info", handler: ()=> {props.actionProvider.handlePersonalInfo()}, id: 1 },
    { text: "Academic Info", handler: ()=>{}, id: 2 },
    { text: "Projects Info", handler: () => {console.log("hgg")}, id: 3 },
    { text: "Technical Stack", handler: () => {this.ActionProvider.technical()}, id: 4 },
    { text: "Contacts", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOption;