import React from 'react';
import Banner from '../components/Banner/Banner';
import Allaps from '../Allapps/Apps';
import { useLoaderData } from 'react-router';
import Allapps from '../Allapps/Allapps';
const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Allaps data={data}></Allaps>
            
            
        </div>
    );
};

export default Home;