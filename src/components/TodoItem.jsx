import React from 'react';
import MyModal from "../modals/MyModal";
import { useState} from "react";


/** карточка задания*/

const TodoItem = ({ todo, taskList, setTaskList, toggleComplete, deleteTodo}) => {

  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  //const showDate = new Date();
  //const displayDate = showDate.getFullYear() + "/" + showDate.getMonth() + "/" + showDate.getDate();    ;
  
function saveTodo(id){
  let newTodo = [...taskList].map(item => {
    if (item.id == id) {
      item.title = value
    }
    return item
  })
  setTaskList(newTodo)
  setEdit(null)
}

/** обновить задание*/

const editTodo = (id, title) => {
  setEdit(id)
  setValue(title)
}

const open = () => {
  setModal(true)
  editTodo(todo.id, todo.title)
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
          <p>{todo.date}</p>
          <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
          <button className="btn" onClick={() => open()}>Редактировать</button>
          <MyModal visible={modal} setVisible={setModal}>
            {edit == todo.id ?
              <div>
                <input value={value} onChange={e => setValue(e.target.value)}/>
              </div> 
              :
              <div>{todo.title}</div>
            }
            {edit == todo.id ?
              <div>
                <button onClick={() => saveTodo(todo.id)}>Сохранить</button>
              </div> :
              <div>
                <button>Отменить</button>
              </div>
            }
          </MyModal>
          <button className="btn" onClick={() => deleteTodo(todo.id)}>Удалить</button>
        </div>
      
      </div>
    );
  };

export default TodoItem;