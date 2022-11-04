import React from 'react'
import Button from './Button'
import { useStateContext } from '../contexts/ContextProvider';
import {AiOutlineDownload} from 'react-icons/ai'

const Resultscard = () => {
    const { currentColor, isClicked,setIsClicked, setActiveMenu, screenSize,colseBtn,colsecontainer } = useStateContext();
  return (
    <div className='relative bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-6 rounded-2xl h-full  w-full'>
        <div className='flex'><div className='w-1/2'><h1 className='mb-1 font-semibold text-xl'>Semster 1</h1>
        <p className='text-xs text-gray-400  justify-between items-end mb-3'>Realeased date : 2022/02/11</p></div>
        <div className='w-1/2 object-right'><Button
          color="white"
          bgColor={currentColor}
          text='Downlaod a copy'
          borderRadius="10px"
          float='right'
          width="full"
        /></div></div><hr></hr>
        <div className='flex gap-4 mt-3'>
            <div><div><h1 className='mb-1 font-semibold text-xl'>3.30</h1></div>
            <div><p className='text-xs text-gray-400  justify-between items-end mb-6'>Semester GPA</p></div>
            </div>
            <div><div><h1 className='mb-1 font-semibold text-xl'>0</h1></div>
            <div><p className='text-xs text-gray-400  justify-between items-end mb-6'>Repeat Exams</p></div>
            </div>
            
        </div>
    <div className="overflow-x-auto relative sm:rounded-lg">
        <table className="w-full text-sm  text-gray-500 dark:text-gray-400 text-left">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6 pl-o bg-gray-50 dark:bg-gray-800">
                        Product name
                    </th>
                    <th scope="col" className="py-3 px-6 pl-o">
                        Color
                    </th>
                    <th scope="col" className="py-3 px-6 pl-o bg-gray-50 dark:bg-gray-800">
                        Category
                    </th>
                    <th scope="col" className="py-3 px-6 pl-o">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Apple MacBook Pro 17"
                    </th>
                    <td className="py-4 px-6">
                        Sliver
                    </td>
                    <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                        Laptop
                    </td>
                    <td className="py-4 px-6">
                        $2999
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Microsoft Surface Pro
                    </th>
                    <td className="py-4 px-6">
                        White
                    </td>
                    <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                        Laptop PC
                    </td>
                    <td className="py-4 px-6">
                        $1999
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Magic Mouse 2
                    </th>
                    <td className="py-4 px-6">
                        Black
                    </td>
                    <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                        Accessories
                    </td>
                    <td className="py-4 px-6">
                        $99
                    </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Google Pixel Phone
                    </th>
                    <td className="py-4 px-6">
                        Gray
                    </td>
                    <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                        Phone
                    </td>
                    <td className="py-4 px-6">
                        $799
                    </td>
                </tr>
                <tr>
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                        Apple Watch 5
                    </th>
                    <td className="py-4 px-6">
                        Red
                    </td>
                    <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                        Wearables
                    </td>
                    <td className="py-4 px-6">
                        $999
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Resultscard