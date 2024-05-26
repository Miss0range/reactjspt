import React, { useEffect, useState } from 'react'
import service from '../appwrite/config.js'
import { Container ,  PostCard } from '../components/container/index.js';

function AllPosts() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    service.getPosts([]).then((resPosts)=>{
      if(resPosts){
        setPosts(resPosts.documents);
      }
    });
  },[]);

  //No post in posts. 
  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            <h1>No post available at this time.</h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post)=>(
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts