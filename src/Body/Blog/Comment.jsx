import React from 'react'

const Comment = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl">Add Comment</h1>
      <div className="">
        <p className=" text-xs  text-zinc-400">Connect with</p>
        <div className="space-x-2 my-4">
          <span>
            <i className="fa text-xl text-blue-500 fa-facebook"></i>
          </span>
          <span>
            <i className="fa text-xl  text-blue-500 fa-twitter"></i>
          </span>
        </div>
        <p className=" text-xs  text-zinc-400">
          Your email address will not be published. Required fields are marked *
        </p>
        <form className="space-y-2 my-4">
          <textarea
            className="w-full outline-none p-2 bg-zinc-200"
            placeholder="Comment"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input
            className="w-full p-2 outline-none  bg-zinc-200"
            type="text"
            placeholder="Email*"
          />
          <input
            className="w-full p-2 outline-none  bg-zinc-200"
            type="text"
            placeholder="Name*"
          />
          <input
            className="w-full p-2 outline-none  bg-zinc-200"
            type="text"
            placeholder="Website"
          />
          <div>
            <input className=" bg-zinc-200" type="checkbox" name="" id="" />{" "}
            <label htmlFor="">
              {" "}
              Save my name, email and website in this browser for the next time
              I comment
            </label>
          </div>
          <div>
            <input className=" bg-zinc-200" type="checkbox" name="" id="" />{" "}
            <label htmlFor="">
              {" "}
              By using this form you agree with the storage and handling of your
              data by this website.{" "}
            </label>
          </div>

          <button className="btn">Post Comment</button>
        </form>
      </div>
    </div>
  );
}

export default Comment