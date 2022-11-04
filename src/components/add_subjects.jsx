import React, {useState} from 'react'
import Select from 'react-select'

const subjectsoption = [
{ value: 'chocolate', label: 'Chocolate' },
{ value: 'strawberry', label: 'Strawberry' },
{ value: 'vanilla', label: 'Vanilla' }
];

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 5,
    })}

  

const add_subjects = () => {
  return (
    
            <div className='w-full'>
                <form class="w-full ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">First Name</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-first-name" type="text" placeholder="Danishka" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Last Name</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs" id="grid-last-name" type="text" placeholder="Gunathilaka" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-stu-ID">Email Address</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-first-name" type="email" placeholder="***@uovt.lk" />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">Password</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs" id="grid-password" type="password" placeholder="******************" />
                        </div>
                    </div>
                </form>
                <hr></hr>
                <p className='mt-3 text-gray-500'>You can import students using a ".CSV" file if you want to add more than one to the system.</p>
                <p className='font-bold mt-3 text-xs text-gray-500'> Important
                    <ul className='list-disc ml-4'>
                        <li>Files must be in UTF-8 format.</li>
                        <li>You must include all required fields when you create a record.</li>
                        <li>If you're updating a record, any fields that aren't defined in the CSV file are ignored during the update.</li>
                    </ul>
                </p>
            </div>
  )
          
}

export default add_subjects