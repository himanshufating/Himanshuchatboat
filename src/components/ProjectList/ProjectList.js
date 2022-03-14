
import React from "react";
import "./ProjectList.css";

const ProjectList = (props) => {
  const linkMarkup = props.projoptions.map((link) => (
    <li key={link.id} className="link-list-item">
       <b>{link.title}</b><br/><hr/>{link.text}<br/><b>Technical Stack:</b>{link.stack}<br/><b>Host Link:</b><a href="{link.host}">{link.title}</a><br/><hr id="red"/><hr id="red"/>
    </li>
  
  )
  );

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default ProjectList;