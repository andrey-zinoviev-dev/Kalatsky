import React from 'react';
// import Header from './Header';
import Services from './Services'
import Form from './Form';
import "./Landing.css";
import Navigation from './Navigation';
import { services } from "./utils";
// import Pic from "./assets/bg-white.png";
// import Pic from "./assets/AK6A4769.jpg"
// import Pic from "./assets/AK6A4769.png";
// import Pic from "./assets/bg-new.png";

export default function Landing({navOpened, setNavOpened}) {
  const buttonsRef = React.useRef();

  const [orderClicked, setOrderClicked] = React.useState(false);
  const [serviceOrder, setServiceOrder] = React.useState(0);

  React.useEffect(() => {
    orderClicked && setTimeout(() => {
      setOrderClicked(false);
    }, 1000)
  }, [orderClicked]);

  React.useEffect(() => {
    console.log(services[serviceOrder]);
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
    <main>
      {/* <Header /> */}
      <section className="landing">
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
                {/* <li></li>
                <li></li>
                <li></li>
                <li></li> */}
              </ul>
              {/* <div className='landing__navigation-btns'>
                <button>
                  <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292892 7.29293C-0.0976296 7.68345 -0.0976295 8.31662 0.292893 8.70714L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6806 8.46159 14.0474 8.07107 13.6569L2.41422 8.00003L8.07107 2.34318C8.46159 1.95265 8.46159 1.31949 8.07107 0.928965C7.68054 0.538441 7.04738 0.538441 6.65685 0.928965L0.292892 7.29293ZM36 7.00003L1 7.00003L1 9.00003L36 9.00003L36 7.00003Z" fill="black"/>
                  </svg>
                </button>
                <button>
                  <svg width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.7071 8.70714C36.0976 8.31661 36.0976 7.68345 35.7071 7.29292L29.3431 0.928963C28.9526 0.538438 28.3195 0.538438 27.9289 0.928963C27.5384 1.31949 27.5384 1.95265 27.9289 2.34318L33.5858 8.00003L27.9289 13.6569C27.5384 14.0474 27.5384 14.6806 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70714ZM0 9.00003H35V7.00003H0V9.00003Z" fill="black"/>
                  </svg>
                </button>
              </div> */}
            </div>
          </div>

        </div>
        {/* <div className='landing__overlay'></div> */}
        {/* <img className='landing__img' src={Pic} alt="" /> */}
      </section>
      <Services />
      <Form orderClicked={orderClicked} />
      {navOpened && <Navigation setNavOpened={setNavOpened} />}
    </main>
  )
}