
import React from "react";

import "./AcdList.css";

const AcdList = (props) => {
  const linkMarkup = props.acdoptions.map((link) => (
    <li key={link.id} className="link-list-item">
        {link.text}
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default AcdList;