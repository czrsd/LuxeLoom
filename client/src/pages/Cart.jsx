import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import ProductRow from "../components/ProductRow";

const Home = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <section className="py-20">
        <div className="container px-10">
          <h1 className="text-3xl font-semibold mb-10 text-center">
            Shopping Bag
          </h1>
          <div className="flex flex-col justify-center items-start w-fit gap-5">
            {cart.map((product) => {
              return <ProductRow product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
