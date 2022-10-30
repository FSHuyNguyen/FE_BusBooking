import React from 'react';
import '~/components/BookingSummary/style.css';
import BuyInformation from '../BuyInformation';
import PaymentMethod from '../PaymentMethod';

const BookingSummary = ({ orderInfor }) => {
    return (
        <>
            <div className="booking-summary-child container">
                <BuyInformation orderInfor={orderInfor} />
                <PaymentMethod />
            </div>
        </>
    );
};

export default BookingSummary;
