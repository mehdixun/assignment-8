import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../assets/download.png';
import starImg from '../assets/star.png';
import reviewImg from '../assets/review.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,CartesianGrid} from 'recharts';

const Appdetail = () => {
    const { id } = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId);

    if (!singleApp) {
        return <div className="text-center mt-20 text-red-500 font-bold">App Not Found or Invalid ID</div>;
    }

    const { title, image, description, companyName, size, ratingAvg, downloads, reviews, ratings } = singleApp;

    const [installed, setInstalled] = useState(false);

    const handleInstall = () => {
        setInstalled(true);
        toast.success(`${title} Installed Successfully`);
    };

    return (
        <div className="max-w-[1200px] mx-auto my-20 px-4">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">

                <div className="">
                    <img className="h-[300px] w-auto" src={image} />
                </div>

                
                <div className="flex-1">
                    <h1 className="font-bold text-3xl mb-2">{title}</h1>
                    <h3 className="font-semibold text-lg text-blue-500 mb-4">
                        <span className="text-black">Developed by:</span> {companyName}
                    </h3>
                    <p className="text-gray-500 mb-4">Description: {description}</p>

                    <hr className='my-4 text-gray-400' />

                    <div className="flex flex-col sm:flex-row gap-20 mb-6 ">
                        <div className="text-center">
                            <img className="mx-auto h-8 w-8" src={downloadImg} alt="" />
                            <p className="font-semibold mt-1">Downloads</p>
                            <p className="font-bold text-4xl">{downloads}</p>
                        </div>
                        <div className="text-center">
                            <img className="mx-auto h-8 w-8" src={starImg} alt="" />
                            <p className="font-semibold mt-1">Average Ratings</p>
                            <p className="font-bold text-4xl">{ratingAvg}</p>
                        </div>
                        <div className="text-center">
                            <img className="mx-auto h-8 w-8" src={reviewImg} alt="" />
                            <p className="font-semibold mt-1">Total Reviews</p>
                            <p className="font-bold text-4xl">{reviews}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        
                        className={`btn btn-outline ml-40 mt-2 px-8 py-2 font-bold bg-green-400 border-none text-white transition-transform duration-300 transform hover:scale-105 ${installed ? 'cursor-not-allowed opacity-60 px-16' : ''
                            }`}
                    >
                        {installed ? 'Installed' : `Install Now (${size})`}
                    </button>
                </div>
            </div>

            
            
{ratings && ratings.length > 0 && (
  <div className="mt-20">
    <h2 className="font-bold text-3xl mb-5 ml-10">Ratings</h2>
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        layout="vertical"
        data={[...ratings].reverse()}
        margin={{ top: 10, right: 30, left: 40, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar 
          dataKey="count" 
          fill="orange" 
          barSize={25} 
          radius={[0, 10, 10, 0]} 
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
)}


        </div>
    );
};

export default Appdetail;
