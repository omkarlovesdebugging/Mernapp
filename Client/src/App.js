import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import SingUp from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder';

function App() {
  return (
    <CartProvider>
      
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/loginuser' element={<Login/>}/>
          <Route exact path='/createuser' element={<SingUp/>}/>
          <Route exact path="/myOrderData" element={<MyOrder />} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
    
  );
}

export default App;
