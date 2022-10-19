import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';
import '~/components/Notify/style.css';

const Notify = ({ openNotify }) => {
    return (
        <div className="notification">
            <ul className="notification-container">
                <div className="notification-header">
                    <h6>Thông báo</h6>
                    <span className="btn__remove-label" onClick={() => openNotify(false)}>
                        <svg width="24" height="24" fill="none">
                            <path d="M18 6L6 18M6 6l12 12" stroke="#1A202C"></path>
                        </svg>
                    </span>
                </div>
                <div className="notification-content">
                    <div>
                        <Link to="/" className="notification-list">
                            <Image
                                alt="Logo Bus"
                                className="notification-avatar"
                                src="/static/media/logo.b4bfbf7cba4e5bd81424.png"
                            />
                            <div className="notification-message">
                                <span>
                                    Cảm ơn thời gian qua đã luôn đồng hành cùng chúng tôi cho mỗi chuyến đi của bạn
                                    <i className="bx bxs-heart"></i>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default Notify;
