import React, {useState} from 'react'
import Select from 'react-select'
import { Header } from '../components';

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

  

const Add_user = () => {
    {Header()}
    const [selected, setSelected] = useState("");
    const changeHandler = e => {
          setSelected(e.target.value)};
          console.log(selected);
  return (
    <div className='mt-12 ml-8 mr-8'>
    <div className='w-1200'>
    <h1 className='font-semibold text-xl ml-4 mb-10'>Add Users</h1>
    <div className='flex flex-shrink-0 m-0 flex-wrap justify-left gap-3 items-left w-full'>
         <div className='relative bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-6 rounded-2xl h-full  w-full shadow-sm'>
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
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div class="px-3 mb-6 md:mb-0 items-center justify-center align-middle">
                            <input id="student-radio-1" onChange={changeHandler} checked={selected === "Student"} type="radio" value="Student" name="Student" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="student-radio-1" class=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2">Student</label>
                        </div>
                        <div class=" px-3 mb-6 md:mb-0">
                            <input  id="Lecture-radio-2" onChange={changeHandler} checked={selected === "Lecture"} type="radio" value="Lecture" name="Lecture" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="Lecture-radio-2" class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2">Lecture</label>
                        </div>
                        <div class=" px-3 mb-6 md:mb-0">
                            <input  id="non-Academic-radio-3" onChange={changeHandler} checked={selected === "Non-Academic"} type="radio" value="Non-Academic" name="Non-Academic" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="non-Academic-radio-3" class="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2">Non-Academic</label>
                        </div>
                    </div>
                    <div aria-hidden={selected !== "Student" ? true : false}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-stu-ID">Student ID</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-first-name" type="text" placeholder="SOF/18/B1/01" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Batch</label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-xs" id="grid-state">
                                        <option>B1</option>
                                        <option>B2</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden={selected !== "Lecture" ? true : false}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-stu-ID">Lecture ID</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-first-name" type="text" placeholder="SOF/18/B1/01" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">Subjects</label>
                                <div className="relative">
                                <Select 
                                        styles={customStyles}
                                        options={subjectsoption}
                                        className = 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded  mb-3 leading-tight focus:outline-none focus:bg-white text-xs'
                                        isSearchable
                                        isMulti
                                        isClearable
                                        SelectContainer
                                        container
                                    />
                                    
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
        </div>
    </div>
    </div>
    </div>
  )
}

export default Add_user