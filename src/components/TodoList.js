import React from "react";
import MyModal from "../modals/MyModal";
import { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import { db } from "../firebase_config";
import TodoItem from './TodoItem';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

     // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todo'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTaskList(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todo', todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todo', id));
  };



  const createTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    setTaskList(tempList)
    setModal(false)
  }


    
  const updateListArray = (obj, index) => {
    let tempList = taskList
    tempList[index] = obj
    setTaskList(tempList)
  }

    return (
        <div>
            <div className="header">
                <h1>ToDo лист</h1>
                <button className="header_btn" onClick={() => setModal(true)}>
                Создать задание
                </button>
                <MyModal visible={modal} setVisible={setModal}>
                    <CreateTask create={createTask}/>
                </MyModal>
            </div>
            <div className="task_container">
                {taskList.map((todo) => 
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        updateListArray={updateListArray}
                    />
                )}
            </div>
            {taskList.length < 1 ? null : (
            <p className="task_result">{`Всего осталось выполнить заданий: ${taskList.length}`}</p>
            )}
        </div>
    )
}

export default TodoList;