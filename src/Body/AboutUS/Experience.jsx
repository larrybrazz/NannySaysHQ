import React from 'react';
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
const Experience = () => {
  return (
    <div className="space-y-8 experience my-12 p-4">
      <h1 className="text-3xl font-medium text-center">The Nanny Experinece </h1>
      <p className="text-green-700 capitalize text-center">
        AS THE NannySaysHQ AGENCY, WE ARE DEDICATED TO MATCHING FAMILIES IN THE
        UNITED Kingdom AND EUROPE INTERNATIONAL AND PROVIDE LIVE-IN CHILDCARE.
        WE’RE ATHERE FOR YOU EVERY STEP OF THE WAY.
      </p>
      <div className='grid grid-cols-2 justify-center'>
        <div className='space-y-4'>
          <div className="flex items-center space-x-2">
            <DoneOutlinedIcon />
            <p>Voted Best Nanny Agency</p>
          </div>
          <div className="flex items-center space-x-2">
            <DoneOutlinedIcon />
            <p>Voted Best Nanny Agency</p>
          </div>
          <div className="flex items-center space-x-2">
            <DoneOutlinedIcon />
            <p>Voted Best Nanny Agency</p>
          </div>
        </div>
        <div className='space-y-4'>
          <div className="flex items-center space-x-2">
            <DoneOutlinedIcon />
            <p>Voted Best Nanny Agency</p>
          </div>
          <div className="flex items-center space-x-2">
            <DoneOutlinedIcon />
            <p>Voted Best Nanny Agency</p>
          </div>
          <div className="flex items-center space-x-2">
            <DoneOutlinedIcon />
            <p>Voted Best Nanny Agency</p>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default Experience