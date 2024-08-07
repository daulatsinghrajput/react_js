
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState() 


  return (
 
     <div className='h-screen w-full duration-200 ' style = {{backgroundColor: color}}>
      <div className='flex flex-wrap  justify-center fixed bottom-12 inset-x-0 bg-white w-[80%] border rounded-2xl gap-3 m-auto'>
        <button className='py-1.5 px-4  rounded-2xl border bg-green-900 text-white font-bold capitalize m-2' onClick={()=>{setcolor("green")}} >green</button>
        <button className='py-1.5 px-4 rounded-2xl border bg-gray-900 text-white font-bold capitalize m-2' onClick={()=>{setcolor("gray")}} >gray</button>
        <button className='py-1.5 px-4 rounded-2xl border bg-yellow-900 text-white font-bold capitalize m-2' onClick={()=>{setcolor("yellow")}} >yellow</button>
        <button className='py-1.5 px-4 rounded-2xl border bg-red-900 text-white font-bold capitalize m-2' onClick={()=>{setcolor("red")}} >red</button>
        <button className='py-1.5 px-4 rounded-2xl border bg-black text-white font-bold capitalize m-2' onClick={()=>{setcolor("black")}} >black</button>
        <button className='py-1.5 px-4 rounded-2xl border bg-pink-900 text-white font-bold capitalize m-2' onClick={()=>{setcolor("pink")}} >pink</button>
        <button className='py-1.5 px-4 rounded-2xl border bg-blue-900 text-white font-bold capitalize m-2' onClick={()=>{setcolor("blue")}} >blue</button>
        <button className='py-1.5 px-4 rounded-2xl border bg-orange-900 text-white font-bold capitalize m-2' onClick={()=>{setcolor("orange")}} >orange</button>
      </div>
     </div>

  )
}

export default App
