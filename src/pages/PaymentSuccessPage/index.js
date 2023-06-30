import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PaymentSuccess from '~/components/PaymentSuccess';

const PaymentSuccessPage = () => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (!params.get('vnp_TxnRef')) return navigate('/');
    }, []);

    return <PaymentSuccess />;
};

export default PaymentSuccessPage;
