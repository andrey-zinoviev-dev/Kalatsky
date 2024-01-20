import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Services from './Services'
import Form from './Form';
import "./Landing.css";
import Navigation from './Navigation';
import { services } from "./utils";

export default function Landing({navOpened, setNavOpened}) {

  const [orderClicked, setOrderClicked] = React.useState(false);
  const [serviceOrder, setServiceOrder] = React.useState(0);

  return (
    // <main>
    <>
      <Header />
      <main>
        <Outlet>
        </Outlet>
      </main>
    </>

      
        /* <section className="landing">
          <div className='container'>
            <div className='landing__wrapper'>
              <h1 className='landing__headline'>Юридические консультации</h1>
              <p>Услуги, по которым можно отправить запрос: <span>{services[serviceOrder].name}</span></p>
              <button className='landing__button-hero' onClick={() => {
                setOrderClicked(true);
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
      <Services />
      <Form orderClicked={orderClicked} /> */
     

      /* {navOpened && <Navigation setNavOpened={setNavOpened} />} */
    // </main>
  )
}