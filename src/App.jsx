import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './views/Home'
import Pizza from './views/Pizza'
import Carrito from './views/Carrito'

import Navbar1 from './components/Navbar'

import MyContext from './MyContext'


function App() {



  const [pizzas, setPizzas] = useState([])
  const [carro, setCarro] = useState([])
  const [total, setTotal] = useState(0)
  const sharedData = {pizzas, setPizzas, carro, setCarro, total, setTotal};
  

  const endpoint = "pizzas.json"
  const getData = async() => {
    const res = await fetch(endpoint)
    const pizzas = await res.json();
    setPizzas(pizzas)
    console.log(pizzas)
    
  }

  useEffect(()=> {
    getData();
    
  }, []);
  

  return (
    <>

      <div>


        <MyContext.Provider value={sharedData}>
        <BrowserRouter>

        <Navbar1/>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pizza/:id' element={<Pizza />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>

        </BrowserRouter>

        </MyContext.Provider>
      </div>

    </>
  )
}

export default App
