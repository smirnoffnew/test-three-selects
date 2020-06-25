import { API_URL } from "../../constants";

export const get = async (url = "") => {
  const response = await fetch(API_URL.concat(url));

  return await response.json();
};
