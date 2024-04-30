
import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import MiContexto from '../contexto/MiContexto'
import { useContext } from 'react'

const Navegacion = () => {
  const{total} = useContext(MiContexto)
  const setActiveClass = ({ isActive }) => (isActive ? "link-activo" : "link-inactivo");
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="/"><img src="/pizza.png" alt="logo" height="30" className="d-inline-block align-top" /> Pizzeria Mamma Mia</Navbar.Brand>
          <div className="d-flex">
            <NavLink to="/" className={setActiveClass}>Inicio</NavLink>
            <NavLink to="/pokemones" className={setActiveClass}><img src="/telefono.png" alt="logo" height="25" className="d-inline-block align-top" />  +56 9 8729 6798</NavLink>
            <NavLink to="/carrito"  className='link-inactivo'><img src="/carro_color.png" alt="logo" height="25" className="d-inline-block align-top" /> $ {total}</NavLink>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navegacion