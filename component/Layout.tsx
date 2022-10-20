import React from 'react'
import ColorTheme from './ColorTheme';
import Navbar from './Navbar';

type Layout = {
    children: React.ReactNode,
};

const Layout = ({children}:Layout) => {
  return (
  <div className="content">
      <Navbar />
      <ColorTheme />
      {children}
  </div>
  )
}

export default Layout;