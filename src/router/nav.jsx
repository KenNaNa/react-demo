import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavApp() {
  return (
    <nav>
      <NavLink to="">首页</NavLink>
      <NavLink to="product">产品</NavLink>
      <NavLink to="about">关于</NavLink>
    </nav>
  );
}
