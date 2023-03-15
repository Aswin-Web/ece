import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://i.pinimg.com/originals/bc/20/71/bc2071faf11b06cef1018a1cca092caa.jpg"
      />
      <Card.Body >
        <Card.Title className="card-text">Card Title</Card.Title>
        <Card.Text className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
