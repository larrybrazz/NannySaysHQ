import React from 'react';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import "./whychooseus.css"

const WhyChooseUs = () => {
  return (
    <div className="text-center w-11/12 mx-auto space-y-32 my-10">
      <div className="space-y-8 ">
        <h2 className="text-4xl text-gray-900 ">Why Choose Us</h2>
        <p className="uppercase text-green-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
          Pariatur debitis assumenda quo veritatis voluptatibus aliquam, quae
          quibusdam ipsu
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 grid-container">
        <div className="space-y-28 border border-green-600 p-4 bg-zinc-100">
          <div className="">
            <p>
              <i className="text-white py-16 px-14  bg-green-700 rounded-full icon">
                {" "}
                <HomeOutlinedIcon />{" "}
              </i>
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-medium hover:text-yellow-500 ">
              Affordable
            </p>
            <p className="text-zinc-400 hover:text-green-700">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="space-y-28 border border-green-600 p-4 bg-zinc-100">
          <div className="">
            <p>
              <i className="text-white py-16 px-14  bg-green-700 rounded-full icon">
                {" "}
                <FavoriteBorderOutlinedIcon />{" "}
              </i>
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-medium hover:text-yellow-500 ">
              Flexible
            </p>
            <p className="text-zinc-400 hover:text-green-700">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="space-y-28 border border-green-600 p-4 bg-zinc-100">
          <div className="">
            <p>
              <i className="text-white py-16 px-14  bg-green-700 rounded-full icon">
                {" "}
                <PeopleOutlineOutlinedIcon />{" "}
              </i>
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-medium hover:text-yellow-500 ">
              Intercultural
            </p>
            <p className="text-zinc-400 hover:text-green-700">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="space-y-28 border border-green-600 p-4 bg-zinc-100">
          <div className="">
            <p>
              <i className="text-white py-16 px-14  bg-green-700 rounded-full icon">
                {" "}
                <CameraAltOutlinedIcon />{" "}
              </i>
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-medium hover:text-yellow-500 ">
              Experienced
            </p>
            <p className="text-zinc-400 hover:text-green-700">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs