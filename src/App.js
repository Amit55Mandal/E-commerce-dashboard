import Nav from './Component/Nav.js';
import Footer from './Component/footer.js';
import './App.css';
import SignUp from './Component/singup.js'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import PrivateComponent from './Component/Privatecomp.js';
import Login from './Component/Login.js';
import AddProduct from './Component/Addproduct.js';
import Product from './Component/ProductList.js';
import UpdateProduct from './Component/UpdateProduct.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Nav></Nav>
     <Routes>

    <Route element={<PrivateComponent></PrivateComponent>}>
    <Route path='/' element={<Product></Product>}></Route>
    <Route path='/add' element={<AddProduct></AddProduct>}></Route>
    <Route path='/update/:id' element={<UpdateProduct></UpdateProduct>}></Route>
    <Route path='/logout' element={<h1>Logout component</h1>}></Route>
    <Route path='/profile' element={<h1>profile component</h1>}></Route>
    </Route>
    
    <Route path='/signup' element={<SignUp></SignUp>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
     </BrowserRouter>
    <Footer></Footer>
    </div>
  );
}

export default App;
