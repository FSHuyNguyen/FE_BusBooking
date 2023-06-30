import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Payment from '~/components/Payment';

const PaymentPage = () => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!params.get('type_ticket_id') || !params.get('seat_id')) return navigate('/');
    }, []);
    return (
        <>
            <Payment />
        </>
    );
};

export default PaymentPage;
