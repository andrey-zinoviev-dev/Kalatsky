import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Services from './Services'
import Form from './Form';
import "./Landing.css";
import Navigation from './Navigation';
import { services } from "./utils";
import { useLocation } from 'react-router-dom';

export default function Landing() {

  const {pathname} = useLocation();

  const [navOpened, setNavOpened] = React.useState(false);
  const [orderClicked, setOrderClicked] = React.useState(false);
  const [serviceOrder, setServiceOrder] = React.useState(0);

  React.useEffect(() => {
    pathname !== "/" && window.scrollTo(0, 0);
  }, [pathname])

  return (
    // <main>
    <>
      <Header navOpened={navOpened} setNavOpened={setNavOpened}/>
      <main>
        <Outlet>
        </Outlet>
      </main>
      {navOpened && <Navigation setNavOpened={setNavOpened} />}
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