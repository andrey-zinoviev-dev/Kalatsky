import React from 'react';
// import Header from './Header';
import Services from './Services'
import Form from './Form';
import "./Landing.css";
import Navigation from './Navigation';
// import Pic from "./assets/bg-white.png";
// import Pic from "./assets/AK6A4769.jpg"
// import Pic from "./assets/AK6A4769.png";
// import Pic from "./assets/bg-new.png";

export default function Landing({navOpened, setNavOpened}) {
  const [orderClicked, setOrderClicked] = React.useState(false);
  React.useEffect(() => {
    orderClicked &&     setTimeout(() => {
      setOrderClicked(false);
    }, 1000)
  }, [orderClicked])
  return (
    <main>
      {/* <Header /> */}
      <section className="landing">
        <div className='container'>
          <div>
            <h1 className='landing__headline'>Юридические консультации</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nihil voluptatem perspiciatis dolorem aperiam aliquid totam dicta suscipit, iusto, illo quasi, maiores vel quo dolorum accusamus modi optio odit magni</p>
            <button onClick={() => {
              setOrderClicked(true);
            }}>Заказать услугу</button>
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