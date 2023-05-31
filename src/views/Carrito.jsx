import { useContext } from "react"
import MyContext from "../MyContext"
import { useNavigate } from "react-router-dom"



export default function Carrito() {

    const {carro, setCarro, setTotal } = useContext(MyContext)

    const borrarCarrito=()=>{
        setCarro([]);
        setTotal(0)
      }

      const navigate = useNavigate();

      const Click = (e) => {
        navigate("/")
      }
    
      return (
        <>
          <div className="d-flex justify-content-center">
            <div className="m-3 border p-4" style={{ width: "80vw" }}>
              <div>Detalles del Pedido:</div>
              {carro != 0 ? (
                carro.map((item) => {
                  return (
                    <>
                      <div className="d-flex justify-content-between w-100">
                        <div className="d-flex gap-2 justify-content-start align-items-center">
                          <img src={item.img} alt="" style={{ width: "50px" }} />
                          <p className="m-0">
                            {" "}
                            {item.name[0].toUpperCase() + item.name.substring(1)}
                          </p>
                        </div>
                        <table className="d-flex">
                          <tbody>
                            <tr className="d-flex align-items-center">
                              <td>
                                {" "}
                                <p className="text-success m-0">${(item.price*item.cant).toLocaleString()}</p>
                              </td>
                              <td>
                                <button className="btn btn-danger m-2">-</button>
                              </td>
                              <td key={item.id}>
                                <span className="p-2 text-center m-2">
                                  {
                                    carro.filter((pizza) => {
                                      return item.id === pizza.id;
                                    }).length
                                  }
                                </span>
                              </td>
                              <td>
                                <button className="btn btn-primary">+</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <hr />
                      </div>
                      
                    </>
                  );
                }
                
               )
              )
               : (
                <h3>Carrito Vacio, Agrega tus productos!</h3>
              )}
              <div className="w-100 d-flex justify-content-end align-items-end botones">
               <button className="btn btn-danger" onClick={borrarCarrito}>Vaciar</button>
               <button className="btn btn-success" onClick={borrarCarrito}>Ir a Pagar</button>
               <button className="btn btn-secondary" onClick={Click}>Volver</button>

               
    
              </div>
            </div>
          </div>
        </>
      );
    }