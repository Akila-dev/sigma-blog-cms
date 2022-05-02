import React from 'react'
import { useRouter } from 'next/router'

import { getCategories, getCategoryPost } from '../../services'
import { PostCard, Categories, Loader, PostWidget } from '../../components'
import { FeaturedPosts } from '../../sections'

const CategoryPosts = ({ posts }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="gp-container z-0 mb-0 py-8 pb-6 md:mb-8 md:pb-8">
      {/* <FeaturedPosts /> */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <div className="flex flex-col">
            {console.log(posts)}
            {posts.map((post) => (
              <PostCard post={post.node} key={post.node.title} />
            ))}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky lg:top-[105px]">
            <PostWidget categories={undefined} slug={undefined} />
            <Categories />
          </div>
        </div>
      </div>
      <div className="pt-8">
        <FeaturedPosts />
      </div>
    </div>
  )
}

export default CategoryPosts

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug)

  return {
    props: { posts },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
