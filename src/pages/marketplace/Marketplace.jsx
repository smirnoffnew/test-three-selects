import React from "react";

import styles from "./Marketplace.module.css";
import Layout from "../../components/Layout";

export default () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        our page: {document.location.pathname}
      </div>
    </Layout>
  );
};
