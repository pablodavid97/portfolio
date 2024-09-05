import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';
import blogData from '../data/blog-data.json';

const BlogList = () => {
    return (
        <>
            <h3>Latest Blog Posts</h3>
            <div className='blog-list'>
                {blogData.map((post) => (
                    <div className='blog-card' key={post.id}>
                        <div className='blog-card-content'>
                            <h2>{post.title}</h2>
                            <p>{post.excerpt}</p>
                            <Link
                                to={`/blog/${post.id}`}
                                className='read-more-link'
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BlogList;
