import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups/src';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Stacked, Pie, Button, LineChart, SparkLine,Updates,dashboard_results,Navbar,Sidebar,Header } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { insertMerge } from '@syncfusion/ej2/spreadsheet';

const Dashboard = () => {
  {Header()}
  return (
    <div className='mt-12 ml-8 mr-8'>
    <div className='w-1200'>
  <h1 className='font-semibold text-xl ml-4 mb-10'>Dashboard</h1>
  <div className='flex flex-shrink-0 m-3 flex-wrap justify-left gap-3 items-left w-full'>
          {earningData.map((item)=>(
            <div key={item.title} className='bg-white dark:text-gray-200
            dark:bg-secondary-dark-bg md:w-56 p-4  rounded-2xl'>
              <p>
                <span className='text-[40px] font-semibold'>
                  {item.amount}
                </span>
                <span className={'text-sm text-${item.pcColor} ml-2'}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
      </div>
    <div className='flex gap-4 items-left lg:flex-nowrap md:flex-nowrap sm:flex-wrap w-full m-0'>
    <div className='gap-10 sm:h-auto sm:w-auto md:w-1/2 md:h-96'>
      <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-6 rounded-2xl grid-cols-12 w-full flex-wrap'>
        <div className='flex justify-between object-left'>
          <p className='font-semibold text-xl'>GPA Trend</p>
          <div className='flex items-center gap-4'>
            <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
              <span><GoPrimitiveDot/></span>
              <span>Full Marks</span>
            </p>
            <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
              <span><GoPrimitiveDot/></span>
              <span>Your Marks</span>
            </p>
          </div>
        </div> 
        <div className='flex gap-5 mt-4 overflow-scroll flex-wrap'>
          <div className='flex object-right float-right '>
            <Stacked width="300" height="275" className='object-right '/>
            
          </div>
        </div>
        
      </div>
    </div>
    <div className=' items-left justify-center md:w-1/2'>
        {Updates ()}
        </div>
        </div>
        <div className=' relative bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-6 rounded-2xl h-full overflow-scroll flex w-full'>
          <div className=' flex-wrap place-content-between w-full grid-cols-12'>
            <div className='w-full grid-cols-12 relative'>
            <p className='font-semibold text-xl'>Recent Examination Results</p>
            <p className='text-sm text-gray-400'>Semester 3</p></div>
            <div><p className='text-xs text-gray-400  justify-between items-end'>Realeased date : 2022/02/11</p></div>
            <div className='w-full grid-cols-12 '>
            {dashboard_results ()}
            </div>
          
          </div>
         
         
        </div>
        </div>
  </div>
  )
}

export default Dashboard