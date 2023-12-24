import Services from './Services'

export default function Landing() {
  return (
    <main>
      <section className="landing">
        <h1>Юридические консультации</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nihil voluptatem perspiciatis dolorem aperiam aliquid totam dicta suscipit, iusto, illo quasi, maiores vel quo dolorum accusamus modi optio odit magni</p>
        <button>Заказать услугу</button>
      </section>
      <Services />
    </main>
  )
}