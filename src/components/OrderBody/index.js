import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import '~/components/CustomerBody/style.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix';
import '~/components/OrderBody/style.css';
import axios from 'axios';

const OrderBody = () => {
    const [orders, setOrders] = useState([]);
    const [openDropdown, setOpenDropDown] = useState({});
    const [deleteOrder, setDeleteOrder] = useState(false);

    useEffect(() => {
        try {
            const orders = async () => {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/order/show-orders', {});
                setOrders(res.data.orders);
            };
            orders();
        } catch (error) {
            console.log(error);
        }
    }, [deleteOrder]);

    const numberFormat = (value) =>
        new Intl.NumberFormat('vn-IN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);

    const handleDeleteOrder = (order_id) => {
        const deleteOrder = async () => {
            const res = await axios.delete(process.env.REACT_APP_BASE_URL + '/order/' + order_id);
            if (res.status === 200) {
                Notify.success('Delete Order Is Success', {
                    zindex: `999999`,
                    useIcon: false,
                    cssAnimationStyle: 'from-right',
                    cssAnimationDuration: 500,
                    distance: '30px',
                    showOnlyTheLastOne: true,
                    clickToClose: true,
                    fontSize: '16px',
                });
                setDeleteOrder(true);
            }
        };
        Confirm.show('Delete Order', 'Are you sure to delete this order?', 'Yes', 'No', () => {
            deleteOrder();
        });
    };

    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="grid">
                    <div className="grid__row pages-titles">
                        <h2>Orders</h2>
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
                                                    <th>Order</th>
                                                    <th>Date</th>
                                                    <th>Information</th>
                                                    <th>Status</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody id="customers">
                                                {orders.map((order, index) => (
                                                    <tr key={index}>
                                                        <td className="py-2">
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input" />
                                                            </div>
                                                        </td>
                                                        <td className="py-3">
                                                            #{order.order_id} by {order.customer_name.name}
                                                        </td>
                                                        <td className="py-2">
                                                            {order.payment_date !== null
                                                                ? order.payment_date
                                                                : 'Not Update'}
                                                        </td>
                                                        <td className="py-2">
                                                            {order.from}-{order.to}
                                                        </td>
                                                        <td className="py-2">
                                                            <span
                                                                className={`badge ${
                                                                    order.status === '1'
                                                                        ? 'badge-success'
                                                                        : 'badge-warning'
                                                                }`}
                                                            >
                                                                {order.status === '1' ? 'Completed' : 'Pending'}
                                                                <span>
                                                                    <i
                                                                        className={`${
                                                                            order.status === '1'
                                                                                ? 'bx bx-check'
                                                                                : 'bx bxs-hourglass-bottom'
                                                                        }`}
                                                                        style={{ paddingLeft: '0.2rem' }}
                                                                    ></i>
                                                                </span>
                                                            </span>
                                                        </td>
                                                        <td className="py-2">
                                                            <span>{numberFormat(order.price)}</span>
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
                                                                                to={'/admin-orders'}
                                                                                onClick={() =>
                                                                                    handleDeleteOrder(order.order_id)
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

export default OrderBody;
