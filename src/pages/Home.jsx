import React, { useEffect, useState } from 'react';
import authService from '../appwrite/auth';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';
import { Query } from 'appwrite';

function Home() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserAndPosts = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);

        if (currentUser) {
          const response = await appwriteService.getPosts([
            Query.equal("userId", currentUser.$id),
            Query.equal("status", "active")
          ]);

          setPosts(response.documents);
        }
      } catch (error) {
        console.error("Error fetching user or posts:", error);
      }
    };

    fetchUserAndPosts();
  }, []);

  if (!user) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className='w-full'>
      <Container>
        {/* User info */}
        <div className="mb-5 p-2 shadow-lg rounded-lg text-center">
          <h2 className="text-xl font-bold">Username: {user.name}</h2>
          <p className="text-black font-bold">Email: {user.email}</p>
        </div>
        <div className="mb-2 text-center text-xl"> ▌║█║▌║▌│║▌║▌█║  𝐲𝐨𝐮𝐫 𝐛𝐥𝐨𝐠 ║▌║▌│║║▌█║▌║█</div>

        {/* Posts */}
        <div className='flex flex-wrap py-2'>
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center w-full mt-6">No posts yet</p>
          ) : (
            posts.map((post) => (
              <div key={post.$id} className='p-2 w-1/4'>
                <PostCard {...post} />
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
}

export default Home;
