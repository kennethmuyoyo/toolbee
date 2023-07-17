import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-950">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <div className="flex items-center">
      <a href="#homesection" className="flex">
        <Image src="/logob.svg" alt="tag" width="150" height="150" className="" loading="eager"/>
      </a>
          </div>
            <p className="font-poppins text-gray-100 mt-20">Do you want to feature your tool on our website? Reach out to us on <a href="mailto:hello@toolbee.ai?subject=APPLICATION%20TO%20FEATURE%20AI%20TOOL%20ON%20TOOLBEE" className="hover:underline text-custom-yellow">email</a>.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#newssection" className="hover:underline">AI News</a>
                </li>
                <li className="mb-4">
                  <a href="#toolsection" className="hover:underline">AI Directory</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.instagram.com/your-handle" className="hover:underline">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://toolbee.com/" className="hover:underline">ToolBee™</a>. All Rights Reserved. Made with 🐝</span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="https://instagram.com/toolbee.ai?igshid=MzRlODBiNWFlZA==" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              {/* replace with Instagram icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
