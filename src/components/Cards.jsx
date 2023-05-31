import MyContext from "../MyContext"
import { useContext, useState } from "react"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";




export default function Cards() {

    const { pizzas, setPizzas, carro, setCarro, total, setTotal } = useContext(MyContext)
   
    

    const navigate = useNavigate();

    const irPizza = (e) => {
        navigate(`/pizza/${e.target.id}`)
    }

    const agregarItem= (e) => {
        const itemSeleccionado = pizzas.find((i) => i.id === e.target.id);
        const indice= carro.findIndex((i)=>{i.id===itemSeleccionado.id})
    
        if(indice===-1){
          setCarro([...carro,{id: itemSeleccionado.id,
            price: itemSeleccionado.price,
            name: itemSeleccionado.name,
            img: itemSeleccionado.img,
            cant:1}])
        } else{
          const nuevoCarro=[...carro];
          nuevoCarro[indice].cant++;
          setCarro(nuevoCarro);
        }
        
        setTotal(
            carro.reduce((suma, i) => {
              return (suma =  + i.price);
            }, itemSeleccionado.price)
          );
        
    }

    

    return (
        <div className="flex">
             {pizzas
                .map((u, i) => (
                <div key={i}>
            <Card style={{ width: '18rem' }}> 
                <Card.Img variant="top" src={u.img} />
                <Card.Body>
                    <Card.Title>{u.name}</Card.Title>
                 </Card.Body>
                 <div className="raya"></div>
                 <div className="ingredientes">
                    <h6>Ingredientes:</h6>
                    <li>{u.ingredients[0]}</li>
                    <li>{u.ingredients[1]}</li>
                    <li>{u.ingredients[2]}</li>
                    <li>{u.ingredients[3]}</li>
                </div>
                <div className="raya"></div>
                    <h5>$ {u.price}</h5>
                <Card.Body className="botones">
                <Button variant="primary" id={u.id} value= {u.id} onClick={irPizza}>Ver más 👀</Button>
                <Button variant="danger" id={u.id} onClick={agregarItem} > Añadir 🛒</Button>
                </Card.Body> 
                
            </Card>

                </div>

                ))}

        </div>
    )


}