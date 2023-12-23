import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import ProductRow from "../components/ProductRow";
import Message from "../components/Message";
import PayPal from "../img/paypal.svg";
import Stripe from "../img/stripe.svg";
import { MdOutlineRedeem } from "react-icons/md";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [payment, selectPayment] = useState("");

  const handleBuy = () => {
    // Set the state to display the error message
    setShowErrorMessage(true);

    setTimeout(() => {
      // Reset the state after a certain duration
      setShowErrorMessage(false);
    }, 3000);
  };

  return (
    <div className="h-screen">
      <section className="py-8 lg:py-20 flex flex-col w-full">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-10 text-center">
          Checkout
        </h1>
        <div className="p-4 lg:p-20 flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col gap-5 w-full lg:w-2/3">
            <h2 className="text-lg lg:text-2xl">
              Total: $ {parseFloat(total).toFixed(2)}
            </h2>
            <div className="w-full lg:w-[500px] flex flex-col gap-5 max-h-[500px] overflow-y-auto px-2">
              {cart.map((product) => (
                <ProductRow key={product.id} product={product} canAdd={false} />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 items-center lg:items-end justify-end">
            <div className="w-full lg:w-[400px]">
              <p className="mb-3">Select a Payment:</p>
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-[400px] mb-auto">
              <button
                className={`${
                  payment === "Paypal"
                    ? "bg-blue-600 text-white"
                    : "border text-black"
                } border-gray-400 px-4 py-2 rounded-md flex justify-around items-center`}
                onClick={() => selectPayment("Paypal")}
              >
                <img src={PayPal} width={30} alt="PayPal" />
                PayPal
              </button>
              <button
                className={`${
                  payment === "Stripe"
                    ? "bg-black text-white"
                    : "border text-black"
                } border-gray-400 px-4 py-2 rounded-md flex justify-around items-center`}
                onClick={() => selectPayment("Stripe")}
              >
                <img src={Stripe} width={30} alt="Stripe" />
                Stripe
              </button>
            </div>
            <div className="flex gap-2 items-center mt-10">
              <div className="border border-gray-400 rounded-md p-2 flex items-center gap-5">
                <MdOutlineRedeem />
                <input
                  type="text"
                  placeholder="Enter a Promotion code"
                  className="outline-none"
                />
              </div>
              <button className="bg-primary flex py-2 px-5 justify-center items-center text-white w-full rounded-xl">
                Check
              </button>
            </div>
            <div className="mt-3 lg:mt-3 w-full lg:w-[400px]">
              <button
                className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium rounded-xl px-4 lg:px-10 text-xl"
                onClick={handleBuy}
              >
                {payment == ""
                  ? "Select a payment"
                  : `Continue with ${payment}`}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Display the error message if showErrorMessage is true */}
      {showErrorMessage && (
        <Message type="danger" text="Service is currently unavailable!" />
      )}
    </div>
  );
};

export default Checkout;
