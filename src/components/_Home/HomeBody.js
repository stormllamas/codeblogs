import React from "react";
import blogs from "../../data/blogs";
import Blog from "../Blog";

const HomeBody = () => {
  return (
    <div className="home-body">
      <div className="container s-container">
        {blogs.map((blog) => (
          <Blog key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default HomeBody;
