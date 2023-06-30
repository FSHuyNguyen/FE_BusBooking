import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix';
import Button from '../Button';

const PriceBody = () => {
    const [price, setPrice] = useState([]);
    const [openDropdown, setOpenDropDown] = useState({});
    const [deletePrice, setDeletePrice] = useState(false);
    const navigate = useNavigate();

    const numberFormat = (value) =>
        new Intl.NumberFormat('vn-IN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);

    useEffect(() => {
        try {
            const prices = async () => {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/price');
                setPrice(res.data.all_price);
            };
            prices();
        } catch (error) {
            console.log(error);
        }
        setDeletePrice(false);
    }, [deletePrice]);

    const handleDeletePrice = (index, id) => {
        const deletePrice = async () => {
            const res = await axios.delete(process.env.REACT_APP_BASE_URL + '/price/' + id, {
                headers: {
                    Accept: 'application/json',
                    ContentType: 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
                },
            });
            if (res.status === 200) {
                Notify.success('Delete Price Success', {
                    zindex: `999999`,
                    useIcon: false,
                    cssAnimationStyle: 'from-right',
                    cssAnimationDuration: 500,
                    distance: '30px',
                    showOnlyTheLastOne: true,
                    clickToClose: true,
                    fontSize: '16px',
                });
                setDeletePrice(true);
            }
        };
        Confirm.show('Delete Price', 'Are you sure to delete this Price?', 'Yes', 'No', () => {
            deletePrice();
            setOpenDropDown({ ...openDropdown, [index]: !openDropdown[index] });
        });
    };

    const handleUpdatePrice = (index, price_id) => {
        price_id &&
            navigate({
                pathname: '/admin-update-price',
                search: `?price_id=${price_id}`,
            });
    };
    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="grid">
                    <div className="grid__row pages-titles">
                        <h2>Price</h2>
                    </div>
                    <div className="grid__row">
                        <div className="grid__column-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th style={{ padding: '0.9375rem 6.5rem' }}>Price</th>
                                                    <th style={{ padding: '0.9375rem 6.5rem' }}>Station_Start</th>
                                                    <th style={{ padding: '0.9375rem 6.5rem' }}>Station_End</th>
                                                    <th style={{ padding: '0.9375rem 6.5rem' }}>Type_Bus</th>
                                                    <th style={{ padding: '0.9375rem 6.5rem' }}>Distance</th>
                                                </tr>
                                            </thead>
                                            <tbody id="customers">
                                                {price.map((price, index) => (
                                                    <tr key={index}>
                                                        <td className="py-3">{numberFormat(price.price)}</td>
                                                        <td className="py-3">{price.station_start}</td>
                                                        <td className="py-3">{price.station_end}</td>
                                                        <td className="py-3">{price.type_bus}</td>
                                                        <td className="py-2">
                                                            {price.distance}
                                                            <div className="dropdown">
                                                                <button
                                                                    className="btn-dropdown btn-primary tp-btn-light"
                                                                    type="button"
                                                                    onClick={() =>
                                                                        setOpenDropDown({
                                                                            [index]: !openDropdown[index],
                                                                        })
                                                                    }
                                                                >
                                                                    <span
                                                                        className="fs--1"
                                                                        style={{ pointerEvents: 'none' }}
                                                                    >
                                                                        <svg
                                                                            width="18px"
                                                                            height="18px"
                                                                            viewBox="0 0 24 24"
                                                                            version="1.1"
                                                                        >
                                                                            <g stroke="none" fill="none">
                                                                                <rect
                                                                                    x="0"
                                                                                    y="0"
                                                                                    width="24"
                                                                                    height="24"
                                                                                ></rect>
                                                                                <circle
                                                                                    fill="#000000"
                                                                                    cx="5"
                                                                                    cy="12"
                                                                                    r="2"
                                                                                ></circle>
                                                                                <circle
                                                                                    fill="#000000"
                                                                                    cx="12"
                                                                                    cy="12"
                                                                                    r="2"
                                                                                ></circle>
                                                                                <circle
                                                                                    fill="#000000"
                                                                                    cx="19"
                                                                                    cy="12"
                                                                                    r="2"
                                                                                ></circle>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                                {openDropdown[index] && (
                                                                    <div
                                                                        className="dropdown-menu dropdown-menu-end border py-0"
                                                                        style={{ margin: '0px' }}
                                                                    >
                                                                        <div className="py-2">
                                                                            <Button
                                                                                className="dropdown-item"
                                                                                onClick={() =>
                                                                                    handleUpdatePrice(index, price.id)
                                                                                }
                                                                            >
                                                                                Update
                                                                            </Button>
                                                                        </div>
                                                                        <div className="py-2">
                                                                            <Link
                                                                                className="dropdown-item text-danger"
                                                                                to={'/admin-price'}
                                                                                onClick={() =>
                                                                                    handleDeletePrice(index, price.id)
                                                                                }
                                                                            >
                                                                                Delete
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceBody;
