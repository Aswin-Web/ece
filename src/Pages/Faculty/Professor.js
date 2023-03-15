import React from "react";
import classes from "./Professor.module.css";

const Professor = () => {
  return (
    <div className={classes.container}>
      <h2>Professor</h2>
      <div className={classes.card}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX31Csquqtfs6hYGCOYrV9DI_tfdgdb2FFBQ&usqp=CAU"
          alt="img"
        />
        <div className={classes.names}>
          <h4>Dr.M.Meenakumari</h4>
          <p>M.E (Ph.D)</p>
        </div>
      </div>
    </div>
  );
};

export default Professor;
