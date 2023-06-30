import React, { useEffect, useState } from 'react';
import '~/components/PaymentSuccess/style.css';
import TicketInformation from '../TicketInformation';
import StepLinePaymentSuccess from '../StepLinePaymentSuccess';
import axios from 'axios';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const [params, setParams] = useSearchParams();
    const [dataOrder, setDataOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const insert_DB_Order = async () => {
            try {
                const res = await axios.post(process.env.REACT_APP_BASE_URL + '/order/update-order', {
                    transaction_id: params.get('vnp_TransactionNo'),
                    bank_code: params.get('vnp_BankCode'),
                    payment_date: params.get('vnp_PayDate'),
                    vnp_ResponseCode: params.get('vnp_ResponseCode'),
                    order_id: params.get('vnp_TxnRef'),
                });
                if (res.data.status === 200) {
                    setDataOrder(res.data.order);
                }
            } catch (error) {
                console.log(error);
            }
        };
        insert_DB_Order();
    }, []);

    return (
        <div className="payment-success-header-container">
            <div className="payment-success-header-content">
                <h1>Thanh Toán Thành Công</h1>
            </div>
            <StepLinePaymentSuccess />
            <TicketInformation dataOrder={dataOrder} />
        </div>
    );
};

export default PaymentSuccess;
