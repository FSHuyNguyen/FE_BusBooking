import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import '~/components/Payment/style.css';
import { authSelector } from '~/redux/selector';
import { getUser } from '../Auth/authSlice';
import BookingSummary from '../BookingSummary';
import StepLineContainer from '../StepLineContainer';

const Payment = () => {
    const [orderInfor, setOrderInfor] = useState([]);
    const dispatch = useDispatch();
    const authState = useSelector(authSelector);
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        dispatch(getUser());
    }, []);

    useEffect(() => {
        const orderInfor = async () => {
            if (authState.isAuthenticated) {
                try {
                    const res = await axios.post(process.env.REACT_APP_BASE_URL + '/order/show', {
                        user_id: authState.user.id,
                        type_ticket_id: params.get('type_ticket_id'),
                        seat_id: JSON.stringify(params.get('seat_id').split(',')),
                    });
                    setOrderInfor(res.data.order);
                } catch (error) {
                    console.log(error);
                }
            }
        };
        orderInfor();
    }, [authState.isAuthenticated, authState.loading]);

    return (
        <div>
            <div className="payment-header-container">
                <div className="payment-header-content">
                    <h1>Thanh Toán</h1>
                </div>
                <StepLineContainer />
                {authState.isAuthenticated && <BookingSummary orderInfor={orderInfor} user_id={authState.user.id} />}
            </div>
        </div>
    );
};

export default Payment;
