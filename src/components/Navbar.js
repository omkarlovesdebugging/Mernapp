import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';

export default function Navbar() {

  const [cartView, setCartView] = useState(false)
  localStorage.setItem('temp', "first")

  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate("/loginuser");
  }

  const loadCart = () => {
    setCartView(true)
}

const items = useCart();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success"
       style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/myOrderData">My Orders</Link>
                </li>

                : ""}

            </ul>

            {!(localStorage.getItem("authToken")) ?

              <div className='d-flex '>


                <Link className="btn bg-white text-success mx-1" to="/loginuser">Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
              </div>

              :
              <div className='d-flex'>

              <div className='btn bg-white text-success mx-1 ' onClick={loadCart}>
                My Cart {" "}
                <Badge color="secondary" badgeContent={items.length} />
              </div>
              {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
              <div className='btn bg-danger text-white mx-1 ' onClick={handleLogout}>
                Logout
              </div>
              </div>
            }
            {/* <Link className=" nav-link text-white active fs-5" to="/">My Orders</Link>
            <Link className="btn bg-danger text-white mx-1" onClick={handleLogout}>Logout</Link> */}

          </div>
        </div>
      </nav>
    </>
  )
}
