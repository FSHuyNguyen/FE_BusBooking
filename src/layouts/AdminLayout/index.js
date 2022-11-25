import React, { useEffect, useState } from 'react';
import AdminHeader from '~/components/AdminHeader';
import 'src/layouts/AdminLayout/style.css';
import AdminSidebar from '~/components/AdminSidebar';

const AdminLayout = ({ children }) => {
    return (
        <>
            <div className="main-wrapper">
                <AdminHeader />
                <AdminSidebar />
                <div>{children}</div>
            </div>
        </>
    );
};

export default AdminLayout;
