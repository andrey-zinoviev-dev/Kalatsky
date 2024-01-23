import React from "react";
import { services } from "./utils";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const buttonsRef = React.useRef();

  const [serviceOrder, setServiceOrder] = React.useState(0);

  //   React.useEffect(() => {
  //   orderClicked && setTimeout(() => {
  //     setOrderClicked(false);
  //   }, 1000)
  // }, [orderClicked]);

  React.useEffect(() => {
    // console.log(services[serviceOrder]);
    buttonsRef.current.children[serviceOrder].classList.add('landing__navigation-wrapper-btn_active');
    
    const slideTimeout = setTimeout(() => {
      
      setServiceOrder((prevValue) => {  
        buttonsRef.current.children[prevValue].classList.remove('landing__navigation-wrapper-btn_active')      
        return prevValue === services.length - 1 ? 0  : prevValue + 1;
      })
    }, 2500)

    return () => {
      clearTimeout(slideTimeout);
    }
  }, [serviceOrder]);

  return (
    <>
      <section className="landing">
          <div className='container'>
            <div className='landing__wrapper'>
              <h1 className='landing__headline'>Юридические консультации</h1>
              <p>Услуги, по которым можно отправить запрос: 
              </p>
              <button className='landing__button-hero' onClick={() => {
               
              }}>Отправить запрос</button>
              <div className='landing__navigation-wrapper'>
                <ul ref={buttonsRef}>
                  {services.map((service) => {
                    return <li key={service.name} className='landing__navigation-wrapper-btn'></li>
                  })}

                </ul>

              </div>
            </div>

          </div>

      </section>
      <section id="services-section" className="services">
        <div className="container">
          <h2>Услуги</h2>
          <ul className="services__ul">
            {services.map((service, index) => {
              return <li className="services__ul-li" key={service.name}>
                <button>
                  <Link className="services__ul-link" to={`/services/${index + 1}`}>
                    <p>{service.name}</p>
                    <FontAwesomeIcon className="services__ul-li-arrow" icon={faArrowRight} />
                  </Link>
                </button>
              </li>
            })}
          </ul>
        </div>
      </section>
      <section id="contact-section" className="contanct">
      <div className="container container_contact">
        <h2 className="contanct__headline">Связаться со мной</h2>
        <ul className="contanct__ul">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+79588280774">+79857686442</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:sttrog_810@mail.ru">kalatsky.tab@gmail.com</a>
              </li>
        </ul>
        <form className="contanct__form">
            <div className="contanct__form-div">
              <input placeholder="Имя" type="text"></input>
            </div>
            <div className="contanct__form-div">
              <input placeholder="Email" type="email"></input>
              <input placeholder="Телефон" type="phone"></input>
            </div>
            <button className="contanct__form-btn" type="button">Отправить</button>
          </form>
      </div>
    </section>
    </>

    
  )
}