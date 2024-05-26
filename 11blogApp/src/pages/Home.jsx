import React, { useEffect, useState } from 'react'
import service from '../appwrite/config.js'
import { Container, PostCard } from '../components/container/index.js';
import { useSelector } from 'react-redux';


function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state)=>state.auth.userData);

  useEffect(() => {
    service.getPosts([]).then((resPosts) => {
      if (resPosts) {
        setPosts(resPosts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            <h1>
              {userData ? "No one post yet. Be the first to post": "Log in to see posts"}
            </h1>
            
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-full md:w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home