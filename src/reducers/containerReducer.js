import * as ACTIONS from '../actions/constants'

export const initialState = {
  /**********************/
  service: {
    termsRequested: false,
    terms: null,
    termsFailed: null,
    selectedTerm: null,
  },
  /**********************/
  brand: {
    brandsRequested: false,
    brands: null,
    brandsFailed: null,
    selectedBrand: null,
  },
  /**********************/
  style: {
    stylesRequested: false,
    styles: null,
    stylesFailed: null,
    selectedStyle: null,
  },
  /**********************/
  parseLink: {
    parseLinkRequested: false,
    parseLinkFailed: null,
  },
  /**********************/
};

export const containerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /**********************/
    case ACTIONS.GET_TERMS_REQUESTED:
      return {
        ...state, service: {
          ...state.service,
          termsRequested: true,
          termsFailed: null,
        }
      };
    case ACTIONS.GET_TERMS_SUCCEED:
      return {
        ...state, service: {
          ...state.service,
          termsRequested: false,
          terms: payload,
          termsFailed: null,
        }
      };
    case ACTIONS.GET_TERMS_FAILED:
      return {
        ...state, service: {
          ...state.service,
          termsRequested: false,
          terms: null,
          termsFailed: payload,
        }
      };
    case ACTIONS.SELECT_TERM:
      return {
        ...state, service: {
          ...state.service,
          selectedTerm: payload,
        }
      };
    /**********************/
    case ACTIONS.GET_BRANDS_REQUESTED:
      return {
        ...state, brand: {
          ...state.brand,
          brandsRequested: true,
          brandsFailed: null,
        }
      };
    case ACTIONS.GET_BRANDS_SUCCEED:
      return {
        ...state, brand: {
          ...state.brand,
          brandsRequested: false,
          brands: payload,
          brandsFailed: null,
        }
      };
    case ACTIONS.GET_BRANDS_FAILED:
      return {
        ...state, brand: {
          ...state.brand,
          brandsRequested: false,
          brands: null,
          brandsFailed: payload,
        }
      };
    case ACTIONS.SELECT_BRAND:
      return {
        ...state, brand: {
          ...state.brand,
          selectedBrand: payload,
        }
      };
    /**********************/
    case ACTIONS.GET_STYLES_REQUESTED:
      return {
        ...state, style: {
          ...state.style,
          stylesRequested: true,
          stylesFailed: null,
        }
      };
    case ACTIONS.GET_STYLES_SUCCEED:
      return {
        ...state, style: {
          ...state.style,
          stylesRequested: false,
          styles: payload,
          stylesFailed: null,
        }
      };
    case ACTIONS.GET_STYLES_FAILED:
      return {
        ...state, style: {
          ...state.style,
          stylesRequested: false,
          styles: null,
          stylesFailed: payload,
        }
      };
    case ACTIONS.SELECT_STYLE:
      return {
        ...state, style: {
          ...state.style,
          selectedStyle: payload,
        }
      };
    /**********************/
    case ACTIONS.GET_PARSE_LINK_REQUESTED:
      return {
        ...state, parseLink: {
          ...state.parseLink,
          parseLinkRequested: true,
          parseLinkFailed: null,
        }
      };
    case ACTIONS.GET_PARSE_LINK_SUCCEED:
      return {
        ...state, parseLink: {
          ...state.parseLink,
          parseLinkRequested: false,
          parseLinkFailed: null,
        }
      };
    case ACTIONS.GET_PARSE_LINK_FAILED:
      return {
        ...state, parseLink: {
          ...state.parseLink,
          parseLinkRequested: false,
          parseLinkFailed: payload,
        }
      };
    /**********************/
    default:
      return state
  }
}
