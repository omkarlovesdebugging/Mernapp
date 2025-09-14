import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';

export default function Navbar() {

  const [cartView, setCartView] = useState(false)
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate("/loginuser");
    // Manually close the navbar after logout
    closeNavbar();
  }

  const loadCart = () => {
    setCartView(true)
    // Manually close the navbar after clicking My Cart
    closeNavbar();
  }

  // New function to close the navbar manually
  const closeNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
      navbarToggler.click();
    }
  };

const items = useCart();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success"
       style={{ boxShadow: "0px 10px 20px black", position: "fixed", zIndex: "10", width: "100%" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/" onClick={closeNavbar}>GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/" onClick={closeNavbar}>Home</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/myOrderData" onClick={closeNavbar}>My Orders</Link>
                </li>

                : ""}

            </ul>

            {!(localStorage.getItem("authToken")) ?

              <div className='d-flex '>


                <Link className="btn bg-white text-success mx-1" to="/loginuser" onClick={closeNavbar}>Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser" onClick={closeNavbar}>SignUp</Link>
              </div>

              :
              <div className='d-flex'>

              <div className='btn bg-white text-success mx-1 d-flex align-items-center' onClick={loadCart}>
                My Cart
                {/* The Badge now has a white background and green text color */}
                  <Badge pill className="ms-1" style={{ backgroundColor: 'white', color: 'green' }}>
                  {items.length}
                  </Badge>
              </div>
              {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
              <div className='btn bg-danger text-white mx-1 ' onClick={handleLogout}>
                Logout
              </div>
              </div>
            }
          </div>
        </div>
      </nav>
    </>
  )
}
