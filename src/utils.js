import { service, brand, style } from './constants'

export const setURL = ({ name, state, slug }) => {
  switch (name) {
    case service: {
      if (state.brand.selectedBrand?.slug && state.style.selectedStyle?.slug) {
        document.location = new URL(`${origin}/${slug}/${state.brand.selectedBrand?.slug}/${state.style.selectedStyle?.slug}`);
      }
      else if (state.brand.selectedBrand?.slug) {
        document.location = new URL(`${origin}/${slug}/${state.brand.selectedBrand?.slug}`);
      }
      else {
        document.location = new URL(`${origin}/${slug}`);
      }
      break;
    }
    case brand: {
      if (state.style.selectedStyle?.slug) {
        document.location = new URL(`${origin}/${state.service.selectedTerm?.slug}/${slug}/${state.style.selectedStyle?.slug}`);
      }
      else {
        document.location = new URL(`${origin}/${state.service.selectedTerm?.slug}/${slug}`);
      }
      break;
    }
    case style: {
      if (state.service.selectedTerm?.slug && state.brand.selectedBrand?.slug) {
        document.location = new URL(`${origin}/${state.service.selectedTerm.slug}/${state.brand.selectedBrand.slug}/${slug}`);
      }
      break;
    }
    default: break;
  }
}

export const isEmpty = inputObject => {
  return Object.keys(inputObject).length === 0;
};
