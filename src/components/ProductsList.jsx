import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData } from "../Features/products/ProductsSlice";

const ProductsList = () => {
  const { products, isLoading, error } = useSelector(
    (state) => state.productsR
  );
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="bg-[#E5E6E6] w-[80%] mx-auto p-10 rounded-xl my-32">
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
        <div className="grid grid-cols-3 gap-2 relative">
          {products.map((item, idx) => (
            <div className="card w-80 border bg-[#F2F2F2]">
            <figure className="h-36">
              <img
                src={item.images}
                alt="Shoes"
                className="rounded-xl object-cover h-44  w-44" />
            </figure>
            <div className="card-body items-start  h-52">
              <h2 className="card-title font-bold tracking-tighter text-[#000000]">{item.title}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="absolute bottom-1">
                <button className="rounded-full px-8 py-4 bg-[#202020] text-white" onClick={()=>dispatch(deleteData(item.id))}>Buy Now</button>
              </div>
            </div>
          </div>
          
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
