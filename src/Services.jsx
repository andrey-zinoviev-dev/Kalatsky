import { services } from "./utils";
import "./Services.css";
import Ellipse from "./assets/Ellipse.png";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Услуги</h2>
        <ul className="services__ul">
          {services.map((service) => {
            return <li className="services__ul-li" key={service.name}>
              <button>
                <p>{service.name}</p>
              </button>
            </li>
          })}
        </ul>
      </div>
      <img className="services__img" src={Ellipse} />
    </section>
  )
}