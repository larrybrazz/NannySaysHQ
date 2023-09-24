import React from 'react';
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import StrollerOutlinedIcon from "@mui/icons-material/StrollerOutlined";
import "./aboutus.css"
import { BusinessCenterOutlined } from '@mui/icons-material';

const OrgPreview = () => {
  return (
    <div className="orgpreview">
      <div className="grid gap-2 grid-cols-2">
        <div className="">
          <form className="flex flex-col bg-white p-20" action="">
            <input
              className="bg-zinc-200 p-2 outline-none"
              type="text"
              placeholder="Name*"
            />{" "}
            <br />
            <input
              className="bg-zinc-200 p-2 outline-none"
              type="number"
              placeholder="Phone*"
            />{" "}
            <br />
            <button className='btn'>Request Callback</button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="flex space-x-4 text-white second-column">
            <StrollerOutlinedIcon />
            <div className="space-y-4">
              <p className="text-2xl font-medium">Babysitting</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                quas beatae numquam impedit. Incidunt assumenda veritatis
                dolorem minus, nihil optio recusandae nobis iste perspiciatis
                dolorum temporibus error nulla cum vero.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 text-white second-column">
            <CameraAltOutlinedIcon />
            <div className="space-y-4">
              <p className="text-2xl font-medium">Babysitting</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                quas beatae numquam impedit. Incidunt assumenda veritatis
                dolorem minus, nihil optio recusandae nobis iste perspiciatis
                dolorum temporibus error nulla cum vero.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 text-white second-column">
            <BusinessCenterOutlined />
            <div className="space-y-4">
              <p className="text-2xl font-medium">Babysitting</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                quas beatae numquam impedit. Incidunt assumenda veritatis
                dolorem minus, nihil optio recusandae nobis iste perspiciatis
                dolorum temporibus error nulla cum vero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrgPreview