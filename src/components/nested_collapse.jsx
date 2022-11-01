import React from 'react'
import { FiChevronDown } from 'react-icons/fi';
import { BsPlusCircle } from 'react-icons/bs';
import {lecture_items,Button} from '../components'

const nested_collapse = () => {
  return (
    <div>
        <input type='checkbox' className='absolute right-0 top-0 inset-x-0 w-full h-12 opacity-0 z-9 cursor-pointer peer'/>
            <div className='bg-gray-200 h-12 w-full pl-5 flex items-center'>
                <p>Add Asignment Marks</p>
            </div>
            <div className='relative bottom-0 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180 items-center'>
            <FiChevronDown className='text-gray-900 items-center'/>
            </div>
            <div className=' overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-screen  bg-white'>
                <div className='p-4'>
                {lecture_items()}
                </div>
                </div>
                

            </div>
  )
}

export default nested_collapse