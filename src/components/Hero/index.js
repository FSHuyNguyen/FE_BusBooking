import React from 'react';
import Search from '../Search';

const Hero = () => {
    return (
        <div className="search">
            <div className="grid container">
                <div className="search__heading">
                    <i className="search__heading-icon fas fa-route"></i>
                    <h1 className="search__heading-title">Bạn đã sẵn sàng cho chuyến đi chưa?</h1>
                </div>
                <Search />
            </div>
        </div>
    );
};

export default Hero;
