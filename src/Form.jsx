import React from "react";
import "./Form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import map from "./assets/map.png";
import Ellipse from "./assets/Ellipse.png";

export default function Form({orderClicked}) {
  const sectionRef = React.useRef();

  React.useEffect(() => {
    orderClicked && sectionRef.current.scrollIntoView({behavior: "smooth", block: "center"});
  }, [orderClicked]);

  return (
    <section id="contact-section" className="contanct" ref={sectionRef}>
      <div className="container">
        <h2 className="contanct__headline">Связаться со мной</h2>
        <ul className="contanct__ul">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+79588280774">+79857686442</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:sttrog_810@mail.ru">law@kalatsky.com</a>
              </li>
        </ul>
        <div className="contanct__wrapper">
          <form className="contanct__form">
            <div className="contanct__form-div">
              <input placeholder="Имя" type="text"></input>
              <input placeholder="Фамилия" type="text"></input>
            </div>
            <div className="contanct__form-div">
              <input placeholder="Email" type="email"></input>
              <input placeholder="Телефон" type="phone"></input>
            </div>
            {/* <div className="contanct__form-message">
              <label>Опишите Вашу ситуацию</label>
              <textarea></textarea>
            </div> */}
            <button className="contanct__form-btn" type="button">Отправить</button>
          </form>
          <img className="contanct__wrapper-img" src={map} />
        </div>
      </div>
      {/* <img className="contact__img" src={Ellipse} /> */}
    </section>
  )
}