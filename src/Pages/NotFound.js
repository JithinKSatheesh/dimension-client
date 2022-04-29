import React from 'react'
import Navbar from 'Components/Navbar'

import {ThreeCircles} from 'react-loader-spinner'

export default function Notfound(props) {
    

    return (
        <>
          <div className="fixed h-full w-full bg-dark-blue-grad text-white z-30">
            <Navbar variant="white" />
            <div className="flex h-full justify-center items-center">
              <div className='text-center'>

              <div className="text-9xl flex items-center ">
                4  <div className="px-4"><ThreeCircles color='white' /></div>4
              </div>
              <div className="text-2xl pt-7">
                Page not found
              </div>
              </div>
            </div>
          </div>
        </>
    )
}
