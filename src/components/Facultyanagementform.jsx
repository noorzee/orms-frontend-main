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

  

const Facultyanagementform = () => {
  return (
    
            <div className='w-full'>
                <form class="w-full ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Faculty Code</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-first-name" type="text" placeholder="XX105011" />
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Faculty Name</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs" id="grid-last-name" type="text" placeholder="Mathematics" />
                        </div>
                    </div>
                    
                </form>
                
            </div>
  )
          
}

export default Facultyanagementform