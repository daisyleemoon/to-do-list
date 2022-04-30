import React, { useState } from "react";
import HomePage from "./components/HomePage";
import ListPage from "./components/ListPage";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  width: 100px;
  height: 30px;
  border-radius: 6px;
  margin-top: 20px;
`;

const App = () => {
  const [click, setClick] = useState(true);
  const [buttonValue, setBtnValue] = useState("點此開始");
  const clickHandler = () => {
    if (click) {
      setClick(!click);
      setBtnValue("返回首頁");
    } else {
      setClick(!click);
      setBtnValue("點此開始");
    }
  };
  return (
    <Container>
      {click ? <HomePage /> : <ListPage />}
      <Button onClick={clickHandler}>{buttonValue}</Button>
    </Container>
  );
};

export default App;
