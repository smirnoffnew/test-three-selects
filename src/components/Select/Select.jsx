import React from "react";
import styles from "./Select.module.css";
import Loader from "../Loader";

const Select = ({ options, selected, placeholder, loading, ...otherProps }) => (
  <div className={styles.wrapper}>
    <select disabled={loading} {...otherProps}>
      {!selected && <option>{placeholder}</option>}
      {(options || []).map((option) => (
        <option key={option?.id} value={JSON.stringify(option)}>
          {option?.label}
        </option>
      ))}
    </select>
    {loading && <Loader />}
  </div>
);

export default Select;
