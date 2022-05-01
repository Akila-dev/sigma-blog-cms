import React, { useContext, useState, useEffect } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import Link from 'next/link'
import { getCategories } from '../services'

const Menu = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <>
      {/* <Link href="/">
        <span className="cursor-pointer py-1.5 font-semibold text-black hover:text-red-600 lg:py-0">
          Home
        </span>
      </Link> */}
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="mb-1 cursor-pointer border-b border-gray-200 py-2 font-semibold text-black text-opacity-75 hover:text-opacity-100 lg:ml-5 lg:border-b-0 lg:py-0">
            {category.name}
          </span>
        </Link>
      ))}
    </>
  )
}

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  // const [categories, setCategories] = useState([])

  // useEffect(() => {
  //   getCategories().then((newCategories) => setCategories(newCategories))
  // }, [])

  return (
    <div className="relative w-full rounded-b-lg bg-white shadow-md">
      <div className="gp-container flex items-center justify-between py-6">
        <div>
          <Link href="/">
            <span className="cursor-pointer text-2xl font-black text-black">
              Sigma-Blog
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Menu />
        </div>
        <div className="lg:hidden">
          {toggleMenu ? (
            <RiCloseLine
              className="text-black"
              size="30"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              className="text-black"
              size="27"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {(toggleMenu && (
            <div className="scale-up-center absolute top-[93px] right-4 min-w-[210px]  rounded-lg  bg-white p-0 text-right shadow-lg md:right-10">
              <div className="flex flex-col rounded-lg py-5 px-6 shadow-inner">
                <Menu />
              </div>
            </div>
          )) || (
            <div className="scale-down-center absolute top-[86px] right-4  min-w-[210px]  rounded-lg bg-white p-0 text-right shadow-lg md:right-10">
              <div className="flex flex-col rounded-lg py-5 px-6 shadow-inner">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
