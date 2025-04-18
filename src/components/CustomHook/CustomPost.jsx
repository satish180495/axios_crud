import React, {useEffect, useState} from  'react';
import { useFetch } from './useFetch';

export const CustomPost = () => {
    const { isLoading, serverError, apiData } = useFetch("http://jsonplaceholder.typicode.com/posts");

    const handleDelete = async (itemId) => {
        const filterData = await deletePost(itemId);
        setData(filterData);
    }

    return(
        <section className='section-post'>
            {isLoading && <span>Loading.....</span>}
            {!isLoading && serverError ? (
                <span>Error in fetching data ...</span>
            ) : (
                <ol>
                    {apiData && apiData.map((item) => {
                        const {id, body, title} = item;
                        return (
                            <li key={id}>
                                <p>Title: {title}</p>
                                <p>Discription: {body}</p>
                                <button>Edit</button>
                                <button className='btn-delete' onClick={(id) => handleDelete(id)}>Delete</button>
                            </li>
                        )
                    })}
                </ol>
            )}
        </section>
    )
}
