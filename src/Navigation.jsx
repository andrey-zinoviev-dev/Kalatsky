import {headerBtns} from "./utils";
import "./Navigation.css";
export default function Navigation ({setNavOpened}) {
  return (
    <nav className="header__nav">
    <ul>
      {headerBtns.map((btn) => {
        return <li key={btn.name}>
          <button onClick={() => {
            setNavOpened(false);
          }}>
            <a href={`#${btn.link}`}>{btn.name}</a>
          </button>
        </li>
      })}
      <li key={"return"}>
        <button onClick={() => {
          setNavOpened(false);
        }}>
          <p>
            Вернуться
          </p>
        </button>
      </li>
    </ul>
  </nav>
  )
}