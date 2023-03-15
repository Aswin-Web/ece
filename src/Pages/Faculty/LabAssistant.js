import React from "react";
import classes from "./LabAssistant.module.css";

const LabAssistant = () => {
  return (
    <div className={classes.container}>
      <h2>Lab Assistant</h2>
      <div className={classes.lab}>
        <div className={classes.card}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX31Csquqtfs6hYGCOYrV9DI_tfdgdb2FFBQ&usqp=CAU"
            alt="img"
          />
          <div className={classes.names}>
            <h4>John</h4>
            <p>B.E (Lab Assistant)</p>
          </div>
        </div>

        <div className={classes.card}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX31Csquqtfs6hYGCOYrV9DI_tfdgdb2FFBQ&usqp=CAU"
            alt="img"
          />
          <div className={classes.names}>
            <h4>Joel Paulraj</h4>
            <p>B.E (Lab Assistant)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabAssistant;
