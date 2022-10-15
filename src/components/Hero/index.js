import React from 'react';
import slider from '~/assets/slider';
import Image from '../Image';
import Search from '../Search';

const Hero = () => {
    return (
        <div className="search">
            <div className="grid container">
                <div className="search__heading">
                    <i className="search__heading-icon fas fa-route"></i>
                    <h1 className="search__heading-title">Bạn đã sẵn sàng cho chuyến đi chưa?</h1>
                </div>

                <section className="container_slideshow">
                    <div className="slideshow_wrapper">
                        <div className="slideshow">
                            <div className="slide_two slide">
                                <Image alt="Logo" className="slider-img" src={slider.slider1}></Image>
                            </div>
                            <div className="slide_three slide">
                                <Image alt="Logo" className="slider-img" src={slider.slider2}></Image>
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
