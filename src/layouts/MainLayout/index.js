import React from 'react';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const MainLayout = ({ children }) => {
    return (
        <div className="main">
            <Header />
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
