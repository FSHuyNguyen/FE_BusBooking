import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardBody from '~/components/DashboardBody';
import { authAdminSelector } from '~/redux/selector';

const AdminDashboardPage = () => {
    const authAdminState = useSelector(authAdminSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authAdminState.isAuthenticated) return navigate('/auth-admin');
    }, [authAdminState.isAuthenticated]);

    return <DashboardBody />;
};

export default AdminDashboardPage;
