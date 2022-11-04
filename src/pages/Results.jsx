import React,{useState} from 'react'
import { Resultscard,Header} from '../components'
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';

const Results = () => {
  {Header()}
  const[Index,setIndex] = useState();
  return (
    <div className='mt-12 ml-8 mr-8'>
      <div className='w-1200'>
    <h1 className='font-semibold text-xl ml-4 mb-10'>Semester Results</h1>
      <div className='flex flex-shrink-0 m-3 flex-wrap justify-left gap-3 items-left w-full'>
      {earningData.map((item)=>(
            <div key={item.title} className='bg-white dark:text-gray-200
            dark:bg-secondary-dark-bg md:w-56 p-4  rounded-2xl shadow-sm'>
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
        {Resultscard()}
        </div>
    </div>
    
    
  )
}

export default Results