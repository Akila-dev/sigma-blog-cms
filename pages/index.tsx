import type { NextPage } from 'next'
import Head from 'next/head'
import { Key } from 'react'
import { PostCard, Categories, PostWidget } from '../components'

import { FeaturedPosts } from '../sections'
import { getPosts } from '../services'

const Home: NextPage = ({ posts }) => {
  return (
    <div className="gp-container z-0 mb-8 py-5">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <div className="flex flex-col">
            {console.log(posts)}
            {posts.map((post: { node: { title: Key | null | undefined } }) => (
              <PostCard post={post.node} key={post.node.title} />
            ))}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky lg:top-[90px]">
            <PostWidget categories={undefined} slug={undefined} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
