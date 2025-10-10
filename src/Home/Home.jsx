import React from 'react';
import Banner from '../components/Banner/Banner';
import Allaps from '../Allapp/Apps';
import { useLoaderData } from 'react-router';
import Allapps from '../Allapp/Allapps';
const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Allaps data={data}></Allaps>
            
            
        </div>
    );
};

export default Home;