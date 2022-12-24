import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthUserContext'
import Link from 'next/link'

const NavbarComp = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  const activeClasss = 'bg-gray-900';
  const inActiveClasss = 'hover:bg-gray-700 hover:text-white ';
  const [open, setOpen] = useState(false)

  const signOut = async () => {
    await logout();
    router.replace('/');
  }

  const login = async () => {
    if (router.pathname == '/login') return
    router.replace('/login');
  }


  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
              onClick={() => setTimeout(() => { setOpen(!open) }, 100)}
            >
              <span className="sr-only">Open main menu</span>

              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link href="/" className={`${router.pathname == '/' ? activeClasss : inActiveClasss} text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page`}>
                  Home
                </Link>
                <Link href="/dashboard" className={`${router.pathname == '/dashboard' ? activeClasss : inActiveClasss} text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page`}>
                  Dashboard
                </Link>
                <Link href="/quiz" className={`${router.pathname == '/quiz' ? activeClasss : inActiveClasss} text-white px-3 py-2 rounded-md text-sm font-medium`}>
                  Quiz
                </Link>
                <Link href="/quiz" className={`${router.pathname == '/users' ? activeClasss : inActiveClasss} text-white px-3 py-2 rounded-md text-sm font-medium`}>
                  Users
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {
              user != null
                ? <button
                  onClick={signOut}
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                  Sign out
                </button>
                : <button
                  onClick={login}
                  className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Log In
                </button>
            }
          </div>
        </div>
      </div>
      <div className={open ? `sm:hidden` : 'hidden'} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
        </div>
      </div>
    </nav >
  );
}

export default NavbarComp