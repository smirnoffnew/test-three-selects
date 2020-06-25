import { useContext, createContext } from "react";

export const TermsDispatchContext = createContext();

const useTermsDispatch = () => {
  const context = useContext(TermsDispatchContext);

  if (context === undefined) {
    throw new Error("useTermsDispatch must be used within a TermsProvider");
  }

  return context;
};

export default useTermsDispatch;
