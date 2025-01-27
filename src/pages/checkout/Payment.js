import React , {useState} from 'react'
import { CreditCard, Truck } from "lucide-react";
export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState("credit-card");
  return (
    <div>
          {/* Payment Details */}
          <div className="px-4 ">
            <h2  className="text-2xl font-semibold text-lato text-heading text-base-content border-b border-[#f1f1f1] pb-3">
              Payment Details
            </h2>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text flex items-center">
                  <CreditCard className="w-6 h-6 mr-2" />
                  Credit Card
                </span>
                <input
                  type="radio"
                  name="payment-method"
                  className="radio"
                  checked={paymentMethod === "credit-card"}
                  onChange={() => setPaymentMethod("credit-card")}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text flex items-center">
                  <img
                    src="/placeholder.svg?height=24&width=24"
                    alt="PayPal"
                    className="w-6 h-6 mr-2"
                  />
                  PayPal
                </span>
                <input
                  type="radio"
                  name="payment-method"
                  className="radio"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
              </label>
            </div>

            {paymentMethod === "credit-card" && (
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div className="sm:col-span-2 form-control">
                  <label className="label" htmlFor="card-number">
                    <span className="label-text">Card number</span>
                  </label>
                  <input
                    id="card-number"
                    name="card-number"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    required
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="expiration-date">
                    <span className="label-text">Expiration date (MM/YY)</span>
                  </label>
                  <input
                    id="expiration-date"
                    name="expiration-date"
                    type="text"
                    placeholder="MM/YY"
                    required
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="cvc">
                    <span className="label-text">CVC</span>
                  </label>
                  <input
                    id="cvc"
                    name="cvc"
                    type="text"
                    placeholder="123"
                    required
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            )}

            <div className="mt-8">
              <button className="btn btn-primary w-full">
                <Truck className="w-5 h-5 mr-2" />
                Place Order
              </button>
            </div>
          </div>
    </div>
  )
}
