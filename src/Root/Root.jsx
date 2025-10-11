import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Spinner from '../Allapp/Spinner';

const Root = () => {
  const navigation = useNavigation();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (navigation.state === 'loading') {
      setShowSpinner(true);
    } else {
      const timeout = setTimeout(() => setShowSpinner(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [navigation.state]);

  return (
    <div className='relative'>
      <Navbar />

      {showSpinner && <Spinner />}

      <div className={showSpinner ? 'opacity-50 pointer-events-none' : ''}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;
