import * as ACTIONS from "./styles.types";
import { get } from "../../services/api/get";
import { styleURL } from "../../constants";
import useStylesDispatch from "./styles.dispatch";

const useStylesActions = () => {
  const dispatch = useStylesDispatch();

  const requestStyles = () => {
    dispatch({
      type: ACTIONS.GET_STYLES_REQUESTED,
    });
  };

  const getStylesSucceed = (styles) => {
    dispatch({
      type: ACTIONS.GET_STYLES_SUCCEED,
      payload: styles,
    });
  };

  const getStylesFailed = (name) => {
    dispatch({
      type: ACTIONS.GET_STYLES_FAILED,
      payload: `${name} fetch error`,
    });
  };

  const selectStyle = (style) => {
    dispatch({
      type: ACTIONS.SELECT_STYLE,
      payload: style,
    });
  };

  const getStyles = async () => {
    try {
      requestStyles();

      const { data } = await get(styleURL);

      getStylesSucceed(data);

      return data;
    } catch (error) {
      getStylesFailed(error.message);
    }
  };

  return { selectStyle, getStyles };
};

export default useStylesActions;
