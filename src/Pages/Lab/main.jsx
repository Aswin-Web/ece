import React from 'react'
import Container from "react-bootstrap/Container";
import CardComponent from './CardComponent';
import './main.css'


const main = () => {
  return (
    <div>
      <Container>
        <div>
          <p>
            The mission of our laboratories is to provide our undergraduate
            electrical and computer engineering students with real world
            evaluation, design, and test experience. This laboratory experience
            supports and augments the theoretical or classroom instruction that
            our students receive.All experiments in the laboratory will be
            performed at a test bench which has several basic electronic
            instruments permanently installed. They include: a dc power supply,
            a waveform generator, a digital voltmeter (DVM), and a digital
            oscilloscope.
          </p>
        </div>
        <div className="parent-card">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </Container>
    </div>
  );
}

export default main
