import React from 'react'
import Logo from '../assets/logo.png'

const Navigation = () => {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://matthewjlowe.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-12" alt="Connect Four Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Connect Four</span>
            </a>
        </div>
    </nav>
  )
}

export default Navigation