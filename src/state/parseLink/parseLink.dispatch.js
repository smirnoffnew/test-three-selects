import { useContext, createContext } from "react";

export const ParseLinkDispatchContext = createContext();

const useParseLinkDispatch = () => {
  const context = useContext(ParseLinkDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useParseLinkDispatch must be used within a ParseLinkProvider"
    );
  }

  return context;
};

export default useParseLinkDispatch;
