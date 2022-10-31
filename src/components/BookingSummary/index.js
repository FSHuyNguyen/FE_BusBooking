import React from 'react';
import '~/components/BookingSummary/style.css';
import BuyInformation from '../BuyInformation';
import PaymentMethod from '../PaymentMethod';

const BookingSummary = ({ orderInfor, user_id }) => {
    return (
        <>
            <div className="booking-summary-child container">
                <BuyInformation orderInfor={orderInfor} />
                <PaymentMethod orderInfor={orderInfor} user_id={user_id} />
            </div>
        </>
    );
};

export default BookingSummary;
