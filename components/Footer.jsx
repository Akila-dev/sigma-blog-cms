import React from 'react'
import {
  AiFillInstagram,
  AiFillPhone,
  AiTwotoneMail,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="gp-container flex justify-center text-center">
      <div className="max-w-sm px-3">
        <h3 className="gp-text-gradient mb-2 text-2xl font-black md:text-3xl">
          Sigma Blog
        </h3>
        <p className="mb-3 text-lg font-semibold md:text-xl">
          <AiOutlineCopyrightCircle className="mr-2 inline" />
          Designed by Rhemarx Designs
        </p>
        <div className="mb-12 flex flex-wrap justify-center text-lg md:text-2xl">
          <a
            href="2349090411429"
            className="flex items-center justify-center px-2 hover:text-indigo-900"
          >
            <AiFillPhone />
          </a>
          <a
            href="mailto:akilapanunayan@gmail.com"
            className="flex items-center justify-center px-2 hover:text-indigo-900"
          >
            <AiTwotoneMail />
          </a>
          <a
            href="https://instagram.com/rhemarxdesign"
            className="flex items-center justify-center px-2 hover:text-indigo-900"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
