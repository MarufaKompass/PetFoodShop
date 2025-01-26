import React, { Suspense } from 'react';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Products from '../pages/shop/Products';
import Cart from '../pages/cart/Cart';
import WishList from '../pages/wishList/WishList';
import ProductDetails from '../pages/shop/productDetails/ProductDetails';

const routes= [
  {
    path: '/',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Home />
      </Suspense>
    ),

  },

  {
    path: '/',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Home />
      </Suspense>
    ),

  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    ),

  },
  {
    path: '/shop',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Products />
      </Suspense>
    ),

  },
  {
    path: '/cart',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Cart />
      </Suspense>
    ),

  },
  {
    path: '/wishList',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <WishList />
      </Suspense>
    ),

  },
  {
    path: '/productDetails',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <ProductDetails />
      </Suspense>
    ),

  },
];

export default routes;
