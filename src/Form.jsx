import "./Form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  return (
    <section className="contanct">
      <div className="container">
        <h2>Связаться со мной</h2>
        <ul className="contanct__ul">
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+79588280774">+79857686442</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:sttrog_810@mail.ru">law@kalatsky.com</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Россия, Москва, Климашкина, 9-63</p>
          </li>
        </ul>
        <form className="contanct__form">
          <div className="contanct__form-div">
            <input placeholder="Имя" type="text"></input>
            <input placeholder="Фамилия" type="text"></input>
          </div>
          <div className="contanct__form-div">
            <input placeholder="Email" type="email"></input>
            <input placeholder="Телефон" type="phone"></input>
          </div>
          <div className="contanct__form-message">
            <label>Опишите Вашу ситуацию</label>
            <textarea></textarea>
          </div>
          <button className="contanct__form-btn" type="button">Отправить</button>
        </form>
      </div>
    </section>
  )
}