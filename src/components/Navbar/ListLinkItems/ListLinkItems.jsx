import './ListLinkItems.css'
import React from "react";
import { useScroll } from "../../../context/ScrollContext";
import { Link } from "react-router-dom/cjs/react-router-dom";

const ListLinkItems = ({baseClass = ""}) => {
  const { sectionIds, activeId, scrollToSection } = useScroll();

  return (
    sectionIds.map(id => (
        <li key={id}>
          <Link
            to={"/" + (id !== "home" ? ("#" + id) : "")}
            onClick={() => scrollToSection(id)}
            className={baseClass + " " + (activeId === id ? "active" : "")}
          >
            {id}
          </Link>
        </li>
      ))
  );
}

export default ListLinkItems;