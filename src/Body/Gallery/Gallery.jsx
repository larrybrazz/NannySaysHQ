import React, { useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import "./gallery.css"

const Gallery = () => {

    const data = [
        {
            id: 1,
            imgSrc:"galleryImages/img1.webp"
        },
        {
            id: 2,
            imgSrc:"galleryImages/img2.webp"
        },
        {
            id: 3,
            imgSrc:"galleryImages/img3.webp"
        },
        {
            id: 4,
            imgSrc:"galleryImages/img4.webp"
        },
        {
            id: 5,
            imgSrc:"galleryImages/img5.webp"
        },
        {
            id: 6,
            imgSrc:"galleryImages/img6.webp"
        },
        {
            id: 7,
            imgSrc:"galleryImages/img7.webp"
        },
        {
            id: 8,
            imgSrc:"galleryImages/img8.webp"
        },
        {
            id: 9,
            imgSrc:"galleryImages/img9.webp"
        },
        {
            id: 10,
            imgSrc:"galleryImages/img10.webp"
        },
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTemptImgSrc] = useState('');

    const getImg = (imgSrc) =>{
        setTemptImgSrc(imgSrc);
        setModel(true)
    }
    return (
        <>
        <div className={model? "model open" : "model"} >
                <img src={tempImgSrc} alt="" />
                <CloseIcon onClick={()=>setModel(false) } />
         </div>
        <div className="gallery">
          {data.map((img, i) => (
            <div className="pics" key={i} onClick={() => getImg(img.imgSrc)}>
              <img src={img.imgSrc} alt="" style={{ with: "100%" }} />
            </div>
          ))}
        </div>
      </>
    );
}

export default Gallery