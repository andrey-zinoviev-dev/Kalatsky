import Header from './Header';
import Services from './Services'
import Form from './Form';
import "./Landing.css";
// import Pic from "./assets/AK6A4769.jpg"
export default function Landing() {
  return (
    <main>
      <Header />
      <section className="landing">
        <div className='container'>
          <div>
            <h1>Юридические консультации</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nihil voluptatem perspiciatis dolorem aperiam aliquid totam dicta suscipit, iusto, illo quasi, maiores vel quo dolorum accusamus modi optio odit magni</p>
            <button>Заказать услугу</button>
          </div>
          
        </div>
        {/* <img src={Pic} alt="" /> */}
      </section>
      <Services />
      <Form />
    </main>
  )
}