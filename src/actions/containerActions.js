import { API_URL } from "../constants";

export const get = async(url = '') => {
  const response = await fetch(API_URL.concat(url), {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': navigator.language
    }
  });
  return await response.json();
}
