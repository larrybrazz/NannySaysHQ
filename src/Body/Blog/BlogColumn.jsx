import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import Calendar from "react-calendar";


const BlogColumn = () => {

    const comments = [
      {
        name: "Larry brazz",
        comment: "  on Nannys in UK and Europes , which to choose?",
      },
      {
        name: "Larry brazz",
        comment: "  on Nannys in UK and Europes , which to choose?",
      },
      {
        name: "Larry brazz",
        comment: "  on Nannys in UK and Europes , which to choose?",
      },
    ];
    const posts = [
      {
        name: "Larry brazz",
        post: "  on Nannys in UK and Europes , which to choose?",
      },
      {
        name: "Larry brazz",
        post: "  on Nannys in UK and Europes , which to choose?",
      },
      {
        name: "Larry brazz",
        post: "  on Nannys in UK and Europes , which to choose?",
      },
    ];

    const tags = [
        {
            tagName:"ABROAD"
        },
        {
            tagName:"ONBOARDING"
        },
        {
            tagName:"FUN ACTIVITIES"
        },
        {
            tagName:"CHILDREEN"
        },
        {
            tagName:"FAMILY"
        },
        {
            tagName:"PARENTS"
        },
        {
            tagName:"LEARNING"
        },
        {
            tagName:"BABYSITTING"
        },
        {
            tagName:"CARE"
        },
        {
            tagName:"TRAVELS"
        },
        {
            tagName:"TRIPS"
        },
        {
            tagName:"OUR BABIES"
        },
        {
            tagName:"SUMMER TRAVEL"
        },
    ]
    //   const ValuePiece = Date | nul l;

    //   const Value = ValuePiece | [ValuePiece, ValuePiece];

    //   const [value, onChange] = useState < Value > new Date();
  return (
    <div className="  bg-gray-800 text-white">
      <div className="side-container pb-6">
        <div className=" py-8 border-b-2 border-zinc-500">
          <label className="text-lg font-semibold" htmlFor="">
            Search
          </label>
          <div className="search bg-white flex items-center px-6 text-zinc-400">
            <SearchIcon />
            <input className="outline-none w-20" type="text" placeholder="" />
          </div>
        </div>
        <div className="py-8 border-b-2 border-zinc-500">
          <p className="text-lg font-semibold">Recent Comments</p>
          {comments.map((item, i) => (
            <ul key={i} className="my-4">
              <li>
                <span className="text-zinc-500">{item.name}</span>

                <span className="text-white hover:text-orange-500 text-sm">
                  {item.comment}{" "}
                </span>
              </li>
            </ul>
          ))}
        </div>
        <div className="calender">
          {/* <Calendar onChange={onChange} value={value} /> */}
        </div>
        <div className="py-8 border-b-2 border-zinc-500">
          <p className="text-lg font-semibold">Recent Posts</p>
          {posts.map((item, i) => (
            <ul key={i} className="my-4">
              <li>
                <span className="text-zinc-500">{item.name}</span>

                <span className="text-white hover:text-orange-500 text-xm">
                  {item.post}{" "}
                </span>
              </li>
            </ul>
          ))}
        </div>
              <div className="tags">
                  {tags.map((item, i) =>
                  (<button  key={i} className='px-4 py-2 bg-blue-950 hover:bg-slate-600 text-white m-2' >
                      {item.tagName}
                  </button>))}
        </div>
      </div>
    </div>
  );
}

export default BlogColumn