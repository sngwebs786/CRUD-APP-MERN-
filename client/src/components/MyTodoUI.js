import React from "react";
import Todo from "./Todo";
import { TextField } from "@mui/material";
import add from "../img/add.png";
import deleteicon from "../img/delete.png";
import cancelIcon from "../img/cancel.png";
import editIcon from "../img/edit.png";
import "../App.css";
import {useEffect} from "react"
const MyTodo = (props) => {
var listOfTodos=[];
  useEffect(() => {
   listOfTodos = props.showTodos();
  }, [])

  return (
    <div className="main-div">
      <h1>My React Todo </h1>
      <center>
        <div className="inputs-and-buttons">
          <TextField
            onChange={(e) => props.setText(e.target.value)}
            value={props.text}
            className="input-field"
            id="standard-basic"
            label="Enter your todo . . ."
            variant="standard"
          />
          <span className="btn-div">
            <button className="add-btn" onClick={props.addItem}>
              <img src={add}></img>
            </button>
            <button className="delete-btn" onClick={props.deleteAll}>
              <img src={deleteicon}></img>
            </button>
          </span>
        </div>
      </center>
      <center>
        <ul className="todoList">
          {props.list.map((items, index) => {
            return (
              <li key={index}>
                {/* {" "} */}
                <div>
                  <span className="todoItems">{items}</span>
                  <span className="todo-btn-div">
                    <button
                      onClick={() => props.deleteItem(index)}
                      className="del-btn"
                    >
                      <img src={cancelIcon}></img>
                    </button>
                    <button
                      onClick={() => props.editItem(index)}
                      className="edit-btn"
                    >
                      <img src={editIcon}></img>
                    </button>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </center>
    </div>
  );
};

export default MyTodo;
