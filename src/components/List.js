import React from "react";
import styled from "styled-components";
const ListItemDiv = styled.div`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr auto;
  place-items: center;
  box-sizing: border-box;
`;

const Para = styled.p`
  text-indent: 20px;
  font-weight: 700;
  font-size: 16px;
  justify-self: start;
`;

const Hr = styled.hr`
  width: 95%;
  grid-column: 1/3;
  justify-self: center;
  margin: 0;
  box-sizing: border-box;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  margin-right: 10px;
  width: 50px;
  height: 2rem;
  text-align: center;
  border-radius: 6px;
`;

function List(props) {
  return (
    <ListItemDiv>
      <Para>{props.content.value}</Para>
      <Button onClick={() => props.deleteList(props.content.id)}>刪除</Button>
      <Hr />
    </ListItemDiv>
  );
}

export default List;
