import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="mb-0 rounded-lg bg-white py-4 px-6 shadow-lg">
      <h3 className="gp-text-gradient mb-3 border-b pb-2 text-lg font-semibold uppercase">
        Categories
      </h3>
      {categories.map((category) => (
        <Link
          href={`/category/${category.slug}`}
          key={category.slug}
          className=""
        >
          <span className="text-md my-1 block cursor-pointer">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
