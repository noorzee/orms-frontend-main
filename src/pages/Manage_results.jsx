import React, {useState} from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import {Collapse} from 'react-collapse';

import { Stacked, Pie, Button, LineChart, SparkLine,Updates,dashboard_results,Collapseble,AccordinationUI,lecture_items,add_final_marks,search_bar } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { insertMerge } from '@syncfusion/ej2/spreadsheet';


function Accordination(){
  const[Index,setIndex] = useState(false);
  
  
  const data =[
    {
      id:1,
      header: "Subject Name",
      innercontent:lecture_items(),
    },
    {
      id:2,
      header: "Subject Name 2",
      innercontent:lecture_items(),
    },
  ];
  return(
    <div className="flex flex-col justify-left w-full h-auto py-auto ">
    {data.map((data) => {
      return (
        <AccordinationUI
          title={data.header}
          Id={data.id}
          children={data.innercontent}
          Index={Index}
          setIndex={setIndex}
        ></AccordinationUI>
      );
    })}
  </div>
  );

}

const Coursesmangement = () => {
  const arg = {
    isFullyOpened: true || false, // `true` only when Collapse reached final height
    isFullyClosed: true || false, // `true` only when Collapse is fully closed and height is zero
    isOpened: true || false, // `true` if Collapse has any non-zero height
    containerHeight: 123, // current pixel height of Collapse container (changes until reaches `contentHeight`)
    contentHeight: 123 // determined height of supplied Content
  }
  return (
    <div className='mt-12 ml-8 mr-8'>
      <h1 className='font-semibold text-xl ml-4 mb-2'>Manage Results</h1>
      <p className='ml-4 text-xs text-gray-500 mb-10'>You can add, modify, and delete exam and assignment results from subject-wise using this portal.</p>
      {search_bar()}
      <div className='w-1200'>
      
      <div className='flex flex-shrink-0 m-0 flex-wrap justify-left gap-3 items-left w-full'>
         <div className='relative bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-6 rounded-2xl h-full w-full shadow-sm'>
      {Accordination()}
      {/* {Collapseble()} */}
      </div>
    </div>
          </div>
    </div>
  )
}

export default Coursesmangement