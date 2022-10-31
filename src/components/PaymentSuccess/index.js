import React, { useEffect } from 'react';
import '~/components/PaymentSuccess/style.css';
import TicketInformation from '../TicketInformation';
import StepLinePaymentSuccess from '../StepLinePaymentSuccess';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { authSelector } from '~/redux/selector';
import axios from 'axios';

const PaymentSuccess = () => {
    return (
        <div className="payment-header-container">
            <div className="payment-header-content">
                <h1>Thanh Toán Thành Công</h1>
            </div>
            <StepLinePaymentSuccess />
            <TicketInformation />
        </div>
    );
};

export default PaymentSuccess;
