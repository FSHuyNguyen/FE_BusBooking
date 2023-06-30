import React from 'react';
import '~/components/AdminHeader/style.css';
import AdminHeaderBottom from '../AdminHeaderBottom';
import AdminNavHeader from '../AdminNavHeader';

const AdminHeader = () => {
    return (
        <>
            <AdminNavHeader />
            <AdminHeaderBottom />
        </>
    );
};

export default AdminHeader;
