import React, { useState } from "react";
import styled from "styled-components";

const AddFormDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  width: 5rem;
  height: 2rem;
  text-align: center;
  border-radius: 6px;
  box-sizing: border-box;
`;

const Input = styled.input`
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 500px;
  height: 2rem;
  justify-self: end;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #a014f7;
    box-shadow: 1px 2px 1px #a014f7;
  }
`;

const AddForm = (props) => {
  const [enteredContent, setEnteredContent] = useState("");
  const changeHandler = (event) => {
    setEnteredContent(event.target.value);
  };

  const clickHandler = () => {
    const enteredDate = {
      content: enteredContent,
    };
    props.onSaveContent(enteredDate);
    setEnteredContent("");
  };
  return (
    <AddFormDiv>
      <Input type="text" value={enteredContent} onChange={changeHandler} />
      <Button onClick={clickHandler}>新增</Button>
    </AddFormDiv>
  );
};

export default AddForm;
