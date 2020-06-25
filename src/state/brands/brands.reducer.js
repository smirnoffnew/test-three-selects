import * as ACTIONS from "./brands.types";

export default (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.GET_BRANDS_REQUESTED:
      return {
        ...state,
        requested: true,
        failed: null,
      };
    case ACTIONS.GET_BRANDS_SUCCEED:
      return {
        ...state,
        requested: false,
        all: payload,
        failed: null,
      };
    case ACTIONS.GET_BRANDS_FAILED:
      return {
        ...state,
        requested: false,
        all: null,
        failed: payload,
      };
    case ACTIONS.SELECT_BRAND:
      return {
        ...state,
        selected: payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
