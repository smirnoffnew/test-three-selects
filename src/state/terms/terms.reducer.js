import * as ACTIONS from "./terms.types";

export default (
  state = {
    requested: false,
    all: null,
    failed: null,
    selected: null,
  },
  { type, payload }
) => {
  switch (type) {
    case ACTIONS.GET_TERMS_REQUESTED:
      return {
        ...state,
        requested: true,
        failed: null,
      };
    case ACTIONS.GET_TERMS_SUCCEED:
      return {
        ...state,
        requested: false,
        all: payload,
        failed: null,
      };
    case ACTIONS.GET_TERMS_FAILED:
      return {
        ...state,
        requested: false,
        all: null,
        failed: payload,
      };
    case ACTIONS.SELECT_TERM:
      return {
        ...state,
        selected: payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
