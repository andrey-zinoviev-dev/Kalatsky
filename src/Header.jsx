import React from "react";
import {headerBtns} from "./utils";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header({setNavOpened}) {
  // const navRef = React.useRef();
  // const dialogCloseRef = React.useRef();

  return (
    <header className="header">
      {/* <div className="container">

      </div> */}
            <p id="logo">Адвокат Калацкий Борис Валерьевич</p>
            <a href="tel:+79857626442">+7(985)7626442</a>

            <button className="header__menu-btn" onClick={() => {
              // navRef.current.classList.add("nav_opened");
              setNavOpened(true);
            }}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <nav>
              <ul>
                {headerBtns.map((btn) => {
                  return <li key={btn.name}>
                    <button>
                      <a href={`#${btn.link}`}>{btn.name}</a>
                    </button>
                  </li>
                })}
              </ul>
            </nav>
    </header>
  )
}