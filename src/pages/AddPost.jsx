import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <section className="min-h-screen bg-gray-800 rounded-lg flex items-center justify-center py-12 px-5">
      <Container>
        <div className="bg-gray-300 shadow-xl rounded-2xl p-8 md:p-12 border border-gray-800">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Create New Post
          </h1>
          <p className="text-gray-600 text-center mb-10">
            Share your thoughts, ideas, or updates with your readers.
          </p>
          <PostForm />
        </div>
      </Container>
    </section>
  );
}

export default AddPost;
