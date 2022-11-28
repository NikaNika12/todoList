import React from 'react';
import MyModal from "../modals/MyModal";
import { useState} from "react";
import EditTodo from './EditTodo';

/** карточка задания*/

const TodoItem = ({ todo, toggleComplete, deleteTodo, updateListArray, taskObj, index}) => {

  const [modal, setModal] = useState(false);

  //const showDate = new Date();
  //const displayDate = showDate.getFullYear() + "/" + showDate.getMonth() + "/" + showDate.getDate();    ;
  
/** обновить задание*/
  const updateTask = (obj) => {
    updateListArray(obj, index)
}


    return (
      <div className="item_wrapper">
        <div className={todo.completed ? "liCompleted" : "li"}>
        <div className="item_top"></div>
        <div className="task_holder">
          <strong onClick={() => toggleComplete(todo)}>{todo.title}</strong>
          <p>{todo.description}</p>
        </div>
        </div>
        <div className="task_btn">
          <p className={todo.completed ? "liCompleted" : "li"}>{todo.date}</p>
          <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
          <button className="btn" onClick={() => setModal(true)}>Редактировать</button>
          <MyModal visible={modal} setVisible={setModal}>
            <EditTodo updateTask={updateTask} taskObj={taskObj}/>
          </MyModal>
          <button className="btn" onClick={() => deleteTodo(todo.id)}>Удалить</button>
        </div>
      
      </div>
    );
  };

export default TodoItem;