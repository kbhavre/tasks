import React, { useState } from 'react'

const Ques1 = () => {

    const [count, setCount] = useState(0);


  return (
    <div className=' bg-red-200 '>
      <h1 className='text-4xl px-4 py-2 text-center'>Question 1 : Counter App</h1>
        <div className='flex flex-col items-center'> 
            <h1 className='text-2xl'>{count}</h1>

            <div className='flex gap-3 my-4'>
            <button className='bg-purple-400 px-4 py-1 rounded-md ' onClick={()=>setCount(count+1)}>Increment</button>
            <button className='bg-purple-400 px-4 py-1 rounded-md ' onClick={()=> setCount(count-1)}>Decrement</button>
            </div>
            
        </div>

    </div>
  )
}

export default Ques1
