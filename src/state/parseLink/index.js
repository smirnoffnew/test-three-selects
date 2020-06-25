import React, { useReducer } from "react";
import useParseLinkState, { ParseLinkStateContext } from "./parseLink.state";
import { ParseLinkDispatchContext } from "./parseLink.dispatch";
import parseLinkReducer from "./parseLink.reducer";
import useParseLinkActions from "./parseLink.actions";

const initialState = {
  requested: false,
  failed: null,
};

const ParseLinkProvider = ({ children }) => {
  const [state, dispatch] = useReducer(parseLinkReducer, initialState);

  return (
    <ParseLinkStateContext.Provider value={state}>
      <ParseLinkDispatchContext.Provider value={dispatch}>
        {children}
      </ParseLinkDispatchContext.Provider>
    </ParseLinkStateContext.Provider>
  );
};

const useParseLink = () => {
  return [useParseLinkState(), useParseLinkActions()];
};

export { ParseLinkProvider };
export default useParseLink;
