import React from 'react';
import BackToTop from '~/components/BackToTop';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const MainLayout = ({ children }) => {
    return (
        <div className="main">
            <Header />
            <div className="">{children}</div>
            <Footer />
            <BackToTop />
        </div>
    );
};

export default MainLayout;
