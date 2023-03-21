import {Link, Route, Routes} from 'react-router-dom';
import SignIn from './Components/signin';
import Home from './Components/home';
import SignUp from './Components/signup';
import Admin from './Components/admin';
import Customer from './Components/customer';
import AddCategory from './Components/addCategory';
import AddProduct from './Components/addProduct';
import AddSalesman from './Components/addSalesman';
import ViewCategoryData from './Components/viewCategoryData';
import ViewCustData from './Components/viewCustData';
import ViewProductData from './Components/viewProductData';
import ViewSalesmanData from './Components/viewSalesmanData';
import AddOrder from './Components/AddOrder';
import ViewOrderData from './Components/viewOrder';
import Category from './Components/Category';
import Product from './Components/product';
import Order from './Components/order';
import Salesman from './Components/salesman';
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
        <Route path='/viewCategoryData' element={<ViewCategoryData/>}></Route>
        <Route path='/viewCustData' element={<ViewCustData/>}></Route>
        <Route path='/viewProductData' element={<ViewProductData/>}></Route>
        <Route path='/viewSalesmanData' element={<ViewSalesmanData/>}></Route>
        <Route path='/addOrder' element={<AddOrder/>}></Route>
        <Route path='/viewOrder' element={<ViewOrderData/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/salesman' element={<Salesman/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
