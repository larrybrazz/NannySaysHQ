import React from "react";

const Footer = () => {
  const scrollToTheTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-gray-900 pt-8">
      <div className="md:grid grid-cols-4 gap-4 w-10/12 mx-auto text-zinc-400 text-sm my-8 space-y-4">
        <div className="space-y-12">
          <p>NannySaysHQ</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis ab porro molestiae debitis a est! Nisi, ex, nesciunt ad
            vel similique blanditiis repellendus maxime optio facere ducimus
            nulla nostrum atque?
          </p>
          <p className="readMore">Read More</p>
        </div>
        <div className="md:block hidden space-y-4">
          <p className="font-semibold text-white text-2xl font-mono">
            Opening Hours
          </p>
          <div className="flex items-center space-x-2">
            <p className="dot"></p> <p className="dash"></p>
          </div>
          <div className="flex space-x-2 ">
            <i className="fa fa-twitter text-lg text-green-600 "></i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              suscipit ipsa unde p<span className="text-green-600">2Hours Ago</span>
            </p>
          </div>
          <div className="flex space-x-2 ">
            <i className="fa fa-twitter text-lg text-green-700 "></i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              suscipit ipsa unde p<p className="text-green-700">2Hours Ago</p>
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-semibold text-white text-2xl font-mono  ">
            Latest Tweets
          </p>
          <div className="flex items-center space-x-2">
            <p className="dot"></p> <p className="dash"></p>
          </div>
          <div className="flex space-x-2">
            <p className="text-green-600 uppercase">Monday:</p>
            <span className="text-zinc-400 l">Closed</span>{" "}
          </div>
          <div className="flex space-x-2">
            <p className="text-green-600 uppercase">Tue - Fri: </p>
            <span>...........10am - 9pm</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-green-600 uppercase">Saturday: </p>
            <span>......10am - 11pm</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-green-600 uppercase"> Sunday: </p>
            <span>...........10am - 12pm</span>
          </div>
        </div>
        <div className="md:block hidden space-y-4">
          <p className="font-semibold text-white text-2xl font-mono">
            Instagram
          </p>
          <div className="flex items-center space-x-2">
            <p className="dot"></p> <p className="dash"></p>
          </div>
          <div className="flex space-x-2 ">
            <p className="text-green-600 uppercase">Monday:</p>{" "}
            <span>Closed</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-green-600 uppercase">Tue-Fri:</p>{" "}
            <span>...........10am - 9pm</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-green-600 uppercase">Saturday:</p>{" "}
            <span>......10am - 11pm</span>
          </div>
          <div className="flex space-x-2">
            <p className="text-green-600 uppercase">Sunday:</p>{" "}
            <span>...........10am - 12pm</span>
          </div>
        </div>
      </div>
      <div
        onClick={scrollToTheTop}
        className="hidden md:flex justify-end -mb-8 fix"
      >
        <span className=" px-6 py-4 hover:bg-white bg-green-600 rounded-full mr-8">
          <i className="fa fa-angle-up text-2xl text-white hover:text-green-600"></i>
        </span>
      </div>
      <div className="text-center bg-black py-6 text-zinc-400 text-xs">
        <p>Copyright 2023 © </p>
      </div>
    </div>
  );
};

export default Footer;
