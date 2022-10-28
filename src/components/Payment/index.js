import React from 'react';
import '~/components/Payment/style.css';
import BookingSummary from '../BookingSummary';
import StepLineContainer from '../StepLineContainer';

const Payment = () => {
    return (
        <div>
            <div className="payment-header-container">
                <div className="payment-header-content">
                    <h1>Thanh Toán</h1>
                </div>
                <StepLineContainer />
                <BookingSummary />
            </div>
        </div>
    );
};

export default Payment;
