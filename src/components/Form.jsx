import React, { useState } from 'react';
import { createPost } from '../API';


export default function Form({data, setData}) {
    const [addData, setAddData] = useState({
        title: "",
        body: ""
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }
    
    const addPostData = async () => {
        const res = await createPost(addData)
        if(res.status === 201) {
            setData([...data, res.data]);
            setAddData({title: "", body: ""});
        }
    }
        
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addPostData()
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input type="text" autoComplete='off' id='title' name='title' placeholder='Add Title' value={addData.title} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="body"></label>
                <input type="text" autoComplete='off' id='Body' name='body' placeholder='Add Post' value={addData.body} onChange={handleInputChange} />
            </div>
            <button type='submit'>Add Post</button>
        </form>
    )
}
