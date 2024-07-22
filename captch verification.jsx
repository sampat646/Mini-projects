import React, { useState, useCallback } from "react";
import { TiArrowRepeat } from "react-icons/ti";
import styled from "styled-components";

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const RefreshButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #3498db;
  margin-left: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

function App() {
  const [check, setCheck] = useState("");
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(1000 + Math.random() * 9000)
  );

  const generateNewNumber = useCallback(() => {
    setRandomNumber(Math.floor(1000 + Math.random() * 9000));
  }, []);

  const checkCaptcha = useCallback(() => {
    if (parseInt(check) === randomNumber) {
      console.log("correct");
      alert("CAPTCHA is correct");
    } else {
      console.log("invalid");
      alert("CAPTCHA is invalid");
    }
    generateNewNumber();
    setCheck("");
  }, [check, randomNumber]);

  return (
    <Container>
      <Title>CAPTCHA Verification</Title>
      <InputGroup>
        <Input type="text" value={randomNumber} readOnly />
        <RefreshButton onClick={generateNewNumber}>
          <TiArrowRepeat />
        </RefreshButton>
      </InputGroup>
      <InputGroup>
        <Input
          type="number"
          value={check}
          onChange={(e) => setCheck(e.target.value)}
          placeholder="Enter the number you see above"
        />
      </InputGroup>
      <SubmitButton onClick={checkCaptcha}>Verify</SubmitButton>
    </Container>
  );
}

export default App;
