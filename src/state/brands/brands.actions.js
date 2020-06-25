import useBrandsDispatch from "./brands.dispatch";
import * as ACTIONS from "./brands.types";
import { get } from "../../services/api/get";
import { brandURL } from "../../constants";

const useBrandsActions = () => {
  const dispatch = useBrandsDispatch();

  const requestBrands = () => {
    dispatch({
      type: ACTIONS.GET_BRANDS_REQUESTED,
    });
  };

  const getBrandsSucceed = (brands) => {
    dispatch({
      type: ACTIONS.GET_BRANDS_SUCCEED,
      payload: brands,
    });
  };

  const getBrandsFailed = (name) => {
    dispatch({
      type: ACTIONS.GET_BRANDS_FAILED,
      payload: `${name} fetch error`,
    });
  };

  const selectBrand = (brand) => {
    dispatch({
      type: ACTIONS.SELECT_BRAND,
      payload: brand,
    });
  };

  const getBrands = async () => {
    try {
      requestBrands();

      const { data } = await get(brandURL);

      getBrandsSucceed(data);

      return data;
    } catch (error) {
      getBrandsFailed(error.message);
    }
  };

  return { selectBrand, getBrands };
};

export default useBrandsActions;
