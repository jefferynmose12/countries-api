import React, { useState, useEffect } from 'react';
import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { Link, useParams } from 'react-router-dom';

function Details({mode}) {
  const {code} = useParams();
  
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getCountry= async () => {
      const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
      setCountry(await response.json());
    }
    getCountry();
  }, [country])

  let name;
  let flag;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  let topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];

  
  if(country) {
    name = country.name;
    flag = country.flag;
    nativeName = country.nativeName;
    population = country.population;
    region = country.region;
    subregion = country.subregion;
    capital = country.capital;
    topLevelDomain = country.topLevelDomain;

    country.currencies?.forEach(currency => {
      currencies.push(currency.name)
    })

    country.languages?.forEach(language => {
      languages.push(language.name)
    })

    country.borders?.forEach(border => {
      borders.push(border)
    })
  }

  return (
    <div className='px-5 lg:px-28 py-10 h-100'>
      <Link to='/' className={" flex items-center justify-center bg-gray-700 h-10 w-32 shadow-lg text-white " + ( mode ? ' bg-white text-black ' : 'null')}>
        <HiOutlineArrowSmLeft />
        <p>Back</p>
      </Link>



      <div className='py-10 flex flex-col lg:flex-row gap-14 lg:gap-10 lg:items-center'>
        <div className='lg:w-1/2'>
          <img src={country.flag} className='w-full' alt={country.name} />
        </div>

        <div className={"lg:ml-auto flex flex-col gap-7 md:gap-12 text-white "  + ( mode ? ' text-black ' : 'null')}>
          <h1 className='font-bold text-2xl'>{country.name}</h1>

          <div className='flex flex-col md:flex-row text-sm font-bold gap-8 md:gap-20'>
            <div className='flex flex-col gap-1'>
              <p>Native Name: <span className='font-medium'>{country.nativeName}</span></p>
              <p>Population: <span className='font-medium'>{country.population}</span></p>
              <p>Region: <span className='font-medium'>{country.region}</span></p>
              <p>Sub Region: <span className='font-medium'>{country.subregion}</span></p>
              <p>Capital: <span className='font-medium'>{country.capital}</span></p>
            </div>
            <div className='flex flex-col gap-1'>
              <p>Top Level Domain: <span className='font-medium'>{country.topLevelDomain}</span></p>
              <p>Currencies:{" "} 
              {
                currencies.map(currency => {
                  if(currencies.indexOf(currency) !== currencies.length - 1) {
                    return (
                      <span className='p-1 font-medium'>
                        {currency},
                      </span>
                    )
                  } else {
                    return (
                      <span className='p-1 font-medium'>
                        {currency},
                      </span>
                    )
                  }
                })
              }
              </p>
              <p>Languages: {" "}
              {
                languages.map(language => {
                  if(languages.indexOf(language) !== languages.length - 1) {
                    return (
                      <span className='p-1 font-medium'>
                        {language},
                      </span>
                    )
                  } else {
                    return (
                      <span className='pl-1 font-medium'>
                        {language},
                      </span>
                    )
                  }
                })
              }
              </p>
            </div>
          </div>

          <div className='mt-5 flex items-center gap-1'>
            <p className='font-medium'>Border Countries: </p>
              { 
                borders.length > 0 ? (
                  borders.map(border => (
                    <button className={" font-light text-sm w-16 h-8 bg-gray-700 shadwo-md " + ( mode ? ' bg-white' : 'null')}>
                      {border}
                    </button>
                  ))) : (
                  <p>
                    No borders...
                  </p>
                )
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
