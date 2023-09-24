import React from 'react'

const Tags = () => {
  return (
    <div>
      <div className='space-y-4'>
        <p className=''>
          Tags: <span className='text-zinc-400'>abroad</span>{" "}
        </p>
        <div className='flex space-x-6 py-10 px-4 bg-blue-100'>
          <img className='w-[200px]' src="Img2.webp" alt="" />
          <div>
            <h4 className='font-bold text-gray-900'>
              About <span className='text-green-600'>Bethany</span>
            </h4>
            <p className='text-xs text-zinc-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              veritatis commodi nulla, ratione, quod, optio fugiat libero itaque
              quia vel vero iusto assumenda sapiente. Vero qui quos facere iste
              quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tags