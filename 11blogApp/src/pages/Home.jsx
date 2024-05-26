import React, { useEffect, useState } from 'react'
import service from '../appwrite/config.js'
import { Container, PostCard } from '../components/container/index.js';

function Home() {

  const [posts, setPosts] = useState([]);

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
            <h1>Login to read posts.</h1>
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
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home