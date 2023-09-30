import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import List from '../List';
import Img from '../Img';
import Button from '../Button';
import ProductsLayer from '../Products/ProductsLayer';
export default function LinkApp() {
  return (
    <div className="product">
      <header>
        <Link to="/">返回首页</Link>
        <Link
          to={{
            pathname: '/settings',
            search: '?sort=date',
            hash: '#hash',
          }}
        >
          设置
        </Link>
      </header>

      <footer>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/product" element={<Img />} />
          <Route path="/about" element={<Button />} />
          <Route path="*" element={<ProductsLayer />} />
        </Routes>
      </footer>
    </div>
  );
}
