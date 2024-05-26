import React from 'react'
import { Container } from '../components/container/index.js';
import PostForm from "../components/post-form/PostForm.jsx"

function AddPost() {
  return (
    <div className="py-6">
      <Container>
        <PostForm/>
      </Container>
    </div>
  )
}

export default AddPost