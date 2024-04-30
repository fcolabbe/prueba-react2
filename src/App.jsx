import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navegacion from './components/Navegacion'
import MiContexto from './contexto/MiContexto'
import Home from './vistas/Home'
import Carrito from './vistas/Carrito'
import Pizza from './vistas/Pizza'

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [carro, setCarro] = useState([]);
  const [total, setTotal] = useState(0);

  // El archivo pizzas.json se encuentra en la carpeta public
  const getPizzas = async () => {
    const response = await fetch("/pizzas.json");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const sharedData = { pizzas, setPizzas, carro, setCarro, total, setTotal};
  return (
    <div>
      <MiContexto.Provider value={sharedData}>  
        <Navegacion />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path="/pizza/:id" element={<Pizza />}></Route>
        <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </MiContexto.Provider>
    </div>
  )
}

export default App
