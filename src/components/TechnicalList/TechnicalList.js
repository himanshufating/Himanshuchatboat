
import React from "react";

import "./TechnicalList.css";

const TechnicalList = (props) => {
  const linkMarkup = props.Techoptions.map((link) => (
    <li key={link.id} className="link-list-item">
        {link.text}
    </li>
  ));
  return <ul className="link-list">{linkMarkup}</ul>;
};
export default TechnicalList;