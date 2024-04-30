import MiContexto from "../contexto/MiContexto"
import { useContext } from "react"

const Carrito = () => {
  const { carro, setCarro, setTotal, total } = useContext(MiContexto)
  return (
    <div className="order-details">
      <h2>Detalles del pedido:</h2>
      {carro.map((pizza) => (
        <div className="order-item" key={pizza.id}>
          <img src={pizza.img} alt={pizza.name}></img>
          <div className="order-info">
            <h3>{pizza.name}</h3>
            <p>{pizza.price}</p>
            <div className="quantity-controls">
              <button className="minus">-</button>
              <span className="quantity">1</span>
              <button className="plus">+</button>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>$ {total}</h3>
        <button className="pay-btn">Ir a Pagar</button>
      </div>
    </div>
  )
}

export default Carrito