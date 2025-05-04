import React, { useEffect, useState } from 'react';

const Store = () => {
  const [MealsData, setMealData] = useState([]);
  const [area, setArea] = useState("Indian");
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const FetchApiData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      const data = await api.json();
      setMealData(data.meals);
    };
    FetchApiData();
  }, [area]);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`);
    const data = await api.json();
    setMealData(data.meals);
  };

  const areas = [
    { label: "Indian", value: "Indian" },
    { label: "Canadian", value: "Canadian" },
    { label: "American", value: "American" },
    { label: "Thai", value: "Thai" },
    { label: "British", value: "British" },
    { label: "Russian", value: "Russian" },
  ];

  return (
    <>
      {/* Button Navbar */}
      <div className='mt-6 w-full flex flex-wrap justify-center items-center gap-4 px-4'>
        {areas.map((item) => (
          <button
            key={item.value}
            onClick={() => setArea(item.value)}
            className={`px-4 py-2 text-sm sm:text-base font-bold rounded-xl border-2 transition 
              ${area === item.value
                ? "bg-blue-600 text-white border-blue-700"
                : "text-blue-500 border-blue-300 hover:bg-blue-100"
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <form onSubmit={SubmitHandler} className='flex flex-wrap justify-center items-center gap-2 my-6 px-4'>
        <input
          onChange={(e) => setInputData(e.target.value)}
          className='bg-white w-60 sm:w-80 text-center h-10 font-semibold text-lg rounded-md border border-gray-300'
          type="text"
          placeholder="Search meal..."
        />
        <button className='px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition'>
          Go
        </button>
      </form>

      {/* Meals Grid */}
      <div className='min-h-screen flex justify-center items-center px-4'>
        <div className='max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
          {MealsData?.length > 0 ? (
            MealsData.map((data) => (
              <div key={data.idMeal} className='text-center'>
                <img
                  className='w-full h-78 object-cover border-4 hover:border-green-400 hover:scale-105 transition-all duration-300 border-blue-700 rounded-xl'
                  src={data.strMealThumb}
                  alt={data.strMeal}
                />
                <h1 className='text-lg text-sky-200 mt-2 font-semibold'>{data.strMeal}</h1>
              </div>
            ))
          ) : (
            <p className='text-white text-xl col-span-full text-center'>No meals found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Store;
