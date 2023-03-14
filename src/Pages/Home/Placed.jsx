import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Avatar, Box } from '@mui/material';
const Placed = (props) => {
  return (
    <Container>
      <div className="placed-students">
        <h3>{props.title}</h3>
        <Row>
          <Col xs={4} md={3} lg={1.5}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Avatar
                alt="Cindy Baker"
                src="data:image/jpeg;base64,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"
                sx={{
                  width: 100,
                  height: 100,
                  margin: "10px auto",
                  display: "block",
                }}
              />
              <h4>Name</h4>
              <h6>Company Name</h6>
            </Box>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Placed