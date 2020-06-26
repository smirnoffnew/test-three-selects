import React, { useEffect, useCallback, useState } from "react";
import * as CONSTANTS from "../../constants";
import FilterSelect from "../FilterSelect";
import { isEmpty, getTerms, getBrands, getStyles, getParseLink, eventedPushState } from "../../utils";

export default () => {
  const [term, setTerm] = useState('');
  const [brand, setBrand] = useState('');
  const [style, setStyle] = useState('');
  const [urlState, setUrlState] = useState('');

  const fetchData = useCallback(async () => {
    const dataURL = document.location.pathname.split("/").slice(1);
    const res = await getParseLink(
      `?service_slug=${dataURL[0]?.slice(2)}&brand_slug=${dataURL[1]?.slice(2)}&style_slug=${dataURL[2]?.slice(3)}`
    );
    eventedPushState(null, null,
      `${origin}/s-${res?.service?.slug || ''}/b-${res?.brand?.slug || ''}/st-${res?.style?.slug || ''}`
    );
    setTerm(isEmpty(res.service) ? '' : res.service);
    setBrand(isEmpty(res.brand) ? '' : res.brand);
    setStyle(isEmpty(res.style) ? '' : res.style);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, urlState]);

  useEffect(() => {
    document.addEventListener(
      "onpushstate",
      ({ detail }) => {
        setUrlState(detail.url)
      },
      false
    );
    return () => document.removeEventListener("onpushstate")
  }, [])

  return (
    <div className="navbar">
      <FilterSelect
        name={CONSTANTS.service}
        getData={getTerms}
        selectData={term}
        placeholder="select term"
      />
      <FilterSelect
        name={CONSTANTS.brand}
        getData={getBrands}
        selectData={brand}
        placeholder="select brand"
      />
      <FilterSelect
        name={CONSTANTS.style}
        getData={getStyles}
        selectData={style}
        placeholder="select style"
      />
    </div>
  );
};
