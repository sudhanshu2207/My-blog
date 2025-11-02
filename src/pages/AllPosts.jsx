import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <section className="min-h-screen py-4">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-3 rounded-lg">✩░▒▓▆▅▃▂▁𝐀𝐥𝐥 𝐏𝐨𝐬𝐭𝐬▁▂▃▅▆▓▒░✩</h1>
          <p className="text-gray-800 shadow-lg text-lg">
            Explore all the latest posts shared by our community.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-20">
            No posts available yet. Check back soon!
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default AllPosts;
