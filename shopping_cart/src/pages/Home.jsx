import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { products } from "../data.js"; 

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setLoading(true);
    setProductList(products); 
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : productList.length > 0 ? (
        <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {productList.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>No Products Found</div>
      )}
    </div>
  );
};

export default Home;