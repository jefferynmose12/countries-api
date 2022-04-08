import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import EachDetail from './EachDetail';

function Home({mode, countries, setCountries}) {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCountries()
  },[])

  const getCountries = async () => {
    const res = await fetch("https://restcountries.com/v2/all")
    const data = await res.json()
    setCountries(data);
    setIsLoading(false)
  }

  const searchCountry = async name => {
    if(name.length < 3 || name === '') return
    const res = await fetch(`https://restcountries.com/v2/name/${name}`);
    const data = await res.json();
    await setCountries(data);
  }

  const selectRegion = async region => {
    const res = await fetch(`https://restcountries.com/v2/region/${region}`);
    const data = await res.json();
    
    
    if(region === 'all') {
      try {
        getCountries();
      } catch(error) {
        console.log(error);
      }
      return;
    }
    await setCountries(data);
  };

  return (
    <div className='px-5 lg:px-28 py-8 flex flex-col gap-7'>
      <div className='flex flex-col gap-7 lg:gap-0 md:flex-row md:items-center'>

        {/* search bar */}
        <div className='w-full md:w-1/3'>
          <AiOutlineSearch className={" absolute mt-1 left-7 lg:left-32 top-24 text-white "  + ( mode ? ' text-black ' : 'null')} />
          <input placeholder='search for a country...' 
            type='name'
            className={" outline-none pl-10 flex justify-center py-2 w-full shadow-md rounded bg-gray-700 text-white placeholder:text-sm " + ( mode ? ' bg-white text-black ' : 'null')}
            onChange={(name) => searchCountry(name.target.value)}
          />
        </div>
        
        {/* filter for region */}
        <select 
          className={ "cursor-pointer outline-none py-2 px-2 md:ml-auto bg-gray-700 rounded shadow-md text-sm text-white font-medium w-44 "+ ( mode ? ' bg-white text-black ' : 'null')} 
          onChange={(region) => selectRegion(region.target.value)}
        >
          <option value="">Filter By Region</option>
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      {/* all countries */}
      {
        isLoading === true ? (
          <h1 className={'text-white md:text-xl lg:text-3xl font-bold' + ( mode ? ' text-black ' : 'null')}>Countries Loading!!!...</h1>
      ) : (
        <div className='my-3 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 justify-center'>
        {
          countries.map( (country) =>(
            <EachDetail
              key={country.alpha2Code}
              code={country.alpha2Code}
              title={country.name}
              image_url={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
              mode={mode}
              // showDetails={showDetails}
            />
          ))}
        </div>
      )
      }
    </div>
  );
}

export default Home;
