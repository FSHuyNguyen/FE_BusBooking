import React, { useEffect } from 'react';
import CustomerBody from '~/components/CustomerBody';
import { useSelector } from 'react-redux';
import { authAdminSelector } from '~/redux/selector';
import { useNavigate } from 'react-router-dom';
const AdminCustomerPage = () => {
    const authAdminState = useSelector(authAdminSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authAdminState.isAuthenticated) return navigate('/auth-admin');
    }, [authAdminState.isAuthenticated]);
    return <CustomerBody />;
};

export default AdminCustomerPage;
