import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import downloadImg from '../assets/download.png'
import starImg from '../assets//star.png'

const InstallationPage = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("High-Low"); 
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  const parseSizeToMB = (size) => {
    if (!size) return 0;
    const lower = size.toLowerCase();
    if (lower.includes("gb")) {
      return parseFloat(lower) * 1024;
    } else if (lower.includes("mb")) {
      return parseFloat(lower); 
    } else {
      return parseFloat(lower) || 0;
    }
  };

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("App Uninstalled Successfully!");
  };


  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    let sortedApps = [...installedApps];

    if (e.target.value === "High-Low") {
      sortedApps.sort((a, b) => parseSizeToMB(b.size) - parseSizeToMB(a.size));
    } else {
      sortedApps.sort((a, b) => parseSizeToMB(a.size) - parseSizeToMB(b.size));
    }

    setInstalledApps(sortedApps);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <Toaster position="top-center" reverseOrder={false} />

      <h1 className="text-center font-bold text-4xl mb-5">
        Your Installed Apps
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      
      {installedApps.length > 0 && (
        <div className="flex justify-end mb-6">
          <label className="mr-2 font-semibold">Sort by Size:</label>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border border-gray-300 rounded-md px-3 py-1"
          >
            <option value="High-Low">High-Low</option>
            <option value="Low-High">Low-High</option>
          </select>
        </div>
      )}

      {installedApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-md rounded-xl p-5 text-center border border-gray-200 hover:shadow-lg transition"
            >
              <img
                src={app.image}
                alt=""
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h2 className="font-bold text-xl mb-2">{app.title}</h2>

              <div className="flex justify-between font-bold">
                <div className="text-gray-500 text-sm mb-4 flex gap-2">
                    <p><img className="h-[20px] w-[20px]" src={downloadImg} alt="" /></p>
                <p>{app.downloads}</p>
                </div>

               <div className="text-gray-500 text-sm mb-8 flex gap-2 ">
                    <p><img className="h-[20px] w-[20px]" src={starImg} alt="" /></p>
                <p>{app.ratingAvg}</p>
                </div>
                <p className="text-gray-500 text-sm mb-4">Size: {app.size}</p>
              </div>

              

              <button
                onClick={() => handleUninstall(app.id)}
                className="btn bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-md"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">
          You have no installed apps yet
        </p>
      )}
    </div>
  );
};

export default InstallationPage;
