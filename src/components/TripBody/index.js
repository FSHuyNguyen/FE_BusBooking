import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix';
import Button from '../Button';

const TripBody = () => {
    const [trip, setTrip] = useState([]);
    const [openDropdown, setOpenDropDown] = useState({});
    const [deleteTrip, setDeleteTrip] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const trips = async () => {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/trip', {});
                setTrip(res.data.all_trip);
            };
            trips();
        } catch (error) {
            console.log(error);
        }
        setDeleteTrip(false);
    }, [deleteTrip]);

    const handleDeleteTrip = (index, id) => {
        const deleteTrip = async () => {
            const res = await axios.delete(process.env.REACT_APP_BASE_URL + '/trip/' + id, {
                headers: {
                    Accept: 'application/json',
                    ContentType: 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
                },
            });
            if (res.status === 200) {
                Notify.success('Delete Trip Success', {
                    zindex: `999999`,
                    useIcon: false,
                    cssAnimationStyle: 'from-right',
                    cssAnimationDuration: 500,
                    distance: '30px',
                    showOnlyTheLastOne: true,
                    clickToClose: true,
                    fontSize: '16px',
                });
                setDeleteTrip(true);
            }
        };
        Confirm.show('Delete Trip', 'Are you sure to delete this Trip?', 'Yes', 'No', () => {
            deleteTrip();
            setOpenDropDown({ ...openDropdown, [index]: !openDropdown[index] });
        });
    };

    const handleUpdateTrip = (index, trip_id) => {
        trip_id &&
            navigate({
                pathname: '/admin-update-trip',
                search: `?trip_id=${trip_id}`,
            });
    };

    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="grid">
                    <div className="grid__row pages-titles">
                        <h2>Trip</h2>
                    </div>
                    <div className="grid__row">
                        <div className="grid__column-3"></div>
                        <div className="grid__column-6">
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
                                                    <th>Time Start</th>
                                                    <th>Time End</th>
                                                </tr>
                                            </thead>
                                            <tbody id="customers">
                                                {trip.map((trip, index) => (
                                                    <tr key={index}>
                                                        <td className="py-2">
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" />
                                                            </div>
                                                        </td>
                                                        <td className="py-3">{trip.time_start}</td>

                                                        <td className="py-2" style={{ marginRight: '40px' }}>
                                                            {trip.time_end}
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
                                                                                    handleUpdateTrip(index, trip.id)
                                                                                }
                                                                            >
                                                                                Update
                                                                            </Button>
                                                                        </div>
                                                                        <div className="py-2">
                                                                            <Link
                                                                                className="dropdown-item text-danger"
                                                                                to={'/admin-trip'}
                                                                                onClick={() =>
                                                                                    handleDeleteTrip(index, trip.id)
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
                        <div className="grid__column-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripBody;
