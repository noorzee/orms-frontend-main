import React from 'react'
import { FiChevronDown } from 'react-icons/fi';
import {lecture_items,Button,nested_collapse} from '../components'


const checkcollapse = () => {}

const Collapseble = () => {

  return (
    <div className='relative w-1200 overflow-hidden'>
        <div>
        <input type='checkbox' className='absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer'/>
            <div className='bg-gray-200 h-12 w-full pl-5 flex items-center z-10'>
                <p>Database programming</p>
            </div>
            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180 items-center'>
            <FiChevronDown className='text-gray-900 items-center'/>
            </div>
            <div className=' overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full  bg-white'>
                <div className='p-4'>
                {lecture_items()}
                </div>
                </div>
                
                <div className='absolute bottom-2'>{nested_collapse()}</div>

            </div>
    </div>
  )
}

export default Collapseble