// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog Post #{id}</h2>
      <p>This content is for blog post with ID: {id}</p>
    </div>
  );
}
