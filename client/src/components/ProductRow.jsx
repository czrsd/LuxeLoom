// ProductRow.jsx
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const ProductRow = ({ product, canAdd = true }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  // destructure product
  const { id, image, category, title, price, amount } = product;

  return (
    <div className="flex itmes-center gap-5 border-t border-b border-[#e4e4e4] w-full p-2">
      <div className="h-[150px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[100px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[100px] group-hover:scale-110 transition duration-300"
              src={image}
              draggable={false}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* category, title & price */}
      <div className="flex flex-col justify-center items-start gap-1">
        <div className="tex-sm capitalize text-gray-500 mb-1">{category}</div>
        <h2 className="font-semibold mb-1 text-ellipsis overflow-hidden">
          {title}
        </h2>
        <h2 className="font-semibbold">$ {price}</h2>
      </div>

      {canAdd ? (
        <div className="flex flex-1 max-w-[100px] max-h-[40px] my-auto ml-auto p-2 items-center justify-center h-full border text-primary font-medium">
          <div
            onClick={() => decreaseAmount(id)}
            className="h-full flex-1 flex justify-center items-center cursor-pointer"
          >
            <IoMdRemove />
          </div>
          <div className="h-full flex justify-center items-center px-2">
            {amount}
          </div>
          <div
            onClick={() => increaseAmount(id)}
            className="h-full flex flex-1 justify-center items-center cursor-pointer"
          >
            <IoMdAdd />
          </div>
        </div>
      ) : (
        <div className="flex flex-1 max-w-[100px] max-h-[40px] my-auto ml-auto p-2 items-center justify-center h-full border text-primary font-medium">
          <span>{amount}x</span>
        </div>
      )}
    </div>
  );
};

export default ProductRow;
