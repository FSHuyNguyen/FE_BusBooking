import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrderBody from '~/components/OrderBody';
import { authAdminSelector } from '~/redux/selector';

const AdminOrderPage = () => {
    const authAdminState = useSelector(authAdminSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authAdminState.isAuthenticated) return navigate('/auth-admin');
    }, [authAdminState.isAuthenticated]);
    return <OrderBody />;
};

export default AdminOrderPage;
