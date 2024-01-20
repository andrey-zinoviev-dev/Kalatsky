import React from "react";
import { useParams } from "react-router-dom";
import { services } from "./utils";
export default function Service() {
  const {serviceIndex} = useParams();
  const matchedService = services[serviceIndex - 1];
  return (
    <section className="service">
      <div className="container">
        <h2>{matchedService.name}</h2>

        <p>Услуги, входящие в эту категорию</p>
        <ul>
          {matchedService.list.map((serviceToProvide) => {
            return <li key={serviceToProvide}>
              <p>{serviceToProvide}</p>
            </li>
          })}
        </ul>
      </div>
    </section>
  )
}