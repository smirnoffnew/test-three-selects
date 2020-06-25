import { useContext, createContext } from "react";

export const BrandsStateContext = createContext();

const useBrandsState = () => {
  const context = useContext(BrandsStateContext);

  if (context === undefined) {
    throw new Error("useBrandsState must be used within a BrandsProvider");
  }

  return context;
};

export default useBrandsState;
