import React, { useContext } from "react";
import { HomeContext } from "./index";

const ProductSearchDropdown = () => {
  const { data, dispatch } = useContext(HomeContext);

  const handleChange = (e) => {
    dispatch({
      type: "searchHandleInReducer",
      payload: e.target.value,
    });
  };

  return (
    <div className="mt-3 p-4 bg-white shadow-md rounded-md border w-full">
      <h3 className="font-semibold mb-2">Search Products</h3>
      <input
        type="text"
        placeholder="Search by Title..."
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        placeholder="Search by Description..."
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
    </div>
  );
};

export default ProductSearchDropdown;
