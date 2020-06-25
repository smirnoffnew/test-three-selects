import React, { useEffect, useCallback } from "react";
import { setURL } from "../../utils";
import Select from "../Select";

const FilterSelect = ({ name, getData, selectData, state, placeholder }) => {
  const entityState = state[name];

  const fetchData = useCallback(async () => {
    if (!entityState.all) {
      await getData();
    }
  }, [getData, entityState.all]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectChange = ({ target: { value } }) => {
    selectData(JSON.parse(value));
    setURL({
      name,
      slug: JSON.parse(value).slug,
      state,
    });
  };

  return (
    <>
      <Select
        options={entityState.all}
        name={name}
        onChange={handleSelectChange}
        loading={entityState.requested}
        selected={entityState.selected}
        placeholder={placeholder}
        value={JSON.stringify(entityState.selected)}
      />
      {entityState.failed && entityState.failed}
    </>
  );
};

export default FilterSelect;
