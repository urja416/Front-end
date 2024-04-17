import React from 'react'

const Inputs = () => {
  return (
    <div className='p-4 flex justify-between'>
      <input type="text " placeholder='Enter a task' className='p-3 focus:outline-none w-[80%] border bg-transparent border-slate-400 rounded-[3px]' />

      <div className=' cursor-pointer w-[70px] h-[50px] bg-[#e74c3c] text-white p-3 text-center rounded-[3px]'>
        Add
      </div>

    </div>
  )
}

export default Inputs
