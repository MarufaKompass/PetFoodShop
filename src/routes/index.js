import React, { Suspense } from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Products from "../pages/shop/Products";
import Cart from "../pages/cart/Cart";
import WishList from "../pages/wishList/WishList";
import Contact from "../pages/contact/Contact";
import ProductByCategories from "../pages/productByCategories/ProductByCategories";

const shopSubMenu = [
  { path: "/shop/dogs", label: "Dogs", element: <ProductByCategories /> },
  { path: "/shop/cats", label: "Cats", element: <ProductByCategories /> },
  { path: "/shop/fish", label: "Fish", element: <ProductByCategories /> },
  { path: "/shop/birds", label: "Birds", element: <ProductByCategories /> },
];

const routes = [
  {
    path: "/",
    label: "Home",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Home />
      </Suspense>
    ),
  },

  // {
  //   path: "/",
  //   element: (
  //     <Suspense fallback={<p>Loading...</p>}>
  //       <Home />
  //     </Suspense>
  //   ),
  // },
  {
    path: "/about",
    label: "About",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    label: "About",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/shop",
    label: "Shop",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Products />
      </Suspense>
    ),
    children: shopSubMenu,
  },

  {
    path: "/cart",
    // showInNav: false,
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Cart />
      </Suspense>
    ),
  },
  {
    path: "/wishList",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <WishList />
      </Suspense>
    ),
  },
];

export default routes;
