import React, { useEffect } from "react";
import * as CONSTANTS from "../../constants";

import Navbar from "../Navbar";
import useTerms from "../../state/terms";
import useBrands from "../../state/brands";
import useStyles from "../../state/styles";

const Layout = ({ children }) => {
  const [termsState] = useTerms();
  const [brandsState] = useBrands();
  const [styleState] = useStyles();

  const contextState = [
    { name: CONSTANTS.service, data: termsState },
    { name: CONSTANTS.brand, data: brandsState },
    { name: CONSTANTS.style, data: styleState },
  ];

  useEffect(() => {
    contextState.forEach((state) => {
      localStorage.setItem(state.name, JSON.stringify(state.data));
    });
  }, [contextState]);

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
