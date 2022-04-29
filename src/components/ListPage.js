import React, { useState } from "react";
import AddForm from "./AddForm";
import List from "./List";
import styled from "styled-components";

const ListPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  min-height: 300px;
  margin-top: 50px;
  background-color: #a892ee;
  border-radius: 12px;
  padding-bottom: 30px;
`;

const ListPage = () => {
  const [todos, setTodo] = useState([]);
  const onSaveContentHandler = (enteredContent) => {
    const contentData = {
      ...enteredContent,
      id: Math.random().toString(),
    };
    console.log(contentData);
    setTodo([{ value: contentData.content, id: contentData.id }, ...todos]);
  };

  const deleteListHandler = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };
  //   const onAddListHandler = (contentData) => {
  //     setTodo([contentData, ...content]);
  //   };
  return (
    <ListPageDiv>
      <AddForm onSaveContent={onSaveContentHandler} />
      {todos.map((e) => (
        <List key={e.id} content={e} deleteList={deleteListHandler} />
      ))}
    </ListPageDiv>
  );
};

export default ListPage;
