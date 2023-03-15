import React from "react";
import classes from "./AssistantProfessor.module.css";

const AssistantProfessor = () => {
  return (
    <div className={classes.container}>
      <div className={classes.assistantProfessor}>
        <h2>Assistant Professors</h2>
        <div className={classes.apCards}>
          <div className={classes.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX31Csquqtfs6hYGCOYrV9DI_tfdgdb2FFBQ&usqp=CAU"
              alt="img"
            />
            <div className={classes.names}>
              <h4>Mr.V.R.Mani</h4>
              <p>B.E,M.E (Ph.D)</p>
            </div>
          </div>
          <div className={classes.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX31Csquqtfs6hYGCOYrV9DI_tfdgdb2FFBQ&usqp=CAU"
              alt="img"
            />
            <div className={classes.names}>
              <h4>Mr.A.Periyannan</h4>
              <p>B.E,M.E (Ph.D)</p>
            </div>
          </div>
          <div className={classes.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RArcVWmO0POIa8O_zlfpFNkVBadz3hSFag&usqp=CAU"
              alt="img"
            />
            <div className={classes.names}>
              <h4>Mr.P.Dhilipkumar</h4>
              <p>B.E,M.E (Ph.D)</p>
            </div>
          </div>
          <div className={classes.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX31Csquqtfs6hYGCOYrV9DI_tfdgdb2FFBQ&usqp=CAU"
              alt="img"
            />
            <div className={classes.names}>
              <h4>Mrs.S.Pavithra</h4>
              <p>B.E,M.E (Ph.D)</p>
            </div>
          </div>
          <div className={classes.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX31Csquqtfs6hYGCOYrV9DI_tfdgdb2FFBQ&usqp=CAU"
              alt="img"
            />
            <div className={classes.names}>
              <h4>Mrs.R.Tamilselvi</h4>
              <p>B.E,M.E (Ph.D)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantProfessor;
