import React from 'react'
import Inputs from './component/Inputs'
import Box from './component/Box'





const App = () => {
  return (
    <div className="bg-teal-600 h-screen p-3 ">
      <div className='header text-center font-bold text-2xl m-2 text-white'>
        <h1>To Do List</h1>
      </div>

      <div className="mx-auto max-w-[550px] min-h-[470px] shadow-2xl bg-slate-300 m-5">

        <Inputs />
        <Box />


      </div>


    </div >



  )
}

export default App

