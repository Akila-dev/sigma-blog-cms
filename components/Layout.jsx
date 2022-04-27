import React from 'react'
import { Header } from './'

const Layout = ({ children }) => {
  return (
    <>
      <div className="fixed z-50 w-full">
        <Header />
      </div>
      <div className="z--10 pt-[72px]">{children}</div>
    </>
  )
}

export default Layout
