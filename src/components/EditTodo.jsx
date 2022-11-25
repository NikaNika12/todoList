import React, {useEffect, useState} from 'react';
import { db } from "../firebase_config";
import {
    collection,
    updateDoc,
    doc,
    addDoc,
  } from 'firebase/firestore';



const EditTask = ({todo, updateTask, taskObj}) => {
    const [task, setTask] = useState({title: '', description: ''})
    const [date, setDate] = useState("")
    const [imageUpload, setImageUpload] = useState(null);

    


    // useEffect(() => {
    //     setTask({title: taskObj.Title, description: taskObj.Description})
    // }, [])

    const editTodo = (event) => {
        event.preventDefault()
        let taskObj = {}
        taskObj["Title"] = task.title
        taskObj["Description"] = task.description
    //     // updateDoc(doc(db, 'todo', todo.id), {
    //     //     title: task.title,
    //     //     description: task.description,
    //     //   });
    //     // updateTask(tempObj)
    }

    // const editTodo = (event) => {
    //     event.preventDefault()
    //     let tempObj = {}
    //     tempObj["Title"] = task.title
    //     tempObj["Description"] = task.description
    //     updateDoc(doc(db, 'todo', todo.id), {
    //         title: task.title,
    //         description: task.description,
    //       });
    //     updateTask(tempObj)
    // }
    
    



    return (
        <form className='form'>
            <input
                value={task.title}
                onChange={e => setTask({...task, title: e.target.value})}
                type="text"
                placeholder="Название задания"
            />
            <textarea rows={5}
                value={task.description}
                onChange={e => setTask({...task, description: e.target.value})}
                type="text"
                placeholder="Описание задания"
            />
            <input
                value={date}
                onChange={e => setDate(e.target.value)}
                type="date"
                placeholder="YYYY-MM-DD"
            />
            <input
                type="file"
                onChange={(event) => {setImageUpload(event.target.files[0])}}
            />
            <button onClick={editTodo}>Изменить</button> 
        </form>
    );
};

export default EditTask;