/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from "react";
import * as CONSTANTS from "../../constants";
import FilterSelect from "../FilterSelect";
import { isEmpty } from "../../utils";
import useParseLink from "../../state/parseLink";
import useTerms from "../../state/terms";
import useBrands from "../../state/brands";
import useStyles from "../../state/styles";

export default () => {
  const [parseLinkState, { getParseLink }] = useParseLink();
  const [termsState, { selectTerm, getTerms }] = useTerms();
  const [brandsState, { selectBrand, getBrands }] = useBrands();
  const [styleState, { selectStyle, getStyles }] = useStyles();

  const fetchData = useCallback(async () => {
    const dataURL = document.location.pathname.split("/").slice(1);
    const res = await getParseLink(
      `?service_slug=${dataURL[0]}&brand_slug=${dataURL[1]}&style_slug=${dataURL[2]}`
    );

    if (dataURL[0] && isEmpty(res.service)) {
      document.location = new URL(`${origin}`);
    }
    if (dataURL[1] && isEmpty(res.brand)) {
      document.location = new URL(`${origin}/${termsState.selected?.slug}`);
    }
    if (dataURL[2] && isEmpty(res.style)) {
      document.location = new URL(
        `${origin}/${termsState.selected?.slug}/${brandsState.selected.slug}`
      );
    }

    selectTerm(isEmpty(res.service) ? null : res.service);
    selectBrand(isEmpty(res.brand) ? null : res.brand);
    selectStyle(isEmpty(res.style) ? null : res.style);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const state = {
    service: termsState,
    brand: brandsState,
    style: styleState,
    parseLink: parseLinkState,
  };

  return (
    <div className="navbar">
      <FilterSelect
        state={state}
        name={CONSTANTS.service}
        getData={getTerms}
        selectData={selectTerm}
        placeholder="select term"
      />
      {termsState.selected && (
        <FilterSelect
          state={state}
          name={CONSTANTS.brand}
          getData={getBrands}
          selectData={selectBrand}
          placeholder="select brand"
        />
      )}
      {termsState.selected && brandsState.selected && (
        <FilterSelect
          state={state}
          name={CONSTANTS.style}
          getData={getStyles}
          selectData={selectStyle}
          placeholder="select style"
        />
      )}
    </div>
  );
};
