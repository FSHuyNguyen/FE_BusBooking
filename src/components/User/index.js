import React, { useState } from 'react';
import images from '~/assets/img';
import Image from '../Image';
import HandlessTippy from '@tippyjs/react/headless';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { logout } from '../Auth/authSlice';
import '~/components/User/style.css';

const User = (props) => {
    const dispatch = useDispatch();
    const [dropDown, setDropDown] = useState(false);
    return (
        <li id="navbar__category-info" className="navbar__category-item navbar__category-info">
            <HandlessTippy
                visible={dropDown}
                interactive
                placement="bottom"
                zIndex="9999999"
                render={(attrs) => (
                    <div className="navbar__category-info-dropdown" tabIndex={'-1'} {...attrs}>
                        <div className="navbar__category-info-dropdown__header">
                            <Image
                                src={`${props.image ? props.image : images.userImg}`}
                                className="navbar__category-info-img"
                                alt=""
                            ></Image>
                            <span>{props.name}</span>
                        </div>
                        <div id="dropdown_content">
                            <ul className="navbar__category-info-dropdown__content">
                                <li>
                                    <Button to={'/'} className="navbar__category-link sidebar-menu-item">
                                        <i className="bx bx-user"></i>Hồ sơ
                                    </Button>
                                </li>
                                <li>
                                    <Button to={'/'} className="navbar__category-link sidebar-menu-item">
                                        <i className="bx bxs-train"></i>Vé đã đặt
                                    </Button>
                                </li>
                            </ul>
                            <ul className="navbar__category-info-dropdown__content">
                                <li>
                                    <Button to={'/'} className="navbar__category-link sidebar-menu-item">
                                        <i className="bx bx-palette"></i>Chủ đề
                                    </Button>
                                </li>
                                <li>
                                    <Button to={'/'} className="navbar__category-link sidebar-menu-item">
                                        <i className="bx bx-globe"></i>Ngôn ngữ
                                    </Button>
                                </li>
                            </ul>
                            <ul className="navbar__category-info-dropdown__content">
                                <li>
                                    <Button onClick={() => dispatch(logout())} className="navbar__category-link">
                                        <i className="bx bx-log-out"></i>Đăng xuất
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                onClickOutside={() => setDropDown(false)}
            >
                <div className="navbar__category-link navbar__category-info-link" onClick={() => setDropDown(true)}>
                    <Image
                        src={`${props.image ? props.image : images.userImg}`}
                        className="navbar__category-info-img"
                    ></Image>
                </div>
            </HandlessTippy>
        </li>
    );
};

export default User;
