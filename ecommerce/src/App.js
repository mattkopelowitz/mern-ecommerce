import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import Login from './components/Login';
// import Register from './components/Auth/Register';
// import ProductList from './components/Products/ProductList';
// import ProductDetail from './components/Products/ProductDetail';
// import Cart from './components/Cart/Cart';

const App = () => {
  return (
    // <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login></Login>} exact/>
            <Route path="/login" element={<Login></Login>} />
            {/* <Route path="/register" component={Register} />
            <Route path="/products" component={ProductList} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/cart" component={Cart} /> */}
          </Routes>
        </div>
      </Router>
    // </Provider> 
  );
};

export default App;
