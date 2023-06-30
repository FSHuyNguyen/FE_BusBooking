import React from 'react';
import CategoryDeal from '~/components/CategoryDeal';
import CategoryServices from '~/components/CategoryServices';
import CategoryStatistic from '~/components/CategoryStatistic';
import Hero from '~/components/Hero';

const Home = () => {
    return (
        <>
            <Hero />
            <CategoryServices />
            <CategoryDeal />
            <CategoryStatistic />
        </>
    );
};

export default Home;
