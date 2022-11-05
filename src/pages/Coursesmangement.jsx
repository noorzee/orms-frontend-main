import React from 'react'
import { subjectmanagementform,Departmentanagementform,degreemanagementform,Facultyanagementform } from '../components'


const facultymanagement =() =>{
  return(<>
           <h1 className='font-semibold text-xl ml-4 mb-6 mt-6'>Faculty Management</h1>
           <div className='flex flex-shrink-0 m-0 flex-wrap justify-left gap-3 items-left w-full relative'>
                <div className='relative bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-6 rounded-2xl h-full  w-full shadow-sm'> 
                {Facultyanagementform()}

        </div>
        
    </div>
    </>
  );
};
const subjectmangemennt = ()=>{
  return(
  <>
  <h1 className='font-semibold text-xl ml-4 mb-6'>Subjects Management</h1>
  <div className='flex flex-shrink-0 m-0 flex-wrap justify-left gap-3 items-left w-full'>
       <div className='relative bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-6 rounded-2xl h-full  w-full shadow-sm'> 
       {subjectmanagementform()}
       <div className="overflow-x-auto relative shadow-md sm:rounded-lg overflow-scroll h-40 mt-6">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
                <th scope="col" className="py-3 px-6">
                    Subject Code
                </th>
                <th scope="col" className="py-3 px-6">
                    Subject Name
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
           01
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
       01
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
       01
       </td>
       <td className="py-4 px-6 text-right">
           <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
       </td>
   </tr>
</tbody>
</table>
</div>
</div>

</div></>);
};

const departmentmangemennt = ()=>{
  return(
  <>
  <h1 className='font-semibold text-xl ml-4 mb-6 mt-6'>Department Management</h1>
  <div className='flex flex-shrink-0 m-0 flex-wrap justify-left gap-3 items-left w-full'>
       <div className='relative bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-6 rounded-2xl h-full  w-full shadow-sm'> 
       {Departmentanagementform()}
       <div className="overflow-x-auto relative shadow-md sm:rounded-lg overflow-scroll h-40 mt-6">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
                <th scope="col" className="py-3 px-6">
                    Subject Code
                </th>
                <th scope="col" className="py-3 px-6">
                    Subject Name
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
           01
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
       01
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
       01
       </td>
       <td className="py-4 px-6 text-right">
           <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
       </td>
   </tr>
</tbody>
</table>
</div>
</div>

</div></>);
};


const degreemangemennt = ()=>{
    return(
    <>
    <h1 className='font-semibold text-xl ml-4 mb-6 mt-6'>Degree programs Management</h1>
    <div className='flex flex-shrink-0 m-0 flex-wrap justify-left gap-3 items-left w-full'>
         <div className='relative bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-6 rounded-2xl h-full  w-full shadow-sm'> 
         {degreemanagementform()}
         <div className="overflow-x-auto relative shadow-md sm:rounded-lg overflow-scroll h-40 mt-6">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
  <tr>
                  <th scope="col" className="py-3 px-6">
                      Subject Code
                  </th>
                  <th scope="col" className="py-3 px-6">
                      Subject Name
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
             01
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
         01
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
         01
         </td>
         <td className="py-4 px-6 text-right">
             <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
         </td>
     </tr>
  </tbody>
  </table>
  </div>
  </div>
  
  </div></>);
  };

const Coursesmangement = () => {
  return (
  <div className='mt-12 ml-8 mr-8'>
  <div className='w-1200'>
    {subjectmangemennt ()}
    {degreemangemennt ()}
    {departmentmangemennt ()}
    {facultymanagement ()}
    </div></div>
    
  )
}

export default Coursesmangement