import { useParams } from "react-router-dom"
import MiContexto from "../contexto/MiContexto"
import { useContext, useEffect, useState } from "react"


const Pizza = () => {
    const [pizza, setPizza] = useState({})
    const { id } = useParams();
    const { pizzas } = useContext(MiContexto)

    const buscarPizzaPorId = (id) => {
        const p =  pizzas.find((pizza) => pizza.id === id)
        setPizza(p)
    }

    useEffect(() => {
        buscarPizzaPorId(id)
    }, [])

  return (
    <div className="detalle-pizza">
        <div className="left">
            <img src={pizza.img} alt={pizza.name}  />
        </div>
        <div className="right">
            <h1>{pizza.name}</h1>
            <hr />
            <p>{pizza.desc}</p>
            <h2>Ingredientes</h2>
            <ul>
                {pizza.ingredients && pizza.ingredients.map((ingredient) => (
                    <li key={ingredient}><img src="/pizza.png" alt="logo" height="20" className="d-inline-block align-top" /> {ingredient}</li>
                ))}
            </ul>
            <div className="add-pizza">
            <h3>Precio: $ {pizza.price}</h3>
            <button className="btn btn-danger">Añadir <img src="/carro_color.png" alt="logo" height="25" className="d-inline-block align-top" /></button>
            </div>

        </div>
    </div>
  )
}

export default Pizza