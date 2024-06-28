import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" component={Login} exact/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    </Provider> 
  );
};

export default App;
