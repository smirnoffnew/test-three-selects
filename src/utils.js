import { get } from "./services/api/get";
import * as CONSTANTS from "./constants";

export const isEmpty = inputObject => Object.keys(inputObject).length === 0

export const getStyles = async () => {
  try {
    const { data } = await get(CONSTANTS.styleURL);
    const transformedStylesData = data.map((style) => ({
      id: +style.id,
      label: style.label,
      slug: style.slug,
    }));
    return transformedStylesData;
  } catch (error) {
    console.log(error.message);
  }
};

export const getBrands = async () => {
  try {
    const { data } = await get(CONSTANTS.brandURL);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getTerms = async () => {
  try {
    const { data } = await get(CONSTANTS.serviceURL);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getParseLink = async (slug) => {
  try {
    return await get(CONSTANTS.parseURL.concat(slug));
  } catch (error) {
    console.log(error.message);
  }
};

export const eventedPushState = (state, title, url) => {
  var pushChangeEvent = new CustomEvent("onpushstate", {
    detail: {
      state,
      title,
      url
    }
  });
  document.dispatchEvent(pushChangeEvent);
  return window.history.pushState(state, title, url);
}
