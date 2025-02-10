
const menuItems = [
  {
    id: "home",
    title: "Home",
    path: "/",

  },
  // {
  //   id: "about",
  //   title: "About",
  //   path: "/about",
   
  // },
  {
    id: "product",
    title: "Product",
    path: "/product",
   
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
  
  },
  {
    id: "categories",
    title: "Categories",
    type: 'collapse',
    children: [
      {
        id: "dogs",
        title: "Dogs Wet & Dry Foods",
        path: "/categories/dogs",
        
      },
      {
        id: "cats",
        title: "Cats Foods",
        path: "/categories/cats",
       
      },
      {
        id: "fish",
        title: "Fish Foods",
        path: "/categories/fish",
   
      },
    ],
  },
];

export default menuItems;
