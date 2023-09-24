import React, { useState } from 'react';
import "./blog.css"
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import BlogColumn from './BlogColumn';
import RelatedPosts from './RelatedPosts';
import Comment from './Comment';
import BlogDisplays from './BlogDisplays';
import { blogData } from './blogData';
const Blog = () => {
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate();


   const handlereadMore = (item) => {
     localStorage.setItem("BlogDetails", JSON.stringify(item));
     navigate("/blogdetails")
     setReadMore((prev) => !prev);
     console.log(readMore)
    };
  return (
    <div className="blog-container">
      <div className="blog">
        <div>
          {blogData.map((item, i) => (
            <div key={i}>
              <BlogDisplays readMore={readMore} item={item} />
              <button onClick={()=>handlereadMore(item)} className="btn mb-8">
                <Link to="/blogdetails">Read More</Link>
              </button>
            </div>
          ))}
          <RelatedPosts />
          <Comment />
        </div>
        <div>
          <BlogColumn />
        </div>
      </div>
    </div>
  );
}

export default Blog