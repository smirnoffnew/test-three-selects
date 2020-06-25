import React, { useReducer } from "react";
import useTermsState, { TermsStateContext } from "./terms.state";
import { TermsDispatchContext } from "./terms.dispatch";
import useTermsActions from "./terms.actions";
import termsReducer from "./terms.reducer";

const initialState = {
  requested: false,
  all: null,
  failed: null,
  selected: null,
};

const TermsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(termsReducer, initialState);

  return (
    <TermsStateContext.Provider value={state}>
      <TermsDispatchContext.Provider value={dispatch}>
        {children}
      </TermsDispatchContext.Provider>
    </TermsStateContext.Provider>
  );
};

const useTerms = () => {
  return [useTermsState(), useTermsActions()];
};

export { TermsProvider };
export default useTerms;
