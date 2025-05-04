import React from 'react'

const Navbar = () => {
    return (
        <div className='mt-10 w-full flex justify-center items-center text-center gap-8 rounded-2xl'>
            <button className='w-26 hover:bg-blue-400 font-bold text-xl text-blue-600 rounded-xl border-blue-300 border-2'>Indian </button>
            <button className='w-24 hover:bg-blue-400 font-bold text-xl text-blue-600 rounded-xl border-blue-300 border-2'>Canadian </button>
            <button className='w-28 hover:bg-blue-400 font-bold text-xl text-shadow-white rounded-xl border-white bg-black text-gray-50 border-2'>American </button>
            <button className='w-28 hover:bg-blue-400 font-bold text-xl text-blue-600 rounded-xl border-green-300 border-2'> Thai</button>
            <button className='w-22 hover:bg-blue-400 font-bold text-xl text-sky-300 rounded-xl border-sky-400 border-2'> British</button>
            <button className='w-23 hover:bg-blue-400 font-bold text-xl text-white rounded-xl border-green-300 border-2'>Russian </button>
        </div>
    )
}

export default Navbar