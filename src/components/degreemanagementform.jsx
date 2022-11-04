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

  

const degreemanagementform = () => {
  return (
    
            <div className='w-full'>
                <form class="w-full ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Degree program Code</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-first-name" type="text" placeholder="XX105011" />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Degree program Name</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs" id="grid-last-name" type="text" placeholder="Mathematics" />
                        </div>
                        
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Faculty</label>
                            <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-xs" id="grid-state">
                                        <option>Bachelor of Technology in Food Process Technolog</option>
                                        <option>Bachelor of Technology in Quantity Surveying</option>
                                        <option>Bachelor of Technology in Film and Television Production Technology</option>
                                        <option>Bachelor of Technology in Media Arts Production Technology</option>
                                        <option>Bachelor of Technology in Industrial Management Technology</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Number of Credits</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-first-name" type="number" placeholder="Add " />
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Subject Type</label>
                            <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-xs" id="grid-state">
                                        <option>GPA</option>
                                        <option>Non GPA</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/4 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Subject requirement</label>
                            <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-xs" id="grid-state">
                                        <option>Compulsory</option>
                                        <option>Elective</option>
                                        <option>Optional</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
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

export default degreemanagementform