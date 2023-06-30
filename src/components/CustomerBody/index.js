import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '~/components/CustomerBody/style.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix';

const CustomerBody = () => {
    const [users, setUsers] = useState([]);
    const [openDropdown, setOpenDropDown] = useState({});
    const [deleteUser, setDeleteUser] = useState(false);

    useEffect(() => {
        const fetchApiDeal = async () => {
            const res = await axios.get(process.env.REACT_APP_BASE_URL + '/auth/show-users', {});

            setUsers(res.data.users);
        };
        fetchApiDeal();
    }, [deleteUser]);

    const handleDeleteUser = (id) => {
        const deleteUser = async () => {
            const res = await axios.delete(process.env.REACT_APP_BASE_URL + '/auth/delete/' + id);
            if (res.status === 200) {
                Notify.success('Delete User Is Success', {
                    zindex: `999999`,
                    useIcon: false,
                    cssAnimationStyle: 'from-right',
                    cssAnimationDuration: 500,
                    distance: '30px',
                    showOnlyTheLastOne: true,
                    clickToClose: true,
                    fontSize: '16px',
                });
                setDeleteUser(true);
            }
        };
        Confirm.show('Delete User', 'Are you sure to delete this user?', 'Yes', 'No', () => {
            deleteUser();
        });
    };

    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="grid">
                    <div className="grid__row pages-titles">
                        <h2>Customers</h2>
                    </div>
                    <div className="grid__row">
                        <div className="grid__column-12">
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
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th className="ps-5" style={{ minWidth: '200px' }}>
                                                        Address
                                                    </th>
                                                    <th>Joined</th>
                                                </tr>
                                            </thead>
                                            <tbody id="customers">
                                                {users.map((user, index) => (
                                                    <tr key={index}>
                                                        <td className="py-2">
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" />
                                                            </div>
                                                        </td>
                                                        <td className="py-3">{user.name}</td>
                                                        <td className="py-2">{user.email}</td>
                                                        <td className="py-2">
                                                            {user.phone ? user.phone : 'Not Update'}
                                                        </td>
                                                        <td className="py-2">
                                                            {user.address ? user.address : 'Not Update'}
                                                        </td>
                                                        <td className="py-2">
                                                            {moment(
                                                                moment(user.updated_at).format(moment.HTML5_FMT.DATE),
                                                                'YYYY-MM-DD',
                                                            ).format('DD-MM-YYYY')}
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
                                                                            <Link
                                                                                className="dropdown-item text-danger"
                                                                                to={'/admin-customers'}
                                                                                onClick={() =>
                                                                                    handleDeleteUser(user.id)
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

export default CustomerBody;
