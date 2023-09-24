import React from 'react'
import BlogColumn from './BlogColumn';
import Tags from './Tags';

const BlogDetails = () => {
  const storageItems = JSON.parse(localStorage.getItem("BlogDetails"))
  return (
    <div className="blog-details">
      <div className="details">
        {
          <div className="mb-8 space-y-12">
            <div>
              <img
                className="w-[100%] h-[250px]"
                src={storageItems.img}
                alt=""
              />
              <p className="font-mono text-xl hover:text-green-800">
                {storageItems.title}
              </p>
              <p className="space-x-4 my-4 text-zinc-500">
                <span className="text-sm hover:text-orange-400 text-green-700">
                  {storageItems.postbrief}
                </span>
                :
                <span className="text-sm hover:text-orange-400">
                  {storageItems.date}
                </span>{" "}
                / 2<span className="text-sm hover:text-orange-400"></span>{" "}
              </p>
              <p>{storageItems.post}</p>
            </div>
            <Tags/>
          </div>
        }
        <BlogColumn />
      </div>
    </div>
  );
}

export default BlogDetails