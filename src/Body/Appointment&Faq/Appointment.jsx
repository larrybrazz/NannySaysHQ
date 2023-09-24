import React from "react";

const Reservation = () => {
  return (
    <div className="w-11/12 mx-auto">
        <p className="font-bold text-3xl ">Request Appointment !</p>
      <div className="rounded-xl my-8 space-y-4 ">
        <div>
          <div className="grid grid-cols-2 gap-4 ">
            <input
              className="w-full bg-zinc-200 p-4 rounded-xl outline-none"
              type="text"
              name=""
              id=""
              placeholder="Name"
            />
            <input
              className="w-full bg-zinc-200 p-4 rounded-xl outline-none"
              type="phone"
              name=""
              id=""
              placeholder="Contact Number"
            />
            <input
              className="w-full bg-zinc-200 p-4 rounded-xl outline-none"
              type="email"
              name=""
              id=""
              placeholder="Email Address"
            />
            <input
              className="w-full bg-zinc-200 p-4 rounded-xl outline-none"
              type="number"
              name=""
              id=""
              placeholder="Number of Person "
            />
            <input
              className="w-full bg-zinc-200 p-4 rounded-xl outline-none"
              type="date"
              name=""
              id=""
              placeholder="Book Date"
            />
            <input
              className="w-full bg-zinc-200 p-4 rounded-xl outline-none"
              type="time"
              name=""
              id=""
              placeholder="Your Time"
            />
          </div>
          <textarea
            className="w-full bg-zinc-200 mt-4 p-4 rounded-xl outline-none"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message of Request"
          ></textarea>
          <button className="w-full bg-green-800 mt-4 p-4 rounded-xl text-white text-xl hover:bg-zinc-300">
            SUBMIT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
