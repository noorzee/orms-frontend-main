import React,{useState} from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine,Updates,dashboard_results ,Acordination_nested,add_asignment_reults,add_final_marks} from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { insertMerge } from '@syncfusion/ej2/spreadsheet';


function NestedAccordination(){
  const[Index,setIndex] = useState();

   
  const data =[
    {
      id:1,
      header: "Add Asignments Marks",
      innercontent:add_asignment_reults(),
    },
    {
      id:2,
      header: "Add final Exam Marks",
      innercontent:add_final_marks(),
    },
  ];
  return(
    <div className="flex flex-col justify-left w-full h-auto py-auto ">
    {data.map((data) => {
      return (
        <Acordination_nested
          title={data.header}
          Id={data.id}
          children={data.innercontent}
          Index={Index}
          setIndex={setIndex}
        ></Acordination_nested>
      );
    })}
  </div>
  );

}


const lecture_items = () => {
  return (
    <div>
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
        <div className="flex flex-col justify-left w-full h-auto py-auto ml-3">
    {NestedAccordination()}
  </div>
         
          </div>
  )
}

export default lecture_items