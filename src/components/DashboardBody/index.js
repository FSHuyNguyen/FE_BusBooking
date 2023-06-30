import React from 'react';
import '~/components/DashboardBody/style.css';
import DashboardLeftBody from '../DashboardLeftBody';
import DashboardRightBody from '../DashboardRightBody';

const DashboardBody = () => {
    return (
        <div className="content-body">
            <div className="container-fluid">
                <div className="grid__row">
                    <div className="grid__column-12">
                        <div className="grid__row">
                            <DashboardLeftBody />
                            <DashboardRightBody />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardBody;
