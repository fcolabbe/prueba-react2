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

  const agregarAlCarro = (pizza) => {
    const existeProducto = carro.find((p) => p.id === pizza.id);
    if (existeProducto) {
      const nuevoCarro = carro.map((p) =>
        p.id === pizza.id ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      setCarro(nuevoCarro);
      setTotal(total + pizza.price);
      return;
    }else{
      pizza.cantidad = 1;
    }
    setCarro([...carro, pizza])
    setTotal(total + pizza.price)
  }

  const eliminarDelCarro = (pizza) => {
    const existeProducto = carro.find((p) => p.id === pizza.id);
    if (existeProducto.cantidad > 1) {
      const nuevoCarro = carro.map((p) =>
        p.id === pizza.id ? { ...p, cantidad: p.cantidad - 1 } : p
      );
      setCarro(nuevoCarro);
      setTotal(total - pizza.price);
      return;
    }
    const nuevoCarro = carro.filter((p) => p.id !== pizza.id);
    setCarro(nuevoCarro);
    setTotal(total - pizza.price);
  }

  useEffect(() => {
    getPizzas();
  }, []);

  const sharedData = { pizzas, setPizzas, carro, setCarro, total, setTotal, agregarAlCarro, eliminarDelCarro };
  return (
    <div>
      <MiContexto.Provider value={sharedData}>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path="/pizza/:id" element={<Pizza />}></Route>
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </MiContexto.Provider>
    </div>
  )
}

export default App
