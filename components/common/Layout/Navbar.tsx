import React, { useState, useEffect } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon, InstagramLogoIcon, HomeIcon, ArchiveIcon, Cross1Icon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    const [hamburgerMenuToggleIsOn, setHamburgerMenuToggleIsOn] = useState(true)
    const [pfpDropdownMenuHiddenIsOn, setPfpDropdownMenuHiddenIsOn] = useState(true)


    /////////////////// Hide Nav on scrolling /////////////////////////////
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY
    
        if(currentScrollPos > prevScrollPos){
            setVisible(false)
        }else{
            setVisible(true)
        }
    
        setPrevScrollPos(currentScrollPos)
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll)
    })
    

    const handlePFDropdownMenuToggle = () => {
        pfpDropdownMenuHiddenIsOn === true ? setPfpDropdownMenuHiddenIsOn(false) : setPfpDropdownMenuHiddenIsOn(true)
    }
    
    return (
        <nav className={`bg-blue-700 bg-opacity-80 backdrop-blur-md w-full z-30 sticky shadow-md border-gray-100 transition duration-300 ease-in-out ${visible ? 'top-0 translate-y-[0px]' : '-translate-y-[100px]'}`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={() => setHamburgerMenuToggleIsOn(!hamburgerMenuToggleIsOn)} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* <!--
                                Icon when menu is closed.
                                Menu open: "hidden", Menu closed: "block"
                            --> */}
                            {/* <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg> */}
                            {hamburgerMenuToggleIsOn === true ? <HamburgerMenuIcon width={20} height={20}/> : <Cross1Icon width={20} height={20}/>}
                            {/* <!--
                                Icon when menu is open.
                                Menu open: "block", Menu closed: "hidden"
                            --> */}
                            {/* <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg> */}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center relative">
                            <Image alt='Alexis&Company Black Logo' width={30} height={30} src={'/images/company-logo-white.png'} />
                            {/* <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/> */}
                            {/* <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/> */}
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/" className="text-gray-300 hover:bg-blue-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</Link>
                                {/* <a href="#hf-designs" className="text-gray-300 hover:bg-blue-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Featured Designs</a> */}
                                <Link href="/allpreviousdrops" className="text-gray-300 hover:bg-blue-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium">All Drops</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a target="_blank" href={"https://www.instagram.com/alexisnco/"} rel="noopener noreferrer">
                            <div className='rounded-md p-2 hover:bg-blue-800'><InstagramLogoIcon height={20} width={20} className='text-slate-300'/></div>
                        </a>
                        {/* <button onClick={() => setPfpDropdownMenuHiddenIsOn(false)} type="button" className="rounded-md bg-slate-700 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button> */}

                        {/* <!-- Profile dropdown --> */}
                        <div hidden className="relative ml-3">
                            {/* <div>
                                <button onClick={() => handlePFDropdownMenuToggle()} type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                </button>
                            </div> */}

                            {/* <!--
                                Dropdown menu, show/hide based on menu state.

                                Entering: "transition ease-out duration-100"
                                From: "transform opacity-0 scale-95"
                                To: "transform opacity-100 scale-100"
                                Leaving: "transition ease-in duration-75"
                                From: "transform opacity-100 scale-100"
                                To: "transform opacity-0 scale-95"
                            --> */}

                            {/* <div hidden={pfpDropdownMenuHiddenIsOn} className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div hidden={hamburgerMenuToggleIsOn} className={`sm:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <Link href={"/"} onClick={()=> setHamburgerMenuToggleIsOn(!hamburgerMenuToggleIsOn)} className="hover:bg-blue-800 text-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                        <div className="flex space-x-2">
                            <div className="my-auto px-2">
                                <HomeIcon/>
                            </div>
                            <p> Home</p>
                        </div>
                    </Link>
                    <Link href={"/allpreviousdrops"} onClick={()=> setHamburgerMenuToggleIsOn(!hamburgerMenuToggleIsOn)} className="hover:bg-blue-800 text-gray-300 hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                        <div className="flex space-x-2">
                            <div className="my-auto px-2">
                                <ArchiveIcon/>
                            </div>
                            <p> All Drops</p>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar