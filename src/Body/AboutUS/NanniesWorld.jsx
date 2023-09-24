import React from 'react';
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const NanniesWorld = () => {
  return (
    <div className="nanniesworld ">
      <div className="grid grid-cols-2 text-center ">
        <div></div>
        <div className="bg-white space-y-6 p-16">
          <h1 className="text-3xl font-semibold bg-white">
            {" "}
            We Bring the World to Your Babies
          </h1>
          <div>
            <p>THE NANNYSAYSHQ FOUNDATION OFFICE IS COMPRISED OF A TEAM OF</p>
            <p>PROFESSIONALS COMMITTED TO THE MISSION OF ORGANIZATION</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-green-700 text-white contact-box ">
              <div>
                <span className=" bg-yellow-600 p-4 rounded-full">
                  <PhoneEnabledOutlinedIcon />
                </span>
              </div>
              <div className="px-2 py-6 ">
                <p className="font-semibold text-lg">
                  Call Us Now <br /> +44 7086345627
                </p>
              </div>
            </div>
            <div className="bg-green-700 text-white contact-box ">
              <div>
                <span className=" bg-yellow-600 p-4 rounded-full">
                  <EmailOutlinedIcon />
                </span>
              </div>
              <div className="px-2 py-6">
                <p className="font-semibold text-lg">
                  Call Us Now <br /> +44 7086345627
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NanniesWorld