import React from 'react';
import AdminSidebarMenu from '../AdminSidebarMenu';
import '~/components/AdminSidebar/style.css';

const AdminSidebar = () => {
    return (
        <div className="dlabnav">
            <div className="dlabnav-scroll">
                <AdminSidebarMenu />
            </div>
        </div>
    );
};

export default AdminSidebar;
