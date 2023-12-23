const Product = ({ product }) => {
  // destructure product
  const { image, category, title, price } = product;
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
    </div>
  );
};

export default Product;
