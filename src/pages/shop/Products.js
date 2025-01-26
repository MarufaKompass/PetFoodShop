import React from "react";
import TwoGrid from "../../components/svg/TwoGrid";
import FourGrid from "../../components/svg/FourGrid";
import Product from "./Product";
import ProductCategoriesFilter from "./ProductCategoriesFilter";
export default function Products() {
  return (
    <div className="container">
      <div class="grid grid-cols-4 gap-4">
       
        <div>
          <ProductCategoriesFilter></ProductCategoriesFilter>
        </div>

        <div class="col-span-3 ...">
          <div className="flex justify-between">
            <p>Showing 13-14 of 28 results</p>
            <div className="flex gap-3">
              <TwoGrid></TwoGrid>
              <FourGrid></FourGrid>
            </div>
          </div>

          <div>
            <Product></Product>
          </div>
        </div>
      </div>
    </div>
  );
}
