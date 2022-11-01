import React, {useState} from 'react'
import Button from './Button'


const add_final_marks = () => {

  return (
    <div className='mt-12 ml-8 mr-8'>
    <div>
    <div className='flex flex-shrink-0 m-0 flex-wrap justify-left gap-3 items-left w-full'>
         <div className='relative bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 mt-0 mb-0 p-6 pt-2 pb-2 rounded-2xl h-full overflow-scroll  w-full'>
            <div className='w-full'>
                <form className="w-full max-w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Student ID</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-first-name" type="text" placeholder="SOF/18/B1/01" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-stu-ID">Marks</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-first-name" type="number" placeholder="" />
                        </div>
                    </div>
                    <div >
                        <button className='rounded-lg px-4 py-2 bg-[#0096ff] text-white'>Submit</button>
                    </div>
                </form>
                <div className='mb-6 mt-6'>
                    

                <div className="overflow-x-auto relative shadow-md sm:rounded-lg overflow-scroll h-40">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Student ID
                </th>
                <th scope="col" className="py-3 px-6">
                    Marks
                </th>
                <th scope="col" className="py-3 px-6">
                    Final Grade
                </th>
                <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody className='text-xs'>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    SOF/18/B2/25
                </th>
                <td className="py-4 px-6">
                    85
                </td>
                <td className="py-4 px-6">
                    A+
                </td>
                <td className="py-4 px-6 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                SOF/18/B2/20
                </th>
                <td className="py-4 px-6">
                55
                </td>
                <td className="py-4 px-6">
                    B
                </td>
                <td className="py-4 px-6 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                SOF/18/B2/21
                </th>
                <td className="py-4 px-6">
                33
                </td>
                <td className="py-4 px-6">
                    D
                </td>
                <td className="py-4 px-6 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


                </div>
                <hr></hr>
                <p className='mt-3 text-gray-500'>You can import assignments using a ".CSV" file if you want to add more than one to the system.</p>
                <p className='font-bold mt-3 text-xs text-gray-500'> Important
                    <ul className='list-disc ml-4'>
                        <li>Files must be in UTF-8 format.</li>
                        <li>You must include all required fields when you create a record.</li>
                        <li>If you're updating a record, any fields that aren't defined in the CSV file are ignored during the update.</li>
                    </ul>
                </p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default add_final_marks