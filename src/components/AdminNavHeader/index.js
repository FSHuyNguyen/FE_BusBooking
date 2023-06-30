import React from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/img';

const AdminNavHeader = () => {
    return (
        <div className="nav-header">
            <Link href="index.html" className="brand-logo">
                <div className="brand-title">
                    <img src={images.logo} alt="logo-busline" />
                </div>
            </Link>
        </div>
    );
};

export default AdminNavHeader;
