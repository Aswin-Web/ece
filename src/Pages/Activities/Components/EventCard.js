import React from "react";
import classes from "./EventCard.module.css";

import Card from "react-bootstrap/Card";
import CustomizedDialogs from "./UI/Dialog";



const DUMMY_DATA = [
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/robert-pattinson-as-batman-bruce-wayne-in-the-batman-1645186686.jpeg?crop=0.505xw:0.757xh;0.385xw,0.0144xh&resize=1200:*",
    title: "Batman",
    text: "The dark knight rises",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/superman-statue-life-size-fictional-character-batman-v-dawn-justice-promotion-booth-organized-hot-toys-68521577.jpg",
    title: "Batman",
    text: "The dark knight rises",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/robert-pattinson-as-batman-bruce-wayne-in-the-batman-1645186686.jpeg?crop=0.505xw:0.757xh;0.385xw,0.0144xh&resize=1200:*",
    title: "Batman",
    text: "The dark knight rises",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/robert-pattinson-as-batman-bruce-wayne-in-the-batman-1645186686.jpeg?crop=0.505xw:0.757xh;0.385xw,0.0144xh&resize=1200:*",
    title: "Batman",
    text: "The dark knight rises",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/robert-pattinson-as-batman-bruce-wayne-in-the-batman-1645186686.jpeg?crop=0.505xw:0.757xh;0.385xw,0.0144xh&resize=1200:*",
    title: "Batman",
    text: "The dark knight rises",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/robert-pattinson-as-batman-bruce-wayne-in-the-batman-1645186686.jpeg?crop=0.505xw:0.757xh;0.385xw,0.0144xh&resize=1200:*",
    title: "Batman",
    text: "The dark knight risessdvvvvvvvvvvvvvvvvvvvvvvvvvfaewgEGERGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGAEGSAGREERHBFASERGSFDGVBDFG",
  },
];
const EventCard = () => {

  return (
    <div className={classes.container}>
      <div className={classes.cards}>
        <ul>
          {DUMMY_DATA.map((card, index) => (
            <li key={index}>
              <Card
                style={{
                  width: "23.688em",
                  height: "100%",
                  border: "0",
                  boxShadow: "5px 2px 5px #181823",
                }}
                
              >
                <Card.Img
                  variant="top"
                  style={{ height: "22.938em" }}
                  src={card.image}
                />
                <Card.Body
                  style={{ backgroundColor: "#D9D9D9", borderRadius: "15px" }}
                >
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text style={{ padding: "2em" }}>{card.text}</Card.Text>
                  <CustomizedDialogs image={card.image} title={card.title} text={card.text}/>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    
    </div>
  );
};

export default EventCard;

