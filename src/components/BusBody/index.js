import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix';
import Button from '../Button';

const BusBody = () => {
    const [bus, setBus] = useState([]);
    const [openDropdown, setOpenDropDown] = useState({});
    const [deleteBus, setDeleteBus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const buses = async () => {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/bus');
                setBus(res.data.all_bus);
            };
            buses();
        } catch (error) {
            console.log(error);
        }
        setDeleteBus(false);
    }, [deleteBus]);

    const handleDeleteBus = (index, id) => {
        const deleteBus = async () => {
            const res = await axios.delete(process.env.REACT_APP_BASE_URL + '/bus/' + id, {
                headers: {
                    Accept: 'application/json',
                    ContentType: 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
                },
            });
            if (res.status === 200) {
                Notify.success('Delete Bus Success', {
                    zindex: `999999`,
                    useIcon: false,
                    cssAnimationStyle: 'from-right',
                    cssAnimationDuration: 500,
                    distance: '30px',
                    showOnlyTheLastOne: true,
                    clickToClose: true,
                    fontSize: '16px',
                });
                setDeleteBus(true);
            }
        };
        Confirm.show('Delete Bus', 'Are you sure to delete this Bus?', 'Yes', 'No', () => {
            deleteBus();
            setOpenDropDown({ ...openDropdown, [index]: !openDropdown[index] });
        });
    };

    const handleUpdateBus = (index, bus_id) => {
        bus_id &&
            navigate({
                pathname: '/admin-update-bus',
                search: `?bus_id=${bus_id}`,
            });
    };

    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="grid">
                    <div className="grid__row pages-titles">
                        <h2>Buses</h2>
                    </div>
                    <div className="grid__row">
                        <div className="grid__column-2"></div>
                        <div className="grid__column-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>
                                                        <div className="form-check custom-checkbox mx-2">
                                                            <input type="checkbox" className="form-check-input" />
                                                        </div>
                                                    </th>
                                                    <th>Name</th>
                                                    <th>License Plates</th>
                                                    <th>Loại xe</th>
                                                </tr>
                                            </thead>
                                            <tbody id="customers">
                                                {bus.map((bus, index) => (
                                                    <tr key={index}>
                                                        <td className="py-2">
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" />
                                                            </div>
                                                        </td>
                                                        <td className="py-3">{bus.name}</td>
                                                        <td className="py-3">{bus.license_plates}</td>
                                                        <td className="py-2">
                                                            {bus.type_bus_name}
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
                                                                                    handleUpdateBus(index, bus.id)
                                                                                }
                                                                            >
                                                                                Update
                                                                            </Button>
                                                                        </div>
                                                                        <div className="py-2">
                                                                            <Link
                                                                                className="dropdown-item text-danger"
                                                                                to={'/admin-bus'}
                                                                                onClick={() =>
                                                                                    handleDeleteBus(index, bus.id)
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
                        <div className="grid__column-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusBody;
