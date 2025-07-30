
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
// import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ShopCategory } from './pages/ShopCategory';
import { Product } from './pages/Product';
import Shop from './pages/Shop';
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/young-man-with-hat-head-shopping-nets.jpg'
import kids_banner from './components/assets/preety.jpg';
import women_banner from './components/assets/female/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees.jpg'

function App() {
  return (
    <div >
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCategory banner ={men_banner}category="men"/>}/>
            <Route path='/womens' element={<ShopCategory banner ={women_banner}category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner ={kids_banner}category="kids"/>}/>
            {/* <Route path='/product' element={<Product/>}/>
              <Route path='/productId' element={<Product/>}/> */}
        
        <Route path='/product/:productId' element={<Product/>}/>

          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
          <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
