import React from "react";
import classes from "./PlacementFaculty.module.css";

const PlacementFaculty = () => {
  return (
    <div className={classes.container}>
      <h2>Placement Co-ordinator</h2>
      <div className={classes.card}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX31Csquqtfs6hYGCOYrV9DI_tfdgdb2FFBQ&usqp=CAU"
          alt="img"
        />
        <div className={classes.names}>
          <h4>Mr.J.R.Nishanth</h4>
          <p>Assistant Professor</p>
          <p>B.E,M.E (Ph.D)</p>
        </div>
      </div>
    </div>
  );
};

export default PlacementFaculty;
