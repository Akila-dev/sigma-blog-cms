import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])

  // console.log(relatedPosts)

  return (
    <div className="mb-5 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-3 border-b pb-2 text-lg font-semibold uppercase">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="mb-2 flex w-full items-center">
          <div className="w-[50px]">
            <div className="relative m-1 flex h-[50px] w-[50px] items-center justify-center overflow-hidden">
              <img
                alt={post.title}
                className="center absolute h-full w-full rounded-full object-cover align-middle"
                src={post.featuredImage.url}
              />
            </div>
          </div>
          <div className="ml-4">
            <p className="text-xs text-gray-500">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.slug}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
