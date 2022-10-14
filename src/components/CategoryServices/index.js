import { Link } from 'react-router-dom';
import React from 'react';
import Image from '../Image';
import images from '~/assets/img';

const CategoryServices = () => {
    return (
        <div className="category-services">
            <div className="grid">
                <div className="services-list">
                    <Link className="services-item services-item--one">
                        <h3 className="services-heading">Review</h3>
                        <span className="services-description">Experience every journey</span>
                        <Image src={images.review} alt="Review PNG" className="services-img"></Image>
                    </Link>
                    <Link className="services-item services-item--two">
                        <h3 className="services-heading">Car rental</h3>
                        <span className="services-description">Prestige, quality and fast</span>
                        <Image src={images.carRental} alt="Review PNG" className="services-img"></Image>
                    </Link>
                    <Link className="services-item services-item--three">
                        <h3 className="services-heading">Seater car</h3>
                        <span className="services-description">Smoothness, superiority, safety and convenience</span>
                        <Image src={images.electricBus} alt="Review PNG" className="services-img"></Image>
                    </Link>
                    <Link className="services-item services-item--four">
                        <h3 className="services-heading">Sleeper car</h3>
                        <span className="services-description">Smoothness, superiority, safety and convenience</span>
                        <Image src={images.giuongNam} alt="Review PNG" className="services-img"></Image>
                    </Link>
                    <Link className="services-item services-item--fine ">
                        <h3 className="services-heading">Limousine car</h3>
                        <span className="services-description">Luxury and eleganty</span>
                        <Image src={images.limousine} alt="Review PNG" className="services-img"></Image>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryServices;
