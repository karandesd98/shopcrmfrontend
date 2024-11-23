import logo from './logo.svg';
import './App.css';
import WelcomeCmp from './components/WelcomeCmp';
import PrivateWelcomeCmp from './components/privateCmp/PrivateWelcomeCmp';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AdminHome from './components/AdminHome';
import LoginCmp from './components/LoginCmp';
import AdminDashBoard from './components/privateCmp/AdminDashBoard';
import AddShop from './components/privateCmp/AddShop';
import AddProduct from './components/privateCmp/AddProduct';






function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home/>}> </Route>
        <Route path='/WelcomeCmp' element={ <WelcomeCmp/>}> </Route>
        <Route path='/LoginCmp' element={ <LoginCmp/>}> </Route>
        
        

        <Route path='/admin' element={ <AdminHome/>}>
          <Route path='PrivateWelcomeCmp' element={ <PrivateWelcomeCmp/>}> </Route>
          <Route path='adminDashBoard' element={ <AdminDashBoard/>}> </Route>
          <Route path='addShop' element={ <AddShop/>}> </Route>
          <Route path='addProduct' element={ <AddProduct/>}> </Route>
          
         </Route>
        <Route path='*' element={<div>page not found</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
