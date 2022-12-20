import React from 'react';
import OrderLeft from '../OrderLeft';
import '~/components/Order/style.css';

const Order = () => {
    return (
        <div className="order__container">
            <OrderLeft />
        </div>
    );
};

export default Order;
