import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../assets/download.png';
import starImg from '../assets/star.png';
import reviewImg from '../assets/review.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Appdetail = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find(app => app.id === appId);

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Check if already installed
    const storedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    const isInstalled = storedApps.find(a => a.id === appId);
    if (isInstalled) {
      setInstalled(true);
    }
  }, [appId]);

  if (!singleApp) {
    return <div className="text-center mt-20 text-red-500 font-bold">App Not Found or Invalid ID</div>;
  }

  const { title, image, description, companyName, size, ratingAvg, downloads, reviews, ratings } = singleApp;

  const handleInstall = () => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyInstalled = storedApps.find(a => a.id === singleApp.id);

    if (!alreadyInstalled) {
      storedApps.push(singleApp);
      localStorage.setItem("installedApps", JSON.stringify(storedApps));
      toast.success(`${title} Installed Successfully!`);
      setInstalled(true);
    } else {
      toast.error("Already Installed!");
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto mb-50 px-4">
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

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center">
        <div className="flex-shrink-0">
          <img
            className="h-[120px] ml-30 lg:ml-0 lg:h-[300px] w-auto object-contain"
            src={image}
            alt=""
          />
        </div>

        <div className="flex-1 text-center">
          <div className='lg:mr-50'>
            <h1 className="font-bold text-3xl mb-2">{title}</h1>
          <h3 className="font-semibold text-lg text-blue-500 mb-4">
            <span className="text-black">Developed by:</span> {companyName}
          </h3>
          </div>

          <hr className="my-10 text-gray-300" />

          <div className="flex flex-row sm:flex-row gap-10 lg:gap-40 mb-6 justify-start">
            <div className="text-center">
              <img className="mx-auto h-8 w-8" src={downloadImg} alt="Downloads" />
              <p className="font-semibold mt-1">Downloads</p>
              <p className="font-bold text-3xl">{downloads}</p>
            </div>
            <div className="text-center">
              <img className="mx-auto h-8 w-8" src={starImg} alt="Average Ratings" />
              <p className="font-semibold mt-1">Average Ratings</p>
              <p className="font-bold text-3xl">{ratingAvg}</p>
            </div>
            <div className="text-center">
              <img className="mx-auto h-8 w-8" src={reviewImg} alt="Total Reviews" />
              <p className="font-semibold mt-1">Total Reviews</p>
              <p className="font-bold text-3xl">{reviews}</p>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`btn lg:mr-35 btn-outline mt-4 px-8 py-2 font-bold border-none text-white transition-transform duration-300 transform hover:scale-105 
            ${installed
                ? 'bg-gray-400 cursor-not-allowed opacity-70'
                : 'bg-indigo-500 hover:bg-indigo-600'}`}
          >
            {installed ? 'Installed' : `Install Now (${size})`}
          </button>
        </div>
      </div>

      <hr className="my-15 text-gray-300" />

      {ratings && ratings.length > 0 && (
        <div className="mt-20">
          <h2 className="font-bold text-gray-700 text-3xl mb-5">Ratings</h2>
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

          <hr className="my-10 text-gray-300" />

          <div className="mt-10">
            <h3 className="font-bold text-3xl mb-5 text-gray-700">Description</h3>
            <p className="text-gray-500 text-lg leading-7">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appdetail;
