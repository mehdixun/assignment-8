import React from 'react';
import Banner from '../components/Banner/Banner';;
import { useLoaderData } from 'react-router';
import Allapps from '../Allapp/Allapps';
import Allapp from '../Allapp/Allapp';
import Apps from '../Allapp/Apps';
const Home = () => {
    
    
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Apps data={data}></Apps>
            
            
        </div>
    );
};

export default Home;