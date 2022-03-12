
import React from "react";

import "./LinkList.css";

const LinkList = (props) => {
  const linkMarkup = props.poptions.map((link) => (
    <li key={link.id} className="link-list-item">
        {link.text}
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;