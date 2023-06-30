import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/img';
import '~/components/OrderLeft/style.css';

const OrderLeft = () => {
    const [changeActive, setChangeActive] = useState({
        openDropdown: false,
        profile: false,
        address: false,
        changePassword: false,
    });

    return (
        <div className="order__container-left">
            <div className="order__container-left-info">
                <div className="order__container-left-info-image">
                    <Link to={'/'}>
                        <img className="busline-avatar__img" src={images.userImg} alt="avatar" />
                    </Link>
                    <div className="info-user">
                        <div className="info-user__name">Huy Nguyễn</div>
                        <div>
                            <Link to="/" className="change-info-user">
                                <svg width="12" height="12" viewBox="0 0 12 12" style={{ marginRight: '4px' }}>
                                    <path
                                        d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                                        fill="#9B9B9B"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                                <span>Sửa Hồ Sơ</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="order__container-left-progressbar">
                <div
                    className="stardust-dropdown"
                    onClick={() => {
                        setChangeActive({
                            openDropdown: !changeActive.openDropdown,
                            address: false,
                            changePassword: false,
                            profile: true,
                        });
                    }}
                >
                    <div className="stardust-dropdown__item-header">
                        <Link to={'/order'}>
                            <div className="stardust-dropdown__item-header-img">
                                <i className="bx bx-user"></i>
                            </div>
                            <div className="stardust-dropdown__item-header-content">
                                <span>Tài khoản của tôi</span>
                            </div>
                        </Link>
                    </div>
                    <div
                        className={`stardust-dropdown__item-body ${
                            changeActive.openDropdown ? 'stardust-dropdown__item-body--open' : ''
                        }`}
                    >
                        <div className="stardust-dropdown__item-body-content">
                            <Link
                                onClick={() =>
                                    setChangeActive({
                                        openDropdown: true,
                                        address: false,
                                        changePassword: false,
                                        profile: !changeActive.profile,
                                    })
                                }
                                to={'/order'}
                                className={`FEE-3D ${changeActive.profile && 'tH0d6d'}`}
                            >
                                Hồ Sơ
                            </Link>
                            <Link
                                onClick={() =>
                                    setChangeActive({
                                        openDropdown: true,
                                        changePassword: false,
                                        profile: false,
                                        address: !changeActive.address,
                                    })
                                }
                                to={'/order'}
                                className={`FEE-3D ${changeActive.address && 'tH0d6d'}`}
                            >
                                Địa Chỉ
                            </Link>

                            <Link
                                to={'/order'}
                                onClick={() =>
                                    setChangeActive({
                                        openDropdown: true,
                                        address: false,
                                        profile: false,
                                        changePassword: !changeActive.changePassword,
                                    })
                                }
                                className={`FEE-3D ${changeActive.changePassword && 'tH0d6d'}`}
                            >
                                Đổi Mật Khẩu
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="stardust-dropdown">
                    <div className="stardust-dropdown__item-header">
                        <Link to={'/order'}>
                            <div className="stardust-dropdown__item-header-img">
                                <i className="bx bx-task"></i>
                            </div>
                            <div className="stardust-dropdown__item-header-content">
                                <span>Vé đã đặt</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderLeft;
