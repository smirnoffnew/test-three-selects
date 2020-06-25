import * as ACTIONS from "./terms.types";
import { get } from "../../services/api/get";
import { serviceURL } from "../../constants";
import useTermsDispatch from "./terms.dispatch";

const useTermsActions = () => {
  const dispatch = useTermsDispatch();

  const requestTerms = () => {
    dispatch({
      type: ACTIONS.GET_TERMS_REQUESTED,
    });
  };

  const getTermsSucceed = (terms) => {
    dispatch({
      type: ACTIONS.GET_TERMS_SUCCEED,
      payload: terms,
    });
  };

  const getTermsFailed = (name) => {
    dispatch({
      type: ACTIONS.GET_TERMS_FAILED,
      payload: `${name} fetch error`,
    });
  };

  const selectTerm = (term) => {
    console.log(term);
    dispatch({
      type: ACTIONS.SELECT_TERM,
      payload: term,
    });
  };

  const getTerms = async () => {
    try {
      requestTerms();

      const { data } = await get(serviceURL);

      getTermsSucceed(data);

      return data;
    } catch (error) {
      getTermsFailed(error.message);
    }
  };

  return { selectTerm, getTerms };
};

export default useTermsActions;
