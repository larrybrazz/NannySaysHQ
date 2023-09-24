import React, { useState, useEffect, useRef } from "react";
import "./profile.css";

const Profile = () => {
  const [shadow, setShadow] = useState("");
  const textRef = useRef(null);

  useEffect(() => {
    let shadowValue = "";
    for (let i = 0; i < 30; i++) {
      shadowValue +=
        (shadowValue ? "," : "") + `${-i * 1}px ${i * 1}px 0 #d9d9d9`;
    }
    setShadow(shadowValue);

    if (textRef.current) {
      textRef.current.style.textShadow = shadowValue;
    }
  }, []);

  return (
    <>
      <div className="profile flex justify-center items-center w-11/12 mx-auto py-14 my-12">
        <div>
          {/* <img src="Img3.webp" alt="" /> */}
        </div>
        <div data-text="CSS 3D Isometric Text" ref={textRef} className="text">
          Bethany
        </div>
      </div>
    </>
  );
};

export default Profile;
