import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-950">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <a href="#herosection" className="flex items-center">
              <div className="relative">
                <div className="text-custom-yellow md:w-[148.44px] md:h-[77.62px] md:top-[11.38px] w-[118.63px] h-[74.13px] left-0 top-[8.87px] absolute md:text-[34px] text-[28px] font-bold font-league-spartan">TOOL</div>
                <div className="text-gray-100 md:w-[148.44px] md:h-[77.62px] md:left-[80.56px] absolute w-[118.63px] h-[74.13px] left-[69px] top-0 md:text-[34px] text-[28px] font-bold font-league-spartan">BEE</div>
              </div>
            </a>
            <p className="text-gray-100 mt-20">Do you want to feature your tool on our website? Reach out to us on email.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#news-section" className="hover:underline">AI News</a>
                </li>
                <li className="mb-4">
                  <a href="#news-section" className="hover:underline">AI Directory</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.instagram.com/your-handle" className="hover:underline">Instagram</a>
                </li>
                <li>
                  <a href="https://twitter.com/your-handle" className="hover:underline">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://toolbee.com/" className="hover:underline">ToolBee™</a>. All Rights Reserved. Made with ❤️</span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="https://www.instagram.com/your-handle" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              {/* replace with Instagram icon */}
            </a>
            <a href="https://twitter.com/your-handle" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              {/* replace with Twitter icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
