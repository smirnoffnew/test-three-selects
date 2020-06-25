import { useContext, createContext } from "react";

export const StylesDispatchContext = createContext();

const useStylesDispatch = () => {
  const context = useContext(StylesDispatchContext);

  if (context === undefined) {
    throw new Error("useStylesDispatch must be used within a StylesProvider");
  }

  return context;
};

export default useStylesDispatch;
