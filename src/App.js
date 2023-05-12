import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

import { CartProvider } from './context/CartContext';

import { NotificationProvider } from './notification/NotificationService';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <NotificationProvider>
            <CartProvider>
            <Toaster />
              <Navbar />
              <Routes>
                <Route path="/EntregaFinalReact-Iglesias" element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
                <Route path="/categoria/:categoryId" element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/checkout" element={<Checkout />}/>
              </Routes>
            </CartProvider>
          </NotificationProvider>
        </BrowserRouter>
    </div>
  )
}

export default App;
