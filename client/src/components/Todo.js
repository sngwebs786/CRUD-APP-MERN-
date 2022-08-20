import React, { useState } from "react";
import MyTodo from "./MyTodoUI";
import axios from "axios";
const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editValue, setEditValue] = useState(null);

  const addItem = async () => {
    if (!text) {
      alert("Please fill the input field");
    } else {
      setList([...list, text]);

      let dataSend = {
        todo: text,
      };

      const res = await fetch(`http://localhost:8000/todo/addTodo`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        // HANDLING ERRORS
        .then((res) => {
          console.log(res.status);
        });

      setText("");
    }
  };

  const deleteItem = async (id) => {
    // BACKEND
    let dataSend = {
      data: list[id],
    };
    const updatedItems = list.filter((element, index) => {
      return index !== id;
    });
    setList(updatedItems);
    const res = await fetch(`http://localhost:8000/todo/deleteTodo`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    // FRONTEND
  };

  const deleteAll = async () => {
    setList([]);
    const res = await fetch(`http://localhost:8000/todo/deleteAllTodos`, {
      method: "POST",
      //  body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
    });
  };

  const editItem = async (id) => {
    let newValue = prompt("Enter new value", list[id]);
    let dataSend = {
      data: list[id],
      newValue: newValue,
    };
    list[id] = newValue;
    setList([...list]);
    const res = await fetch(`http://localhost:8000/todo/editTodo`, {
      method: "POST",
      body: JSON.stringify(dataSend),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
    });
  };

  const showTodos = async () => {
    var response;
    // console.log("Show todo working");
    const res = await fetch(`http://localhost:8000/todo/showTodos`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    response = await res.json();
    response = response.data;
    // console.log(response);
    response.map((item, index) => {
      setList((list) => [...list, item.todoItem]);
    });
  };

  return (
    <div>
      <MyTodo
        deleteAll={deleteAll}
        addItem={addItem}
        deleteItem={deleteItem}
        editItem={editItem}
        showTodos={showTodos}
        text={text}
        setText={setText}
        list={list}
        setList={setList}
      />
    </div>
  );
};

export default Todo;
