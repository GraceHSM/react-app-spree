import React from 'react';
import './App.css';
import ProductList from './product/productList';
import Nav from './cart/nav';

const App = () => {
  return (
    <div className='container'>
      <Nav />
      <ProductList />
    </div>
  );
}

export default App;
