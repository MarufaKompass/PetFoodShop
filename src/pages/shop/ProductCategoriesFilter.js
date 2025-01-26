import React , {useState} from 'react'
import { ChevronDown } from 'lucide-react';
import ShortListedProduct from "./ShortListedProduct";
export default function ProductCategoriesFilter() {
    const categories = ["Dry Food", "Wet Food", "Treats", "Supplements","Beds","Bowls","Clothing", "Flea & Tick", "Pharmacy", "Treats"
 ]
    const priceRanges = ["Under 500 BDT", "1000 BDT - 2000 BDT", "2000 BDT - 4000 BDT", "Over 5000 BDT"]
    const brands = ["Royal Canin", "Purina", "Hill's Science Diet", "Blue Buffalo", "Iams"]
    const lastProducts = ["New Arrivals", "Best Sellers", "On Sale"]



    const [openSections, setOpenSections] = useState({
        categories: true,
        price: true,
        brands: true,
        lastProducts: true,
      })

      const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
      }

     const FilterSection = ({ title, items, section }) => (
    <div className="mb-4">
      <button
        onClick={() => toggleSection(section)}
        className="flex justify-between items-center w-full p-2  rounded-md transition-colors duration-200"
      >
        <span className="font-bold text-heading  text-[20px]">{title}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${openSections[section] ? "transform rotate-180" : ""}`}
        />
      </button>
      {openSections[section] && (
        <div className="mt-2 pl-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center mb-2 cursor-pointer">
              <input type="checkbox" id={`${section}-${index}`} className="mr-2 cursor-pointer" />
              <label htmlFor={`${section}-${index}`} className="text-textTitle text-gray font-[500] cursor-pointer">
                {item}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  )
  return (
<div className="">
<div className=" p-1 bg-white ">
      <h2 className="text-2xl font-bold mb-4 text-heading ">Filters</h2>
      <FilterSection title="Categories" items={categories} section="categories" />
      <FilterSection title="Price" items={priceRanges} section="price" />
      <FilterSection title="Brands" items={brands} section="brands" />
      <FilterSection title="Last Products" items={lastProducts} section="lastProducts" />

      <ShortListedProduct></ShortListedProduct>
    </div>
</div>
  )
}
