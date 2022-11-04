import React from 'react';
import { Button } from '.';
import avatar from '../data/avatar.jpg';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';



const UserSetting = () => {
const {bgColor,currentColor} = useStateContext();
  return (
    <div className='w-full'>
                <form class="w-full ">
                    <div className="flex flex-wrap -mx-3 mb-6 pl-3 gap-4 items-center">
                        <div><img className="rounded-full h-24 w-24" src={avatar} alt="user-profile" /></div>
                        <div><div><h1 className='mb-1 font-semibold text-xl'>Gayendra Usgoda</h1>
                        <p className='text-xs text-gray-400  justify-between items-end mb-1'>Student of Bachelor of Technology in Food Process Technolog</p>
                        <p className='text-xs text-gray-400  justify-between items-end mb-3'><b>ID :</b> SOF/18/B2/25</p>
                        </div>
                        </div>
                    </div>
                    <h1 className='mb-6 font-semibold text-sm text-white bg-gray-500 px-2 py-2'>Personal information</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">First Name</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-first-name" type="text" placeholder="XX105011" />
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Last Name</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs" id="grid-last-name" type="text" placeholder="Mathematics" />
                        </div>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Email Address</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-xs" id="grid-last-name" type="email" placeholder="Mathematics" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">ID</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-change-password" type="text" placeholder="" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Password</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs" id="grid-change-password" type="password" placeholder="*******" />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="file_input">Upload profile picture</label>
                            <input class="block w-full appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs"  aria-describedby="file_input_help" id="file_input" type="file" />
                            <p class="mt-1 text-xs text-gray-500 dark:text-gray-300 custom-file-upload" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        </div>
                    </div>
                    <h1 className='mb-6 font-semibold text-sm text-white bg-gray-500 px-2 py-2'>Academic information</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">Degree Program</label>
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
                        
                    </div>
                    <div className="mt-3 mb-6">
        <Button
          color="white"
          bgColor={currentColor}
          text="Submit"
          borderRadius="10px"
          width="full"
        />
      </div>
                </form>
                <hr></hr>
                
                <p className='font-bold mt-3 text-xs text-gray-500'> Important
                    <ul className='list-disc ml-4'>
                        <li className='font-normal'>Changing your degree program need to be confirm by the administrator. It may take while to change the degree program and once approval proccess is done, you will receive a notification</li>
                    </ul>
                </p>
            </div>
  );
};

export default UserSetting;