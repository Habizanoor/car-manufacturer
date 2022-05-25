import React from 'react';
import Footer from '../Shared/Footer';
import AnyQuery from './AnyQuery';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Popular from './Popular';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Popular></Popular>
            <AnyQuery></AnyQuery>
            <Footer></Footer>
        </div>
    );
};

export default Home;