import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '~/components/Payment/style.css';
import { authSelector } from '~/redux/selector';
import { getUser } from '../Auth/authSlice';
import BookingSummary from '../BookingSummary';
import StepLineContainer from '../StepLineContainer';

const Payment = () => {
    const [orderInfor, setOrderInfor] = useState([]);
    const dispatch = useDispatch();
    const authState = useSelector(authSelector);

    useEffect(() => {
        dispatch(getUser());
    }, []);

    useEffect(() => {
        const orderInfor = async () => {
            const res = await axios.get(process.env.REACT_APP_BASE_URL + '/order/' + authState.user.id);
            setOrderInfor(res.data.order);
        };
        orderInfor();
    }, []);
    return (
        <div>
            <div className="payment-header-container">
                <div className="payment-header-content">
                    <h1>Thanh Toán</h1>
                </div>
                <StepLineContainer />
                <BookingSummary orderInfor={orderInfor} />
            </div>
        </div>
    );
};

export default Payment;
