import MiContexto from "../contexto/MiContexto"
import { useContext } from "react"

const Carrito = () => {
    const { carro, setCarro, setTotal, total } = useContext(MiContexto)
  return (
    <div className="detalle-carro">
        <h3>Detalles del pedido</h3>
        <div>
            {carro.map((pizza) => (
                <div className='producto' key={pizza.id}>
                   <div className="product">
                    <img src={pizza.img} width='100px'></img> {pizza.name}
                    </div>
                    <div className="precio">
                    ${pizza.price}
                    </div>
                    <div className="botones">
                    <button className="btn btn-danger">-</button>
                    1
                    <button className="btn btn-info">+</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Carrito