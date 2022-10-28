import React from 'react';
import { useNavigate } from 'react-router-dom';
import '~/components/BookingSummary/style.css';
import Button from '../Button';
import BuyInformation from '../BuyInformation';
import PaymentMethod from '../PaymentMethod';

const BookingSummary = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="booking-summary-child container">
                <BuyInformation />
                <PaymentMethod />
            </div>
            <div className="booking-summary-buttons">
                <div className="booking-summart-left-button">
                    <button className="booking-summary-back-btn" onClick={() => navigate(-1)}>
                        <i className="bx bx-chevron-left"></i>
                        <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Back</font>
                    </button>
                </div>
                <div className="booking-summart-right-button">
                    <button className="booking-summary-pay-btn" onClick={() => navigate(-1)}>
                        <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Pay</font>
                    </button>
                </div>
            </div>
        </>
    );
};

export default BookingSummary;
