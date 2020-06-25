import * as ACTIONS from "./parseLink.types";

export default (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.GET_PARSE_LINK_REQUESTED:
      return {
        ...state,
        requested: true,
        failed: null,
      };
    case ACTIONS.GET_PARSE_LINK_SUCCEED:
      return {
        ...state,
        requested: false,
        failed: null,
      };
    case ACTIONS.GET_PARSE_LINK_FAILED:
      return {
        ...state,
        requested: false,
        failed: payload,
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};
