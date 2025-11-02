import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img
        src="/logoblog.png"  // ✅ Path relative to public folder
        alt="Site Logo"
        className="h-12 w-auto"  // adjust size here
      />
      <span className="text-xl font-bold text-white">MyBlog</span>
    </Link>
  );
}
