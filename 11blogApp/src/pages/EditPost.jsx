import React, { useEffect, useState } from 'react'
import { useParams , useNavigate } from 'react-router-dom';
import service from '../appwrite/config';
import { Container } from '../components/container/index.js';
import PostForm from "../components/post-form/PostForm.jsx"

function EditPost() {
  const [post, setPost] = useState();
  const {slug} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    if(slug){
      service.getPost(slug).then((resPost)=>{
        if(resPost){
          setPost(resPost);
        }else{
          navigate("/");
        }
      });
    }
  },[slug,navigate]);

  return (
    <div className="py-6">
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  )

}

export default EditPost