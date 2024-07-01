import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Cart from './components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login></Login>} exact/>
            <Route path="/login" element={<Login></Login>} exact/>
            {/*<Route path="/register" element={<Register></Register>} exact/>*/}
            <Route path="/products" element={<ProductList></ProductList>} exact/>
            {/*<Route path="/product/:id" element={<Product></Product>} exact/>*/}
            {/*<Route path="/cart" element={<Cart></Cart>} exact/>*/}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
