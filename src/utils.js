import { service, brand, style } from "./constants";

export const setURL = ({ name, state, slug }) => {
  switch (name) {
    case service: {
      if (state.brand.selected?.slug && state.style.selected?.slug) {
        document.location = new URL(
          `${origin}/${slug}/${state.brand.selected?.slug}/${state.style.selected?.slug}`
        );
      } else if (state.brand.selected?.slug) {
        document.location = new URL(
          `${origin}/${slug}/${state.brand.selected?.slug}`
        );
      } else {
        document.location = new URL(`${origin}/${slug}`);
      }
      break;
    }
    case brand: {
      if (state.style.selected?.slug) {
        document.location = new URL(
          `${origin}/${state.service.selected?.slug}/${slug}/${state.style.selected?.slug}`
        );
      } else {
        document.location = new URL(
          `${origin}/${state.service.selected?.slug}/${slug}`
        );
      }
      break;
    }
    case style: {
      if (state.service.selected?.slug && state.brand.selected?.slug) {
        document.location = new URL(
          `${origin}/${state.service.selected.slug}/${state.brand.selected.slug}/${slug}`
        );
      }
      break;
    }
    default:
      break;
  }
};

export const isEmpty = (inputObject) => {
  return Object.keys(inputObject).length === 0;
};
