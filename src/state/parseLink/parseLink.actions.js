import * as ACTIONS from "./parseLink.types";
import { get } from "../../services/api/get";
import { parseURL } from "../../constants";
import useParseLinkDispatch from "./parseLink.dispatch";

const useParseLinkActions = () => {
  const dispatch = useParseLinkDispatch();

  const requestParseLink = () => {
    dispatch({
      type: ACTIONS.GET_PARSE_LINK_REQUESTED,
    });
  };

  const getParseLinkSucceed = (parseLinks) => {
    dispatch({
      type: ACTIONS.GET_PARSE_LINK_SUCCEED,
      payload: parseLinks,
    });
  };

  const getParseLinkFailed = (name) => {
    dispatch({
      type: ACTIONS.GET_PARSE_LINK_FAILED,
      payload: `${name} fetch error`,
    });
  };

  const getParseLink = async (slug) => {
    try {
      requestParseLink();

      const data = await get(parseURL.concat(slug));

      getParseLinkSucceed(data);

      return data;
    } catch (error) {
      getParseLinkFailed(error.message);
    }
  };

  return { getParseLink };
};

export default useParseLinkActions;
