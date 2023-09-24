import React from 'react';
import "./host.css"

const Host = () => {
  return (
    <div className='py-24 bg-green-50 '>
      <div className="grid md:grid-cols-2 gap-8 host">
        <div className="flex  ">
          <div className="w-[60%] host-img">
            {/* <img className="h-full" src="Img3.webp" alt="" /> */}
          </div>
          <div className="bg-gray-800 text-white p-2 md:p-8 space-y-6 w-[40%]">
            <p className="uppercase font-bold">Host Family</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              blanditiis expedita quos atque, conseq
            </p>
            <button className="uppercase text-green-700">Contact US Now</button>
          </div>
        </div>
        <div className="flex">
          <div className="w-[60%] host-img">
            {/* <img className="h-full" src="Img3.webp" alt="" /> */}
          </div>
          <div className="bg-gray-800 text-white p-2 md:p-8 space-y-6 w-[40%]">
            <p className="uppercase font-bold">Host Family</p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              blanditiis expedita quos atque, conseq
            </p>
            <button className="uppercase text-green-700">Contact US Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Host