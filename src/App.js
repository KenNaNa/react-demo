import React from 'react';
import './style.css';
import Button from './Button';
import About from './About';
import Img from './Img';
import List from './List';

import ProductsLayer from './Products/ProductsLayer';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button />
      <About />
      <Img />
      <List />

      <ProductsLayer />
    </div>
  );
}
