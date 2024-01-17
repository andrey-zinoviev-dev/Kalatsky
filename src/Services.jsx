import { services } from "./utils";
import "./Services.css";
import Ellipse from "./assets/Ellipse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// inport {faCheck}

export default function Services() {
  return (
    <section id="services-section" className="services">
      <div className="container">
        <h2>Услуги</h2>
        <ul className="services__ul">
          {services.map((service) => {
            return <li className="services__ul-li" key={service.name}>
              <button>
                <p>{service.name}</p>
                <FontAwesomeIcon className="services__ul-li-arrow" icon={faArrowRight} />
              </button>
            </li>
          })}
        </ul>
      </div>
      {/* <img className="services__img" src={Ellipse} /> */}
    </section>
  )
}