import * as ACTIONS from "./styles.types";

export default (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.GET_STYLES_REQUESTED:
      return {
        ...state,
        requested: true,
        failed: null,
      };
    case ACTIONS.GET_STYLES_SUCCEED:
      return {
        ...state,
        requested: false,
        all: payload,
        failed: null,
      };
    case ACTIONS.GET_STYLES_FAILED:
      return {
        ...state,
        requested: false,
        all: null,
        failed: payload,
      };
    case ACTIONS.SELECT_STYLE:
      return {
        ...state,
        selected: payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
