import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
        <Navbar/>
        <main>
            {props.children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout