import React, { useReducer } from "react";
import useStylesState, { StylesStateContext } from "./styles.state";
import { StylesDispatchContext } from "./styles.dispatch";
import useStylesActions from "./styles.actions";
import stylesReducer from "./styles.reducer";

const styleState = localStorage.getItem("style");

const initialState = styleState
  ? JSON.parse(styleState)
  : {
      requested: false,
      all: null,
      failed: null,
      selected: null,
    };

const StylesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stylesReducer, initialState);

  return (
    <StylesStateContext.Provider value={state}>
      <StylesDispatchContext.Provider value={dispatch}>
        {children}
      </StylesDispatchContext.Provider>
    </StylesStateContext.Provider>
  );
};

const useStyles = () => {
  return [useStylesState(), useStylesActions()];
};

export { StylesProvider };
export default useStyles;
