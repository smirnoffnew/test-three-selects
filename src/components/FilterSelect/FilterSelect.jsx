/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback, useState } from "react";
import { service, brand, style } from "../../constants";
import Select from "../Select";
import { eventedPushState } from "../../utils";

const FilterSelect = ({ name, getData, selectData, placeholder }) => {
  const [all, setAll] = useState()
  const [loading, setLoading] = useState()

  const fetchData = useCallback(async () => {
    setLoading(true)
    const data = await getData();
    setLoading(false)
    setAll(data)
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSelectChange = ({ target: { value } }) => {
    const url = document.location.pathname.split("/").slice(1);
    switch (name) {
      case service: {
        if (url[0]?.includes('s-')) {
          const resultArr = url.map((x) => x.startsWith('s-') ? `s-${JSON.parse(value).slug}` : x);
          eventedPushState(null, null, `${origin}/${resultArr.join('/')}`)
        }
        else {
          eventedPushState(null, null, `${origin}/s-${JSON.parse(value).slug}`)
        }
        break;
      }
      case brand: {
        if (url[1]?.includes('b-')) {
          const resultArr = url.map((x) => {
            return x.startsWith('b-') ? `b-${JSON.parse(value).slug}` : x
          });
          eventedPushState(null, null, `${origin}/${resultArr.join('/')}`);
        }
        else {
          eventedPushState(null, null, 
            `${origin}/${url[0]}/b-${JSON.parse(value).slug}`
          );
        }
        break;
      }
      case style: {
        if (url[2]?.includes('st-')) {
          const resultArr = url.map((x) => {
            return x.startsWith('st-') ? `st-${JSON.parse(value).slug}` : x
          });
          eventedPushState(null, null, `${origin}/${resultArr.join('/')}`);
        }
        else {
          eventedPushState(null, null, 
            `${origin}/${url[0]}/${url[1]}/st-${JSON.parse(value).slug}`
          );
        }
        break;
      }
    }
  };

  return <Select
    options={all}
    name={name}
    onChange={handleSelectChange}
    loading={loading}
    selected={selectData}
    placeholder={placeholder}
    value={JSON.stringify(selectData)}
  />

};

export default FilterSelect;
