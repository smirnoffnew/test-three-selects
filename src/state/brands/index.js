import React, { useReducer } from "react";
import brandsReducer from "./brands.reducer";
import useBrandsState, { BrandsStateContext } from "./brands.state";
import { BrandsDispatchContext } from "./brands.dispatch";
import useBrandActions from "./brands.actions";

const initialState = {
  requested: false,
  all: null,
  failed: null,
  selected: null,
};

const BrandsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(brandsReducer, initialState);

  return (
    <BrandsStateContext.Provider value={state}>
      <BrandsDispatchContext.Provider value={dispatch}>
        {children}
      </BrandsDispatchContext.Provider>
    </BrandsStateContext.Provider>
  );
};

const useBrands = () => {
  return [useBrandsState(), useBrandActions()];
};

export { BrandsProvider };
export default useBrands;
