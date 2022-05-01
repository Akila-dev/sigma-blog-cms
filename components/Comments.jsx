import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

import { getComments } from '../services'
import { comment } from 'postcss'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  })

  return (
    <>
      {comment.length > 0 && (
        <div className="rounded-lg bg-white p-5 shadow-lg md:p-8 md:pb-12">
          <h3 className="gp-text-gradient mb-5 border-b pb-3 text-xl font-semibold md:mb-8 md:pb-4">
            {(comments.length > 1 && comments.length + 'COMMENTS') || 'COMMENT'}
          </h3>
          {comments.map((comment) => (
            <div
              className="mb-3 border-b border-gray-100 pb-3 md:mb-4 md:pb-4"
              key={comment.createdAt}
            >
              <p className="mb-3 md:mb-4">
                <span className="font-semibold">{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="w-full whitespace-pre-line text-gray-600">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
