import React, { Suspense, useEffect, useState } from 'react';
import Allapp from './Allapp';

const Allapps = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/allapps.json')
      .then(res => res.json())
      .then(data => setApps(data))
  }, []);

  const filteredApps = apps.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='text-center my-10'>
        <h1 className='font-bold text-[45px]'>Our All Applications</h1>
        <p className='text-gray-600'>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className='flex justify-between items-center my-5 flex-col lg:flex-row'>
        <h3 className='font-bold underline text-[18px] mb-5'>({filteredApps.length}) Apps found</h3>

        <label className='input px-0 lg:px-4 flex items-center gap-2 bg-gray-100 rounded-lg'>
          <svg
            className='h-[1.2em] opacity-50'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <g
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2.5'
              fill='none'
              stroke='currentColor'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <path d='m21 21-4.3-4.3'></path>
            </g>
          </svg>
          <input
            type='search'
            placeholder='Search Apps...'
            className='bg-transparent outline-none w-[200px]'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <Suspense fallback={<span>Apps are loading..</span>}>
        {filteredApps.length > 0 ? (
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-1 lg:gap-4'>
            {filteredApps.map(app => (
              <Allapp key={app.id} allApp={app} />
            ))}
          </div>
        ) : (
          <div className='text-center text-gray-500 my-10 text-lg'>
             No App Found
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default Allapps;
