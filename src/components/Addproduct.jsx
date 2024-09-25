import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createData } from "../Features/products/ProductsSlice";
import { nanoid } from "nanoid/non-secure";

const Addproduct = () => {
    const dispatch = useDispatch()
    const[product,setProduct] = useState({
        id:"",
        description:"",
        title:"",
        images:"https://threedio-prod-var-cdn.icons8.com/lf/preview_sets/previews/LZeaIOpiqps8EFyo.webp"

    })
    const handleChang =(e)=>{
        setProduct({
            ...product,[e.target.name]:e.target.value
        })
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createData({product,nanoid}))
    }
  return (
    <div>
      <div class="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h2 class="text-2xl font-bold mb-4">Product Form</h2>
        <form onSubmit={handleSubmit}>
          <label class="block mb-2 font-semibold" for="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            class="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter product title"
            onChange={handleChang}
          />

          <label class="block mt-4 mb-2 font-semibold" for="description">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            class="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter product description"
            value={product.description}
            onChange={handleChang}
          ></textarea>

          <label class="block mt-4 mb-2 font-semibold" for="category">
            Photo
          </label>
          <input
            type="text"
            value={product.images}
            id="category"
            name="category"
            class="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter product category"
            disabled
          />

          <label class="block mt-4 mb-2 font-semibold" for="price">
            Price:
          </label>
          <input
            type="number"
            step="0.01"
            id="price"
            name="price"
            class="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter product price"
          />

          <label class="block mt-4 mb-2 font-semibold" for="discountPercentage">
            Discount Percentage:
          </label>
          <input
            type="number"
            step="0.01"
            id="discountPercentage"
            name="discountPercentage"
            class="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter discount percentage"
            disabled
          />

          <label class="block mt-4 mb-2 font-semibold" for="rating">
            Rating:
          </label>
          <input
            type="number"
            step="0.01"
            id="rating"
            name="rating"
            class="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter product rating"
            disabled
          />

          <label class="block mt-4 mb-2 font-semibold" for="stock">
            Stock:
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            class="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter stock quantity"
            disabled
          />

          <label class="block mt-4 mb-2 font-semibold" for="tags">
            Tags:
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            class="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter tags (comma separated)"
            disabled
          />

          <button
            type="submit"
            class="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
