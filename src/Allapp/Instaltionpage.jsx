import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const InstallationPage = () => {
  const [installedApps, setInstalledApps] = useState([]);

  // Load installed apps from localStorage
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  // Handle uninstall
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("App Uninstalled Successfully!");
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <Toaster position="top-center" reverseOrder={false} />

      <h1 className="text-center font-bold text-4xl mb-10">
        My Installed Apps
      </h1>

      {installedApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-md rounded-xl p-5 text-center border border-gray-200 hover:shadow-lg transition"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h2 className="font-bold text-xl mb-2">{app.title}</h2>
              <p className="text-gray-500 text-sm mb-4">
                {app.description?.slice(0, 60)}...
              </p>
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
          You have no installed apps yet 😔
        </p>
      )}
    </div>
  );
};

export default InstallationPage;
