import axios from 'axios';

const api = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com',
});


// get method
export const getPost = () => {
    return api.get(`/posts`)
}

// post method
export const createPost = (postPayload) => {
    return api.post(`/posts`, postPayload)
}

export const updatePost = (id) => {
    return api.put(`/posts/${id}`)
}

// delete method
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}