import React from 'react';
import { blogData } from "./blogData";


const RelatedPosts = () => {

    // const randomIndices = blogData.map((_, index) => Math.random());

    // const newArray = [...blogData].sort((a, b) => {
    //     const randomIndexA = randomIndices[blogData.indexOf(a)];
    //     const randomIndexB = randomIndices[blogData.indexOf(b)];
        
    //     return randomIndexA - randomIndexB
    // })

    // const mappedArray = newArray.map((element) => {
    //     return element * 2
    // })
    // console.log(mappedArray);
  return (
    <div className="space-y-4  mb-6">
      <h1 className="text-3xl">Related Posts</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-100 space-y-4">
          <img className="w-full" src="Img1.webp" alt="" />
          <div className="px-2 py-4 space-y-3">
            <p className=" text-zinc-500 hover:text-green-400">
              Thare Are Never Guarantees
            </p>
            <p className=" hover:text-yellow-400">Babies,winter</p>
          </div>
        </div>
        <div className="bg-blue-100 space-y-4">
          <img className="w-full" src="Img1.webp" alt="" />
          <div className="px-2 py-4 space-y-3">
            <p className=" text-zinc-500 hover:text-green-400">
              Thare Are Never Guarantees
            </p>
            <p className="text-sm hover:text-yellow-400">Babies,winter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedPosts