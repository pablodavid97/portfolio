import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css'; 
import blogData from '../data/blog-data.json';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find(p => p.id === parseInt(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <main className="blog-post-container">
      <article className="blog-post">
        <header className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
        </header>
        <section className="blog-post-content">
          <p>{post.content}</p>
        </section>
      </article>
    </main>
  );
};

export default BlogPost;
