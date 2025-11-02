import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
  const imageUrl = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title || "Post image"}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/600x400?text=Image+Not+Found";
            }}
          />

          {/* Gradient overlay effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {title?.length > 60 ? title.substring(0, 60) + "..." : title}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Click to read more →
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
