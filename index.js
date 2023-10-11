import './App.css';
/*import Hello from './Components/Hello';
import Products from './Components/Products';*/
import Mobile from './components/Mobile';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Pricing from './components/Pricing';
import Signin from './components/Signin';
import Registration from './components/Registration';
import Home from './components/Home';

function App() {
  /*const products=[
    {
      "pid":"1001","pname":"IPhone","price":"25000"
    }
  ]
  
    <div className="App">
      <Hello/>
      <Products products={products}/>
    </div>
    <div>
      <Mobiles />
    </div>*/
    return (

    <div><BrowserRouter>
      <Navbar/>
 <Routes>
  <Route path='Mobile' element={<Mobile/>}></Route>
  <Route path='/Signin' element={<Signin/>}></Route>
  <Route path='Pricing' element={<Pricing/>}></Route>
  <Route path='/Register' element={<Registration/>}></Route>
  <Route path='/Home' element={<Home/>}></Route>
  
  
 </Routes>
 </BrowserRouter>   </div>
  );
}

export default App;