
import MiContexto from '../contexto/MiContexto'
import { useContext } from "react"
import { Card, Button } from "react-bootstrap"
import Banner from '../components/Banner'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const { pizzas, agregarAlCarro } = useContext(MiContexto)
    const navigate = useNavigate()
    const verDetalle = (pizza) => {
        //console.log(id)
        navigate(`/pizza/${pizza.id}`)
    }
 
return (
    <>
        <Banner />
        <div className="contenedor">
            {pizzas.slice(0, 4).map((pizza) => (
                <Card key={pizza.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pizza.img} />
                    <Card.Body>
                        <Card.Title className='text-dark text-center'>{pizza.name}</Card.Title>
                        <hr />
                        <div>
                            {pizza.ingredients.map((ingredient) => (
                                <p key={ingredient}><img src="pizza.png" alt="logo" height="20" className="d-inline-block align-top" />  {ingredient}</p>
                            ))}
                        </div>
                        <hr />
                        <div>
                        <h4> <p className="text-dark text-center">$ {pizza.price}</p></h4>
                        </div>
                        <div className="d-flex justify-content-between">
                            <Button variant="info" onClick={() => verDetalle(pizza)}>Ver nas <img src="eyes_1f440.gif" alt="logo" height="25" className="d-inline-block align-top" /></Button>
                            <Button variant="danger" onClick={() => agregarAlCarro(pizza)}>Añadir <img src="carro_color.png" alt="logo" height="25" className="d-inline-block align-top" /></Button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    </>
)
}

export default Home