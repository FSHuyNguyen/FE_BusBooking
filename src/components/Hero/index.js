import React from 'react';
import Search from '../Search';

const Hero = () => {
    return (
        <div className="search">
            <div className="grid">
                <div className="search__heading">
                    <i className="search__heading-icon fas fa-route"></i>
                    <h1 className="search__heading-title">Bạn đã sẵn sàng cho chuyến đi chưa?</h1>
                </div>

                <section className="container_slideshow">
                    <div className="slideshow_wrapper">
                        <div className="slideshow">
                            <div className="slide_two slide">
                                <img className="slider-img" src="./assets/slider/slidershow_01.jpg" />
                            </div>
                            <div className="slide_three slide">
                                <img className="slider-img" src="./assets/slider/slidershow_02.jpg" />
                            </div>
                        </div>
                    </div>
                </section>

                <Search />
            </div>
        </div>
    );
};

export default Hero;
