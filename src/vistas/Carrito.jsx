import MiContexto from "../contexto/MiContexto"
import { useContext } from "react"

const Carrito = () => {
  const { carro, setCarro, setTotal, total, agregarAlCarro, eliminarDelCarro } = useContext(MiContexto)
  return (
    <div className="order-details">
      <h2>Detalles del pedido:</h2>
      {carro.map((pizza, index) => (
        <div className="order-item" key={`${pizza.id}-${index}`}>
          <img src={pizza.img} alt={pizza.name}></img>
          <div className="order-info">
            <h3>{pizza.name}</h3>
            <p>{pizza.price}</p>
            <div className="quantity-controls">
              <button className="minus" onClick={() => eliminarDelCarro(pizza)}>-</button>
              <span className="quantity">{pizza.cantidad}</span>
              <button className="plus" onClick={() => agregarAlCarro(pizza)}>+</button>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <h3>${total}</h3>
        <button className="pay-btn" onClick={() => alert('Compra exitosa !!! :)')}>Ir a Pagar</button>
      </div>
    </div>
  )
}

export default Carrito