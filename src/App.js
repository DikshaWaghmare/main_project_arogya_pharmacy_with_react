import {Link, Route, Routes} from 'react-router-dom';
import SignIn from './Components/Signin';
import Home from './Components/Home';
import SignUp from './Components/Signup';
import Admin from './Components/Admin';
import Customer from './Components/Customer';
import AddCategory from './Components/AddCategory';
import AddProduct from './Components/AddProduct';
import AddSalesman from './Components/AddSalesman';
import AddOrder from './Components/AddOrder';
import Category from './Components/Category';
import Product from './Components/Product';
import Order from './Components/Order';
import Salesman from './Components/Salesman';
import CustData from './Components/CustomerData';
function App() {
  return (
    <div className="">
      <Link to="/"></Link>
      
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/signin' element={<SignIn/>}> </Route>
        <Route path='/signup' element={<SignUp/>}> </Route>
        <Route path='/admin' element={<Admin/>}> </Route>
        <Route path='/customer' element={<Customer/>}> </Route>
        <Route path='/addCategory' element={<AddCategory/>}></Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
        <Route path='/addSalesman' element={<AddSalesman/>}></Route>
        <Route path='/addOrder' element={<AddOrder/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/salesman' element={<Salesman/>}></Route>
        <Route path='/custData' element={<CustData/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
