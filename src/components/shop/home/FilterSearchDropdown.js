import React, { useContext } from "react";
import { HomeContext } from "./index";
import ProductFilterDropdown from "./ProductFilterDropdown";
import ProductSearchDropdown from "./ProductSearchDrowdown";

const FilterSearchDropdown = () => {
  const { data, dispatch } = useContext(HomeContext);

  if (!data.filterSearchDropdown) return null;

  return (
    <div className="mt-3 p-4 bg-white shadow-md rounded-md border w-full space-y-4">
      <ProductFilterDropdown />
      <ProductSearchDropdown />
      <div className="flex justify-end">
        <button
          onClick={() =>
            dispatch({ type: "filterSearchDropdown", payload: false })
          }
          className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FilterSearchDropdown;
