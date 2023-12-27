export default function Form() {
  return (
    <section>
      <div className="container">
        <h2>Связаться со мной</h2>
        <ul>
          <li>
            <a href="tel:+79588280774">+7 958 828 07 74</a>
          </li>
          <li>
            <a href="mailto:sttrog_810@mail.ru">sttog_810@mail.ru</a>
          </li>
          <li>
            <p>Россия, Москва, Климашкина, 9-63</p>
          </li>
        </ul>
        <form>
          <input placeholder="Имя" type="text"></input>
          <input placeholder="Фамилия" type="text"></input>
          <input placeholder="Email" type="email"></input>
          <div>
            <label>Опишите Вашу ситуацию</label>
            <textarea></textarea>
          </div>
          <button type="button">Отправить</button>
        </form>
      </div>
    </section>
  )
}