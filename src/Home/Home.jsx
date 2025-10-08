import React from 'react';
import Banner from '../components/Banner/Banner';
import Allaps from '../Allapps/Allaps';
import { useLoaderData } from 'react-router';
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