import { useContext, createContext } from "react";

export const StylesStateContext = createContext();

const useStylesState = () => {
  const context = useContext(StylesStateContext);

  if (context === undefined) {
    throw new Error("useStylesState must be used within a StylesProvider");
  }

  return context;
};

export default useStylesState;
