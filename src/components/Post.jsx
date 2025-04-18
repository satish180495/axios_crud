import React, {useEffect, useState} from  'react';
import { getPost, createPost, updatePost, deletePost } from '../API';
import Form from './Form';

export const Post = () => {
    const [data, setData] = useState([]);

    const getPostData = async () => {
        const res = await getPost();
        console.log(res.data);
        setData(res.data);
    }

    const handlePostDelete = async (itemId) => {
        try {
            const res = await deletePost(itemId);
            if(res.status === 200) {
                const newPosts = data.filter((currPost) => {
                    return currPost.id !== itemId;
                })
                setData(newPosts);
            } else {
                console.log("Failed to delete the post:", res.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPostData();
    }, [])

    return(
        <>
            <section className='section-form'>
                <Form data={data} setData={setData} />
            </section>
            <section className='section-post'>
                <ol>
                    {data && data.map((item) => {
                        const {id, body, title} = item;
                        return (
                            <li key={id}>
                                <p>Title: {title}</p>
                                <p>Discription: {body}</p>
                                <button>Edit</button>
                                <button className='btn-delete' onClick={() => handlePostDelete(id)}>Delete</button>
                            </li>
                        )
                    })}
                </ol>
            </section>
        </>
    )
}
