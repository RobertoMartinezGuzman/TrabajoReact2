import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import MyContext from "../MyContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';


export default function Pizza () {

  // const  id  = useParams()

    const [detalle, setDetalle] = useState();
    const {pizzas, carro, setCarro, setTotal} = useContext(MyContext)
    const parametro = useParams();
    const navigate = useNavigate();
    
    const getData = async() => {
      return setDetalle(pizzas.filter((i) => i.id === parametro.id));
    };

  const Click = (e) => {
    navigate("/")
  }


  const agregarItem = (e) => {
    const itemSeleccionado = pizzas.find((i) => i.id === e.target.id);
    const indice = carro.findIndex((i) => { i.id === itemSeleccionado.id })

    if (indice === -1) {
    setCarro([...carro, {
      id: itemSeleccionado.id,
      price: itemSeleccionado.price,
      name: itemSeleccionado.name,
      img: itemSeleccionado.img,
      cant: 1
    }])
  } else {
    const nuevoCarro = [...carro];
    nuevoCarro[indice].cant++;
    setCarro(nuevoCarro);
  }

  setTotal(
    carro.reduce((suma, i) => {
      return (suma = suma + i.price);
    }, itemSeleccionado.price)
  );

}

useEffect(() => {
  getData();
}, [])

    return (
      <>

      {detalle ? (
        <div>
            <div className="card m-3">
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center">
                  <img
                    src={detalle[0].img}
                    className="img-fluid rounded"
                    alt={`Imagen de Pizza ${detalle[0].name}`}

                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      {detalle[0].name[0].toUpperCase() + detalle[0].name.substring(1)}
                    </h5>
                    <hr />
                    <p className="card-text">{detalle[0].desc}</p>
                    <hr />
                    <dl>
                      <dt>
                        <p>Ingredientes:</p>
                      </dt>
                       <li>{detalle[0].ingredients[0]}</li>
                       <li>{detalle[0].ingredients[1]}</li>
                       <li>{detalle[0].ingredients[2]}</li>
                       <li>{detalle[0].ingredients[3]}</li>
                    </dl>
                    <hr />
                    <div className="card-text d-flex justify-content-between">
                      <h3>Precio: ${detalle[0].price.toLocaleString()}</h3>
                      <button className="btn btn-success" onClick={Click}>Volver</button>
                      <button className="btn btn-danger" id={detalle[0].id} onClick={agregarItem}> Añadir 🛒</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        ) : null}
    </>
    )
}






{/* <div>
<img className="img-detalle container-fluid" src={detalle[0].img} alt="" />
</div>
<div className="texto-detalle">
<h4>{detalle[0].name}</h4>
<h5>{detalle[0].desc}</h5>
<h5>Ingredientes:</h5>
<li>{detalle[0].ingredients[0]}</li>
<li>{detalle[0].ingredients[1]}</li>
<li>{detalle[0].ingredients[2]}</li>
<li>{detalle[0].ingredients[3]}</li>
<div className="boton-detalle">
  <h5>Precio: ${detalle[0].price}</h5>
  <Button variant="danger" > Añadir 🛒</Button>
</div>
</div> */}