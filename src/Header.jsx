import {headerBtns} from "./utils";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <p id="logo">Kalatsky</p>
          <nav>
            <ul>
              {headerBtns.map((btn) => {
                return <li key={btn}>
                  <button>
                    <p>{btn}</p>
                  </button>
                </li>
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}