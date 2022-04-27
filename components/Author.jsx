import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className="relative mb-8 mt-20 rounded-lg bg-black py-10 px-5 text-center lg:p-12">
      <div className="absolute -top-14 left-0 right-2">
        <Image
          alt="author.name"
          unoptimized
          height="100px"
          width="100px"
          src={author.photo.url}
          className="rounded-full align-middle"
        />
      </div>
      <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-md text-white">{author.bio}</p>
    </div>
  )
}

export default Author
