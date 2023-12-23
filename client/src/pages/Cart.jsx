import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import ProductRow from "../components/ProductRow";

const Cart = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div>
      <section className="py-20 flex justify-center items-center">
        <div className="container px-10">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Shopping Bag
          </h1>
          {total > 0 ? (
            <>
              <div className="flex flex-col justify-center items-start gap-5">
                {cart.map((product) => (
                  <ProductRow product={product} key={product.id} />
                ))}
              </div>
              <div className="flex justify-between items-center mt-10">
                <span className="text-orange-600 font-semibold text-xl">
                  Total: $ {parseFloat(total).toFixed(2)}
                </span>
                <Link
                  to={"/checkout"}
                  className="bg-primary flex p-3 justify-center items-center text-white rounded-xl font-medium"
                >
                  Checkout
                </Link>
              </div>
            </>
          ) : (
            <span className="text-2xl text-gray-500 text-center">
              Nothing in here...
            </span>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
