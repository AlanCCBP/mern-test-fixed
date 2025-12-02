export const homeState = {
  categoryListDropdown: false,
  filterListDropdown: false,
  searchDropdown: false,
  products: null,
  productsOriginal: null,
  loading: false,
  sliderImages: [],
};

export const homeReducer = (state, action) => {
  switch (action.type) {
    case "categoryListDropdown":
      return {
        ...state,
        categoryListDropdown: action.payload,
        filterListDropdown: false,
        searchDropdown: false,
      };
    case "filterListDropdown":
      return {
        ...state,
        categoryListDropdown: false,
        filterListDropdown: action.payload,
        searchDropdown: false,
      };
    case "applyFilter":
      const { min, max } = action.payload;

      return {
        ...state,
        products:
          state.productsOriginal &&
          state.productsOriginal.filter((item) => {
            const price = Number(item.pPrice);

            if (min && price < Number(min)) return false;
            if (max && price > Number(max)) return false;

            return true;
          }),

        filterListDropdown: false,
      };
    case "searchDropdown":
      return {
        ...state,
        categoryListDropdown: false,
        filterListDropdown: false,
        searchDropdown: action.payload,
      };
    case "setProducts":
      return {
        ...state,
        products: action.payload,
        productsOriginal: action.payload,
      };
    case "searchHandleInReducer":
      return {
        ...state,
        products:
          action.productArray &&
          action.productArray.filter((item) => {
            if (
              item.pName.toUpperCase().indexOf(action.payload.toUpperCase()) !==
              -1
            ) {
              return item;
            }
            return null;
          }),
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "sliderImages":
      return {
        ...state,
        sliderImages: action.payload,
      };
    default:
      return state;
  }
};
