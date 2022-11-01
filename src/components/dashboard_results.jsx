import React from 'react'

const dashboard_results = () => {
  return (
    <div className='flex mt-2'>
        <table class="border-1 w-full ">
  <thead>
    <tr>
      <th width ='80%' className='bg-gray-200 border text-left px-2 py-2 text-xs'>Subject</th>
      <th width ='20%' className='bg-gray-200 border text-left px-2 py-2 text-xs'>Results</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='p-2 border text-left px-2 py-2 text-xs'>Mathematics</td>
      <td className='font-semibold p-2 border text-left px-2 py-2 text-xs'>A+</td>
    </tr>
    <tr>
    <td className='p-2 border text-left px-2 py-2 text-xs'>Mathematics</td>
      <td className='font-semibold p-2 border text-left px-2 py-2 text-xs'>A+</td>
    </tr>
    <tr>
    <td className='p-2 border text-left px-2 py-2 text-xs'>Mathematics</td>
      <td className='font-semibold p-2 border text-left px-2 py-2 text-xs'>A+</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default dashboard_results