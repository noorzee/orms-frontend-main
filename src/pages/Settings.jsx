import React from 'react'
import { Header,Usersetting } from '../components'

const Settings = () => {
  {Header()}
  return (
    <div className='mt-12 ml-8 mr-8'>
    <div className='w-1200'>
    <h1 className='font-semibold text-xl ml-4 mb-10'>User Settings</h1>
    <div className='flex flex-shrink-0 m-0 flex-wrap justify-left gap-3 items-left w-full'>
         <div className='relative bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-6 rounded-2xl h-full  w-full shadow-sm'>
      {Usersetting()}
    </div>
    </div>
    </div>
    </div>
  )
}

export default Settings