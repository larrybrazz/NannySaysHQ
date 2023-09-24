import React from 'react';
import "./style.css"

const ContactInfo = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-between items-center  my-2">
        <p className='social-title'>Socials</p>
        <div className='socials'>
          <span className="socials-icon">
            {" "}
            <i className="fa fa-twitter"></i>
          </span>
          <span className="socials-icon">
            {" "}
            <i className="fa fa-instagram"></i>
          </span>
          <span className="socials-icon">
            {" "}
            <i className="fa fa-tiktok"></i>
          </span>
          <span className="socials-icon">
            {" "}
            <i className="fa fa-facebook"></i>
          </span>
        </div>
      </div>
      <div className=" flex items-center justify-between flex-col md:flex-row contact">
        <div className="flex items-center space-x-4">
          <span className="px-3 py-2 border border-green-300 rounded-full">
            <i className="fa fa-message text-green-400 hover:"></i>
          </span>
          <p>olanrewajuadebayo@outlook.com</p>
        </div>
        <div className=" flex items-center ">
          <span>
            <i className="fa fa-phone"></i>
          </span>
          <p>+44-7823-719-099</p>
        </div>
        <div className='appointment hidden md:block'>
          <p>Appointment</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo