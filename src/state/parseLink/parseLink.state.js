import { useContext, createContext } from "react";

export const ParseLinkStateContext = createContext();

const useParseLinkState = () => {
  const context = useContext(ParseLinkStateContext);

  if (context === undefined) {
    throw new Error(
      "useParseLinkState must be used within a ParseLinkProvider"
    );
  }

  return context;
};

export default useParseLinkState;
