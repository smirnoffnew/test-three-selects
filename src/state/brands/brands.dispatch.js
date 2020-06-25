import { useContext, createContext } from "react";

export const BrandsDispatchContext = createContext();

const useBrandsDispatch = () => {
  const context = useContext(BrandsDispatchContext);

  if (context === undefined) {
    throw new Error("useBrandsDispatch must be used within a BrandsProvider");
  }

  return context;
};

export default useBrandsDispatch;
