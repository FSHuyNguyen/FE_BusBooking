import React from 'react';
import StepLineContainer from '../StepLineContainer';
import '~/components/CustomerInformation/style.css';
import CustomerInforChild from '../CustormerInforChild';

const CustomerInformation = () => {
    return (
        <div className="customer-infor-container container">
            <div className="grid">
                <div className="customer-infor-content">
                    <h1>Thông tin khách hàng</h1>
                </div>
                <StepLineContainer />
                <CustomerInforChild />
            </div>
        </div>
    );
};

export default CustomerInformation;
