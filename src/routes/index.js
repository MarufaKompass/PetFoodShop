import React, { Suspense } from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Products from "../pages/shop/Products";
import Cart from "../pages/cart/Cart";
import WishList from "../pages/wishList/WishList";
import Contact from "../pages/contact/Contact";
import CheckOut from "../pages/checkout/CheckOut";
import ProductByCategories from "../pages/productByCategories/ProductByCategories";
import ProductDetails from "../pages/shop/productDetails/ProductDetails";

// const shopSubMenu = [
//   { path: "/shop/dogs", label: "Dogs", element: <ProductByCategories /> },
//   { path: "/shop/cats", label: "Cats", element: <ProductByCategories /> },
//   { path: "/shop/fish", label: "Fish", element: <ProductByCategories /> },
//   { path: "/shop/birds", label: "Birds", element: <ProductByCategories /> },
// ];

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
    children: [
      {
        path: "shop/dogs",
        label: "Dogs",
        element: <ProductByCategories />,
      },
      {
        path: "cats",
        label: "Cats",
        element: <ProductByCategories />,
      },
      {
        path: "fish",
        label: "Fish",
        element: <ProductByCategories />,
      },
      {
        path: "birds",
        label: "Birds",
        element: <ProductByCategories />,
      },
    ],
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
  {
    path: '/productDetails',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <ProductDetails />
      </Suspense>
    ),

  },
  {
    path: '/checkOut',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <CheckOut />
      </Suspense>
    ),

  },
  {
    path: '/productByCategories',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <ProductByCategories />
      </Suspense>
    ),

  },
];

export default routes;
