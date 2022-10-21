import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '~/components/CategoryDeal/style.css';
import ContentLoader from 'react-content-loader';

const CategoryDeal = () => {
    const [dataDeal, setDataDeal] = useState([]);
    useEffect(() => {
        const fetchApiDeal = async () => {
            const res = await axios.get(process.env.REACT_APP_BASE_URL + '/typeticket', {
                params: {
                    type: 'less',
                },
            });

            setDataDeal(res.data.ticket_sale);
        };
        fetchApiDeal();
    }, []);

    const numberFormat = (value) =>
        new Intl.NumberFormat('vn-IN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);

    return (
        <div className="category-deal container">
            <div className="grid ">
                <h2 className="deal-heading">Chuyến xe giá tốt nhất</h2>
                <div className="deal-list">
                    <div className="deal-item-content">
                        {(dataDeal.length === 0 && (
                            <>
                                <ContentLoader
                                    speed={2}
                                    width={'100%'}
                                    height={122}
                                    backgroundColor="#f5f5f5"
                                    foregroundColor="#ccc"
                                >
                                    <rect x="0" y="0" rx="8" ry="8" width="calc(20%)" height="120" />
                                    <rect x="171" y="20" rx="0" ry="0" width="calc(80%)" height="20" />
                                    <rect x="171" y="50" rx="0" ry="0" width="calc(80%)" height="35" />
                                </ContentLoader>
                                <ContentLoader
                                    speed={2}
                                    width={'100%'}
                                    height={122}
                                    backgroundColor="#f5f5f5"
                                    foregroundColor="#ccc"
                                >
                                    <rect x="0" y="0" rx="8" ry="8" width="calc(20%)" height="120" />
                                    <rect x="171" y="20" rx="0" ry="0" width="calc(80%)" height="20" />
                                    <rect x="171" y="50" rx="0" ry="0" width="calc(80%)" height="35" />
                                </ContentLoader>
                                <ContentLoader
                                    speed={2}
                                    width={'100%'}
                                    height={122}
                                    backgroundColor="#f5f5f5"
                                    foregroundColor="#ccc"
                                >
                                    <rect x="0" y="0" rx="8" ry="8" width="calc(20%)" height="120" />
                                    <rect x="171" y="20" rx="0" ry="0" width="calc(80%)" height="20" />
                                    <rect x="171" y="50" rx="0" ry="0" width="calc(80%)" height="35" />
                                </ContentLoader>
                                <ContentLoader
                                    speed={2}
                                    width={'100%'}
                                    height={122}
                                    backgroundColor="#f5f5f5"
                                    foregroundColor="#ccc"
                                >
                                    <rect x="0" y="0" rx="8" ry="8" width="calc(20%)" height="120" />
                                    <rect x="171" y="20" rx="0" ry="0" width="calc(80%)" height="20" />
                                    <rect x="171" y="50" rx="0" ry="0" width="calc(80%)" height="35" />
                                </ContentLoader>
                            </>
                        )) ||
                            dataDeal.map((item) => (
                                <div className="deal-item" key={item.id}>
                                    <Link to="/" className="deal-items">
                                        <div className="deal-item_brand">
                                            <img
                                                src={process.env.REACT_APP_IMAGE_URL + item.image}
                                                alt=""
                                                className="deal-item-img"
                                            />
                                        </div>
                                        <div className="deal-item__content">
                                            <div className="deal-item_info">
                                                <div className="deal-item_title">
                                                    <h2>{item.from}</h2>
                                                    <svg width="24" height="24" fill="none">
                                                        <path
                                                            d="M17.5 10.5L20 13M4 13h16"
                                                            stroke="#1A202C"
                                                            strokeWidth="1.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></path>
                                                    </svg>
                                                    <h2>{item.to}</h2>
                                                </div>
                                            </div>
                                            <div className="deal-item_info-middle">
                                                <div className="deal-item_container">
                                                    <i className="bx bx-time">{item.time}</i>
                                                    <div className="deal-item_price">
                                                        <i className="bx bxs-dollar-circle"></i>
                                                        <h3 className="deal-item_sale">{numberFormat(item.price)}</h3>
                                                    </div>
                                                    <div className="deal-item-details">
                                                        <i className="bx bxs-map"></i>
                                                        {item.distance}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDeal;
