import { useState, useEffect } from 'react'
import Navbar1 from '../components/Navbar'
import Cards from '../components/Cards'
import { Card } from 'react-bootstrap'


export default function Home() {

    return (

    <div>
       <div className='bg-img'>
        <h2>¡Pizzería Mamma Mía!</h2>
        <p>¡Tenemos las mejores pizzas que podras encontrar!</p>
        <div className='separacion'></div>
       </div>

        <div>

        <Cards/>
        
        </div>

    </div>
    )
}


