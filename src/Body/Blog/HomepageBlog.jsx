import React from 'react'

const HomepageBlog = () => {
  return (
    <div className=" bg-green-50  ">
      <div className="theblog container mx-auto text-center space-y-6 py-16">
        <div className="space-y-8 mt-10 mb-20">
          <h1 className="Font-medium text-5xl">From The Blog</h1>
          <p className="uppercase text-green-700">
            LOREM IPSUM DOLOR SIT AMET, CONSEUR ADIPISICING ELIT, SED DO EIUSMOD
            TEMPOR INCIDIDUNT
          </p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 ">
          <div className="border bg-white p-10 space-y-4 shadow-lg">
            <div className="space-y-6 py-6 ">
              <img src="Img1.webp" alt="" />
              <h1 className="text-xl text-green-900 hover:text-orange-400">
                NannySayaHQ - Why you should choose us
              </h1>
              <p className="text-zinc-400 hover:text-orange-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                doloremque.
              </p>
              <p className="text-green-700  uppercase hover:text-orange-400">
                Read Article
              </p>
            </div>
            <div className="border"></div>
            <div className="flex justify-between">
              <span className="hover:text-orange-400 text-zinc-400">
                August 11, 2023
              </span>{" "}
              <span>3</span>
            </div>
          </div>
          <div className="border bg-white p-10 space-y-4 shadow-lg">
            <div className="space-y-6 py-6 ">
              <img src="Img1.webp" alt="" />
              <h1 className="text-xl text-green-900 hover:text-orange-400">
                NannySayaHQ - Why you should choose us
              </h1>
              <p className="text-zinc-400 hover:text-orange-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                doloremque.
              </p>
              <p className="text-green-700  uppercase hover:text-orange-400">
                Read Article
              </p>
            </div>
            <div className="border"></div>
            <div className="flex justify-between">
              <span className="hover:text-orange-400 text-zinc-400">
                August 11, 2023
              </span>{" "}
              <span>3</span>
            </div>
          </div>
          <div className="border bg-white p-10 space-y-4 shadow-lg">
            <div className="space-y-6 py-6 ">
              <img src="Img1.webp" alt="" />
              <h1 className="text-xl text-green-900 hover:text-orange-400">
                NannySayaHQ - Why you should choose us
              </h1>
              <p className="text-zinc-400 hover:text-orange-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                doloremque.
              </p>
              <p className="text-green-700  uppercase hover:text-orange-400">
                Read Article
              </p>
            </div>
            <div className="border"></div>
            <div className="flex justify-between">
              <span className="hover:text-orange-400 text-zinc-400">
                August 11, 2023
              </span>{" "}
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center mb-14">
        <span className="bg-gray-800 hover:bg-green-600 uppercase text-white py-6 px-12  ">
          ALL Articles
        </span>
      </div>
    </div>
  );
}

export default HomepageBlog