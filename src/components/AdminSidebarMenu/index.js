import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '~/components/AdminSidebarMenu/style.css';

const AdminSidebarMenu = () => {
    const [openMenu, setOpenMenu] = useState({
        dashboard: false,
        customer: false,
        order: false,
        trip: false,
        station: false,
        bus: false,
        driver: false,
        price: false,
        type_bus: false,
    });
    return (
        <>
            <ul className="metismenu">
                <li
                    className={`${openMenu.dashboard ? 'mm-active' : ''}`}
                    onClick={() => setOpenMenu({ ...openMenu, dashboard: !openMenu.dashboard })}
                >
                    <Link to="/admin-dashboard" className="has-arrow">
                        <i className="bx bxs-dashboard"></i>
                        <span className="nav-text">Dashboard</span>
                    </Link>
                    {openMenu.dashboard && (
                        <ul>
                            <li>
                                <Link to="/admin-dashboard" className="mm-active">
                                    Thông tin
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin-dashboard">Dự Án</Link>
                            </li>
                            <li>
                                <Link to="/admin-dashboard">Liên Hệ</Link>
                            </li>
                            <li>
                                <Link to="/admin-dashboard">Lịch</Link>
                            </li>
                            <li>
                                <Link to="/admin-dashboard">Tin Nhắn</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className={`${openMenu.customer ? 'mm-active' : ''}`}
                    onClick={() => setOpenMenu({ ...openMenu, customer: !openMenu.customer })}
                >
                    <Link to="/admin-customers" className="has-arrow">
                        <i className="bx bxs-user-circle"></i>
                        <span className="nav-text">Customer</span>
                    </Link>
                    {openMenu.customer && (
                        <ul>
                            <li>
                                <Link to="/admin-customers">Information</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className={`${openMenu.order ? 'mm-active' : ''}`}
                    onClick={() => setOpenMenu({ ...openMenu, order: !openMenu.order })}
                >
                    <Link to="/admin-orders" className="has-arrow">
                        <i className="bx bx-border-outer"></i>
                        <span className="nav-text">Order</span>
                    </Link>
                    {openMenu.order && (
                        <ul>
                            <li>
                                <Link to="/admin-orders">Information</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className={`${openMenu.trip ? 'mm-active' : ''}`}
                    onClick={() => setOpenMenu({ ...openMenu, trip: !openMenu.trip })}
                >
                    <Link to="/admin-trip" className="has-arrow">
                        <i className="bx bx-trip"></i>
                        <span className="nav-text">Trip</span>
                    </Link>
                    {openMenu.trip && (
                        <ul>
                            <li>
                                <Link to="/admin-create-trip" className="mm-active">
                                    Create Trip
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin-trip">Information</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className={`${openMenu.station ? 'mm-active' : ''}`}
                    onClick={() => setOpenMenu({ ...openMenu, station: !openMenu.station })}
                >
                    <Link to="/admin-station" className="has-arrow">
                        <i className="bx bx-station"></i>
                        <span className="nav-text">Station</span>
                    </Link>
                    {openMenu.station && (
                        <ul>
                            <li>
                                <Link to="/admin-create-station" className="mm-active">
                                    Create Station
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin-station">Information</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className={`${openMenu.bus ? 'mm-active' : ''}`}
                    onClick={() => setOpenMenu({ ...openMenu, bus: !openMenu.bus })}
                >
                    <Link to="/admin-bus" className="has-arrow">
                        <i className="bx bx-bus"></i>
                        <span className="nav-text">Bus</span>
                    </Link>
                    {openMenu.bus && (
                        <ul>
                            <li>
                                <Link to="/admin-create-bus" className="mm-active">
                                    Create Bus
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin-bus">Information</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className={`${openMenu.driver ? 'mm-active' : ''}`}
                    onClick={() => setOpenMenu({ ...openMenu, driver: !openMenu.driver })}
                >
                    <Link to="/admin-driver" className="has-arrow">
                        <i className="bx bx-user-plus"></i>
                        <span className="nav-text">Driver</span>
                    </Link>
                    {openMenu.driver && (
                        <ul>
                            <li>
                                <Link to="/admin-create-driver" className="mm-active">
                                    Create Driver
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin-driver">Information</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className={`${openMenu.price ? 'mm-active' : ''}`}
                    onClick={() => setOpenMenu({ ...openMenu, price: !openMenu.price })}
                >
                    <Link to="/admin-price" className="has-arrow">
                        <i className="bx bx-purchase-tag"></i>
                        <span className="nav-text">Price</span>
                    </Link>
                    {openMenu.price && (
                        <ul>
                            <li>
                                <Link to="/admin-create-price" className="mm-active">
                                    Create Price
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin-price">Information</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className={`${openMenu.type_bus ? 'mm-active' : ''}`}
                    onClick={() => setOpenMenu({ ...openMenu, type_bus: !openMenu.type_bus })}
                >
                    <Link to="/admin-typebus" className="has-arrow">
                        <i className="bx bxs-bus"></i>
                        <span className="nav-text">TypeBus</span>
                    </Link>
                    {openMenu.type_bus && (
                        <ul>
                            <li>
                                <Link to="/admin-create-typebus" className="mm-active">
                                    Create TypeBus
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin-typebus">Information</Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
            <div className="copyright">
                <p>
                    <strong>BusLine Admin</strong> © 2022 All Rights Reserved
                </p>
                <p className="fs-12">
                    Made by<span className="heart"></span> Huy Nguyen
                </p>
            </div>
        </>
    );
};

export default AdminSidebarMenu;
