import React from "react";
import { BrandsProvider } from "../state/brands";
import { TermsProvider } from "../state/terms";
import { StylesProvider } from "./styles";
import { ParseLinkProvider } from "./parseLink";

const StateContextProvider = ({ children }) => {
  return (
    <BrandsProvider>
      <TermsProvider>
        <StylesProvider>
          <ParseLinkProvider>{children}</ParseLinkProvider>
        </StylesProvider>
      </TermsProvider>
    </BrandsProvider>
  );
};

export default StateContextProvider;
