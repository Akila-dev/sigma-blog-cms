import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-0 pb-10 shadow-lg last:mb-0">
      <div className="relative mb-6 h-[225px] w-full overflow-hidden md:h-[275px] lg:h-[295px]">
        <img
          src={post.featuredImage.url}
          alt="post.title"
          className="center h-full w-full rounded-t-lg object-cover shadow-lg md:absolute"
        />
      </div>
      <h1 className="gp-text-gradient mb-5 cursor-pointer px-4 text-center text-xl font-bold uppercase leading-7 transition duration-700 md:px-10">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="contents-center mb-5 flex w-full items-center justify-center px-4 md:px-10">
        <div className="mr-4 flex items-center md:mr-5 lg:mb-0">
          <p className="mr-2 inline text-sm text-gray-700">
            {post.author.name}
          </p>
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            src={post.author.photo.url}
          />
        </div>
        <div className="flex items-center font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-indigo-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm">
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className="mb-5 px-4 text-justify font-normal text-gray-700 md:px-10">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="gp-btn">Continue Reading</span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
