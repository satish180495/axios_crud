import React from 'react';
import './App.css';
import { CustomPost } from './components/CustomHook/CustomPost';
import { Post } from './components/Post';
import Form from './components/Form';

const App = () => {
  return (
    <section className='main-section'>
      <Post />
    </section>
  )
}

export default App;