import { services } from "./utils";

export default function Services() {
  return (
    <section>
      <ul>
        {services.map((service) => {
          return <li key={service.name}><p>{service.name}</p></li>
        })}
      </ul>
    </section>
  )
}