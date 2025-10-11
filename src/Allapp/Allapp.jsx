import React, { useEffect } from 'react';
import downloadImg from '../assets/download.png';
import starImg from '../assets/star.png';
import { Link } from 'react-router-dom';

const Allapp = ({ allApp }) => {
    const { title, image, id, ratingAvg, downloads } = allApp;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className=''>
            <div className='transition-transform duration-300 hover:scale-105'>
            <Link to={`/appdetail/${id}`}>
                <div className="card bg-base-100 shadow-sm p-3 rounded h-[280px] lg:h-[380px]">
                    <figure>
                        <img className='rounded h-[100px] lg:h-[200px] object-contain' src={image} alt={title} />
                    </figure>
                    <div>
                        <h2 className='text-center text-xl'>
                            <div className="font-bold my-5">{title}</div>
                        </h2>
                        <div className="flex justify-between items-center text-green-400 font-bold">
                            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                                <img className='w-[15px] h-[15px]' src={downloadImg} alt="downloads" />
                                {downloads}
                            </div>
                            <div className="flex items-center gap-2 bg-orange-100 px-3 py-1 rounded text-orange-400">
                                <img className='w-[15px] h-[15px]' src={starImg} alt="rating" />
                                {ratingAvg}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
        </div>
    );
};

export default Allapp;
