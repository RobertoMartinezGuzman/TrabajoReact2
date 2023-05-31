import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import MyContext from '../MyContext';
import { useContext } from 'react';





export default function Navbar1() {

  const { setTotal } = useContext(MyContext)



    return (
        <Navbar className='bg-success'>
        <Container>
          <NavLink to="/" className={'text-decoration-none'}>
          <Navbar.Brand  className='text-white nav'> <img className='img-icon' src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png" alt="" /> Pizzería Mamma Mía! </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <NavLink to="/carrito" className={'text-decoration-none'}>
            <Navbar.Text className='text-white'>
                <img className='img-icon' src="https://beautyandglam.mx/wp-content/uploads/2023/01/464-4646442_carrito-de-compras-carro-de-compras-blanco-clipart.png" alt="" /> ${setTotal}
            </Navbar.Text>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}