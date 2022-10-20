import React, { useState } from "react";
import AddConfigParameter from "../component/AddConfigParameter";
import styles from "../styles/Add.module.css";

const Add = () => {
  return (
    <div className={styles.container}>
      <AddConfigParameter />
    </div>
  );
};

export default Add;
