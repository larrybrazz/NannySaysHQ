import React from "react";
import "./style.css";


const Reviews = () => {
  const data = [
    {
      url: "Img1.webp",
      name: "ADAM ROSE",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad earum recusandae, odit sequi eaque minus asperiores nesciunt officiis, non iusto vero praesentium reiciendis, repudiandae tempora veritatis. Numquam, aliquid accusantium.",
    },
    {
      url: "Img1.webp",
      name: "ADAM ROSE",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad earum recusandae, odit sequi eaque minus asperiores nesciunt officiis, non iusto vero praesentium reiciendis, repudiandae tempora veritatis. Numquam, aliquid accusantium.",
    },
    {
      url: "Img1.webp",
      name: "ADAM ROSE",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad earum recusandae, odit sequi eaque minus asperiores nesciunt officiis, non iusto vero praesentium reiciendis, repudiandae tempora veritatis. Numquam, aliquid accusantium.",
    },
    {
      url: "Img1.webp",
      name: "ADAM ROSE",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad earum recusandae, odit sequi eaque minus asperiores nesciunt officiis, non iusto vero praesentium reiciendis, repudiandae tempora veritatis. Numquam, aliquid accusantium.",
    },
    {
      url: "Img1.webp",
      name: "ADAM ROSE",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad earum recusandae, odit sequi eaque minus asperiores nesciunt officiis, non iusto vero praesentium reiciendis, repudiandae tempora veritatis. Numquam, aliquid accusantium.",
    },
    {
      url: "Img1.webp",
      name: "ADAM ROSE",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad earum recusandae, odit sequi eaque minus asperiores nesciunt officiis, non iusto vero praesentium reiciendis, repudiandae tempora veritatis. Numquam, aliquid accusantium.",
    },
    {
      url: "Img1.webp",
      name: "ADAM ROSE",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad earum recusandae, odit sequi eaque minus asperiores nesciunt officiis, non iusto vero praesentium reiciendis, repudiandae tempora veritatis. Numquam, aliquid accusantium.",
    },
    {
      url: "Img1.webp",
      name: "ADAM ROSE",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad earum recusandae, odit sequi eaque minus asperiores nesciunt officiis, non iusto vero praesentium reiciendis, repudiandae tempora veritatis. Numquam, aliquid accusantium.",
    },
    {
      url: "Img1.webp",
      name: "ADAM ROSE",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad earum recusandae, odit sequi eaque minus asperiores nesciunt officiis, non iusto vero praesentium reiciendis, repudiandae tempora veritatis. Numquam, aliquid accusantium.",
    },
    {
      url: "Img1.webp",
      name: "ADAM ROSE",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad earum recusandae, odit sequi eaque minus asperiores nesciunt officiis, non iusto vero praesentium reiciendis, repudiandae tempora veritatis. Numquam, aliquid accusantium.",
    },
    {
      url: "Img1.webp",
      name: "ADAM ROSE",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ad earum recusandae, odit sequi eaque minus asperiores nesciunt officiis, non iusto vero praesentium reiciendis, repudiandae tempora veritatis. Numquam, aliquid accusantium.",
    },
  ];

  return (
    <div className="reviews">
      <div className="slide-container">
        {data.map((item, index) => (
          <div className="slide-content" key={index}>
            <div className="card-wrapper">
              <div className="card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img
                      src={item.url}
                      alt=""
                      className="rounded-image card-img"
                    />
                  </div>
                </div>
                <div className="card-content">
                  <h1 className="name">{item.name}</h1>
                  <p className="comment">{item.comment}</p>
                  <button className="button">View More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;