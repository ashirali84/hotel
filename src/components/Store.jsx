import React, { useEffect, useState } from 'react'

const Store = () => {
    const [MealsData, setMealData] = useState([])
    const [area, setArea] = useState("Indian")
    const [inputData, setInputData] = useState("")

    useEffect(() => {
        const FetchApiData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
            const data = await api.json();

            setMealData(data.meals)

        };
        FetchApiData();

    }, [area])


    const SubmitHandler = async (e) => {
        e.preventDefault();
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`)
        const data = await api.json();
        // console.log(data.meals);
        setMealData(data.meals)

    }
    return (
        <>
            <div className='mt-10 w-full flex justify-center items-center text-center gap-8 rounded-2xl'>
                <button onClick={() => setArea("Indian")} className='w-26 hover:bg-blue-400 font-bold text-xl text-red-400 rounded-xl border-blue-300 border-2'>Indian </button>
                <button onClick={() => setArea("Canadian")} className='w-24 hover:bg-blue-400 font-bold text-xl text-blue-300 rounded-xl border-blue-300 border-2'>Canadian </button>
                <button onClick={() => setArea("american")} className='w-30 hover:bg-blue-400 font-bold text-xl text-shadow-white rounded-xl border-white bg-black text-gray-50 border-2'>American </button>
                <button onClick={() => setArea("thai")} className='w-28 hover:bg-blue-400 font-bold text-xl text-yellow-300 rounded-xl border-green-300 border-2'> Thai</button>
                <button onClick={() => setArea("british")} className='w-22 hover:bg-blue-400 font-bold text-xl text-sky-300 rounded-xl border-sky-400 border-2'> British</button>
                <button onClick={() => setArea("russian")} className='w-23 hover:bg-blue-400 font-bold text-xl text-white rounded-xl border-green-300 border-2'>Russian </button>
            </div>

            <form onSubmit={SubmitHandler} className='flex justify-center my-6 text-black'>
                <input onChange={(e) => setInputData(e.target.value)} className='bg-white w-60 text-center h-8 font-bold text-xl' type="text" />
                <button className='w-12 bg-blue-500'>Go</button>
            </form>


            {/* content part */}
            <div className='min-h-screen flex justify-center items-center'>
                <div className='max-w-6xl w-280 flex flex-wrap justify-center gap-8 py-10'>

                    {MealsData.map((data) => <div key={data.idMeal}>
                        <div className='text-center'>
                            <img className='w-50 h-60 border-3 hover:border-green-400 hover:scale-105 transition-all duration-300 border-blue-700 m-6' src={data.strMealThumb} alt="" />
                            <h1 className='text-xl w-45 text-center text-sky-200'>{data.strMeal}</h1>
                        </div>
                    </div>)}
                </div>
            </div>
            {/* i am shahid */}

        </>
    )
}

export default Store
