import React, { useState } from "react";
import { Truck } from "lucide-react";
export default function Payment() {
  return (
    <div>
      <div className="px-4 py-10">
        <h2 className="text-2xl font-semibold text-lato text-heading text-base-content border-b border-[#f1f1f1] pb-3">
          Payment Details
        </h2>

        <div className="mt-8">
          <button className="btn btn-primary w-full">
            <Truck className="w-5 h-5 mr-2" />
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
