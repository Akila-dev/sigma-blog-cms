import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const FeaturedPostCard = ({ post }) => {
  return (
    <div className="relative mb-7 h-[130px] w-full rounded-lg md:h-[200px]">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="h-full w-full rounded-lg object-cover"
      />
      <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-between rounded-lg bg-black bg-opacity-70 p-4 text-center text-white shadow-lg">
        <p className="text-xs md:text-sm">
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </p>
        <Link href={`/post/${post.slug}`}>
          <h1 className="text-md cursor-pointer font-semibold lg:text-lg">
            {post.title}
          </h1>
        </Link>
        <div>
          <img
            alt={post.author.name}
            height="20px"
            width="20px"
            src={post.author.photo.url}
            className="mr-2 inline"
          />
          <p className="inline text-xs lg:text-sm">{post.author.name}</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPostCard
