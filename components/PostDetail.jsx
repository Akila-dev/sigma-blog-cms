import React from 'react'
import moment from 'moment'

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'block-quote':
        return (
          <i
            key={index}
            className="mb-8 block border-l border-gray-400 py-2 pl-3 leading-6 tracking-wide"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </i>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <div className="mb-8 rounded-lg bg-white pb-2 shadow-lg lg:p-8">
      <div className="relative mb-7 min-h-[240px] w-full overflow-hidden rounded-t-lg shadow-md lg:rounded-lg">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="min-h-[240px] w-full rounded-t-lg object-cover lg:rounded-lg"
        />
      </div>
      <div className="contents-center mb-6 flex w-full items-center justify-center px-4 lg:px-0">
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
      <div className="px-4 text-justify first:text-center lg:px-0">
        <h1 className="gp-text-gradient mb-8 text-center text-xl font-bold uppercase lg:text-2xl">
          {post.title}
        </h1>
        {console.log(post.content.raw)}
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </div>
    </div>
  )
}

export default PostDetail
