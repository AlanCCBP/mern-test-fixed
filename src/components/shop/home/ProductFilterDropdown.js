import React, { useState, useContext } from "react";
import { HomeContext } from "./index";

const ProductFilterDropdown = () => {
  const { data, dispatch } = useContext(HomeContext);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const handleApply = () => {
    dispatch({
      type: "applyFilter",
      payload: { min, max },
    });
  };

  if (!data.filterListDropdown) return null;

  return (
    <div className="mt-3 p-4 bg-white shadow-md rounded-md border w-full">
      <h3 className="font-semibold mb-2">Filter by Price</h3>
      <div className="flex flex-col space-y-3">
        <input
          type="number"
          placeholder="Min price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="number"
          placeholder="Max price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="border rounded p-2"
        />
        <button
          onClick={handleApply}
          className="bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ProductFilterDropdown;
