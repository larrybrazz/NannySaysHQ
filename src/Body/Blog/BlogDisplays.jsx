import React from 'react';
import CommentIcon from "@mui/icons-material/Comment";

const BlogDisplays = ({ item }) => {
   
  return (
    <div>
      <div className="">
        <img className="w-full h-96" src={item.img} alt="" />
        <p className="font-mono text-xl hover:text-green-800">{item.title}</p>
        <p className="space-x-4 my-4 text-zinc-500">
          <span className="text-sm hover:text-orange-400 text-green-700">
            {item.postbrief}
          </span>
          :<span className="text-sm hover:text-orange-400">{item.date}</span> /
          <span className="text-sm hover:text-orange-400">
            <CommentIcon />2
          </span>{" "}
        </p>
        <p>{ item.post.substring(0, 200)}</p>
      </div>
    </div>
  );
}

export default BlogDisplays