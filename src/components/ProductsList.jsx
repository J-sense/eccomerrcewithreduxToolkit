import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Features/products/ProductsSlice";

const ProductsList = () => {
  const { products, isLoading, error } = useSelector((state) => state.productsR);
  console.log(products)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      {isLoading && (
        <div>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
      {error && <p>{error}</p>}
      {!isLoading && !error && products && products.length > 0 && (
        <div>
          {Array.isArray.products.map((item, idx) => (
            <div key={idx}>
              <p>{item.title}</p> {/* Replace with actual product properties */}
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
