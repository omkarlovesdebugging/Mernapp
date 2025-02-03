import { useState } from 'react'
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Signup() {
  const [credentials, setcredentials] = useState({ name: "", email: '', password: "", address: "" })
  // let [address, setAddress] = useState("");
  let navigate = useNavigate()

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   let navLocation = () => {
  //     return new Promise((res, rej) => {
  //       navigator.geolocation.getCurrentPosition(res, rej);
  //     });
  //   }
  //   let latlong = await navLocation().then(res => {
  //     let latitude = res.coords.latitude;
  //     let longitude = res.coords.longitude;
  //     return [latitude, longitude]
  //   })
  //   let [lat, long] = latlong
  //   console.log(lat, long)
  //   const response = await fetch("http://localhost:5000/api/getlocation", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ latlong: { lat, long } })

  //   });
  //   const { location } = await response.json()
  //   console.log(location);
  //   setAddress(location);
  //   setcredentials({ ...credentials, [e.target.name]: location })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://mernapp-52gq.onrender.com/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        address: credentials.address
      })
    });

    const json = await response.json()
    console.log(json);

    if (json.success) {
      //save the auth toke to local storage and redirect
      localStorage.setItem('authToken', json.authToken)
      navigate("/loginuser")

    }
    else {
      console.log(credentials)
      alert("Enter Valid Credentials")
    }
  }

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', minHeight: '100vh' }}>
      
        <Navbar />
      

      <div className='container ' style={{ paddingTop: '150px' }}>
        <form className='w-50 m-auto border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}  />
          </div>
          <div className="m-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange}  />
          </div>
          <div className="m-3">
            <label htmlFor="address" className="form-label">Address</label>
            <fieldset>
              <input type="text" className="form-control" name='address'  value={credentials.address} onChange={onChange}  />
            </fieldset>
          </div>

          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/loginuser" className="m-3 mx-1 btn btn-danger">Already a user</Link>
        </form>
      </div>
    </div>
  )
}
