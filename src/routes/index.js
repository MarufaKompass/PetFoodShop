import React, { Suspense } from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Products from "../pages/shop/Products";
import Cart from "../pages/cart/Cart";
import WishList from "../pages/wishList/WishList";
import Contact from "../pages/contact/Contact";
import CheckOut from "../pages/checkout/CheckOut";
import Error from "../pages/error/Error";
import Profile from "../pages/profile/Profile";
import ProductByCategories from "../pages/productByCategories/ProductByCategories";
import ProductDetails from "../pages/shop/productDetails/ProductDetails";
import CatsProduct from "../pages/catsProduct/CatsProduct";



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
  // {
  //   path: "/contact",
  //   label: "About",
  //   element: (
  //     <Suspense fallback={<p>Loading...</p>}>
  //       <Contact />
  //     </Suspense>
  //   ),
  // },

  {
    path: "/cats-accessories",
    label: "Cats",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <CatsProduct />
      </Suspense>
    ),
    children: [
      {
        path: "/cats-accessories/dry_food",
        label: "Cats Dry Foods",
        element: <ProductByCategories />,
      },
      {
        path: "/cats-accessories/wet_food",
        label: "Cats Wet Foods",
        element: <ProductByCategories />,
      },
   
    ],
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
        path: "/shop/dogs",
        label: "Dogs",
        element: <ProductByCategories />,
      },
      {
        path: "/shop/cats",
        label: "Cats",
        element: <ProductByCategories />,
      },
      {
        path: "/shop/fish",
        label: "Fish",
        element: <ProductByCategories />,
      },
      {
        path: "/shop/birds",
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
  {
    path: '*',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Error />
      </Suspense>
    ),

  },
  {
    path: '/profile',
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Profile />
      </Suspense>
    ),

  },
];

export default routes;
