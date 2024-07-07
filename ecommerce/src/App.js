import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
        <title>Ecommerce App</title>
          <Routes>
            <Route path="/" element={<ProductList></ProductList>} exact/>
            <Route path="/login" element={<Login></Login>} exact/>
            <Route path="/register" element={<Register></Register>} exact/>
            <Route path="/products" element={<ProductList></ProductList>} exact/>
            <Route path="/product/:id" element={<ProductPage></ProductPage>} exact/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
