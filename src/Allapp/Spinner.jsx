import React from 'react';

const Spinner = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-70 z-50'>
      <div className='loader border-4 border-t-indigo-500 border-r-transparent rounded-full w-12 h-12 animate-spin'></div>
    </div>
  );
};

export default Spinner;
