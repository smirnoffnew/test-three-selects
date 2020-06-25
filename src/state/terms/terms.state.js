import { useContext, createContext } from "react";

export const TermsStateContext = createContext();

const useTermsState = () => {
  const context = useContext(TermsStateContext);

  if (context === undefined) {
    throw new Error("useTermsState must be used within a TermsProvider");
  }

  return context;
};

export default useTermsState;
