import React from 'react';
import { Link } from 'react-router-dom';

function EachDetail({ title, image_url, population, region, capital, mode, code }) {

  return (
    <Link className={ "w-full flex flex-col rotate-0 cursor-pointer text-white bg-gray-700 rounded-bl-md rounded-br-md shadow-md hover:bg-gray-600 " + (mode ? ' bg-white text-black hover:bg-gray-100 ' : 'null')} 
      to={`/country/${code}`}
    >
      {/* image */}
      <div className='w-100 h-full object-cover'>
        <img src={image_url} alt={title} className='w-full h-40 object-cover rounded-tl-md rounded-tr-md' />
      </div>

      {/* little details */}
      <div className="p-4 pb-6">
        <h1 className='text-base font-bold mb-2'>{title}</h1>
        <p className='text-sm font-medium'>Population: <span className='font-light'>{population}</span></p>
        <p className='text-sm font-medium'>Region: <span className='font-light'>{region}</span></p>
        <p className='text-sm font-medium'>capital: <span className='font-light'>{capital}</span></p>
      </div>
    </Link>
  );
}

export default EachDetail;
