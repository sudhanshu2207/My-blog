import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <section className="min-h-screen bg-gray-50 py-10">
      <Container>
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Featured Image */}
          <div className="relative">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="w-full max-h-[450px] object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/800x400?text=No+Image";
              }}
            />

            {isAuthor && (
              <div className="absolute top-4 right-4 flex gap-3">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgColor="bg-green-600 hover:bg-green-700"
                    className="px-4 py-2 text-white font-medium rounded-lg shadow-md"
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-600 hover:bg-red-700"
                  className="px-4 py-2 text-white font-medium rounded-lg shadow-md"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )}
          </div>

          {/* Post Content */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {parse(post.content)}
            </div>
          </div>
        </article>
      </Container>
    </section>
  ) : null;
}
