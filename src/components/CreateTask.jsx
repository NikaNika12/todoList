import React, {useState} from 'react';
import { db } from "../firebase_config";
import {collection, addDoc} from 'firebase/firestore';
import { getStorage, ref, uploadBytes} from "firebase/storage";
import { v4 } from "uuid";



const CreateTask = ({create}) => {
    const [task, setTask] = useState({title: '', description: ''})
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrl, setImageUrl] = useState([]);
    const [date, setDate] = useState("")
    
    const storage = getStorage();
    const addTask = (event) => {
        event.preventDefault()
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {alert("Файл загружен")});
        let taskObj = {...task, id: Date.now()}
        create(taskObj)
        addDoc(collection(db, 'todo'), {
            title: task.title,
            description: task.description,
            completed: false,
            date: date
          });
        setTask({title: '', description: ''})
        setDate("")
    }


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
            <button onClick={addTask}>Создать</button>
        </form>
    );
};

export default CreateTask;