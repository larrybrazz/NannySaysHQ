import React from 'react'

const Contact = () => {
  return (
    <div className="md:text-center w-4/6 mx-auto space-y-6 my-8">
      <h1 className="text-3xl font-medium">Connect With Us</h1>
      <p className="capitalize text-green-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
        cumque recusandae illo velit qui, quasi doloribus laudantium in?
        Nesciunt at necessitatibus ea hic architecto adipisci in incidunt, dolor
        labore cupiditate.
      </p>
      <form action="">
        <div className="md:grid grid-cols-2 my-6 ">
          <div className="space-y-4 ">
            <input
              className="block  p-4 placeholder:py-8 px-4 placeholder:text-zinc-400 bg-zinc-200"
              type="text"
              placeholder="Name*"
            />
            <input
              className="block p-4 placeholder:p-4 placeholder:text-zinc-400 bg-zinc-200"
              type="text"
              placeholder="Email*"
            />
          </div>
          <textarea
            className="block mt-6 md:mt-0 placeholder:p-4 placeholder:text-zinc-400 bg-zinc-200"
            placeholder="Message*"
            name=""
            id=""
            cols="27"
            rows="5"
          ></textarea>
        </div>
        <input type="checkbox" name="" id="" />{" "}
        <label htmlFor="">
          {" "}
          I agree that my submitted data is being collected and stored
        </label>
      </form>
        <button className="block md:inline btn">SEND MESSAGE</button>
    </div>
  );
}

export default Contact