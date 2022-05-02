import Head from 'next/head'
import { FeaturedPosts } from '../sections/index'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'

export default function Home({ posts }) {
  return (
    <div className="gp-container z-0 mb-5 pt-12 pb-8 lg:mb-8 lg:pb-8">
      <Head>
        <title>Sigma Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          <div className="flex flex-col">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky lg:top-[105px]">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
