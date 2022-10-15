import { Loading } from 'notiflix';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import images from '~/assets/img';
import Button from '~/components/Button';
import { authSelector } from '~/redux/selector';
import Auth from '../Auth';
import { getUser } from '../Auth/authSlice';
import Image from '../Image';
import User from '../User';
import '~/components/Header/style.css';

const Header = () => {
    const dispatch = useDispatch();
    const [onAuth, setOnAuth] = useState(false);
    const handleClose = () => setOnAuth(false);
    const authState = useSelector(authSelector);
    useEffect(() => {
        dispatch(getUser());
    }, []);
    console.log(onAuth);
    useEffect(() => {
        setOnAuth(false);
        authState.loading ? Loading.pulse({ zindex: 999999, svgColor: 'var(--primary-color)' }) : Loading.remove(500);
    }, [authState.isAuthenticated, authState.loading]);
    return (
        <>
            <header id="header" className="header">
                <div className="grid container">
                    <div className="navbar">
                        <div className="navbar__logo">
                            <Link to="/" className="navbar__logo-link navbar__logo-img">
                                <Image src={images.logo} className="navbar__logo-img" alt="Logo Bus"></Image>
                            </Link>
                        </div>

                        <div id="navbar" className="navbar__select">
                            <div className="navbar__select__remove navbar__remove-active">
                                <label htmlFor="nav-input" className="btn__remove" tabIndex="0" type="button">
                                    <span className="btn__remove-label">
                                        <svg width="24" height="24" fill="none">
                                            <path d="M18 6L6 18M6 6l12 12" stroke="#1A202C"></path>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <ul className="navbar__category navbar__category-responsive">
                                <li className="navbar__category-item navbar__category-home">
                                    <i className="navbar__category-icon bx bx-home"></i>
                                    <Link to="/" className="navbar__category-link">
                                        Trang chủ
                                    </Link>
                                </li>
                                <li className="navbar__category-item navbar__category-contact">
                                    <i className="navbar__category-icon bx bx-phone"></i>
                                    <Link to="/" className="navbar__category-link">
                                        Liên hệ
                                    </Link>
                                </li>
                                <li className="navbar__category-item navbar__category-cart">
                                    <i className="navbar__category-icon bx bx-task"></i>
                                    <Link to="/" className="navbar__category-link">
                                        Đơn hàng
                                    </Link>
                                </li>
                                {!authState.isAuthenticated ? (
                                    <Button version="secondary" onClick={() => setOnAuth(true)}>
                                        Đăng nhập
                                    </Button>
                                ) : (
                                    <User
                                        name={authState.user.name}
                                        image={authState.user.image}
                                        email={authState.user.email}
                                    />
                                )}
                            </ul>
                        </div>
                        <input type="checkbox" hidden id="nav-search" className="nav-search" />
                        <div className="navbar__search">
                            <div className="navbar__search__remove navbar__remove-active">
                                <label htmlFor="nav-search" className="btn__remove" tabIndex="0" type="button">
                                    <span className="btn__remove-label">
                                        <svg width="20" height="20" fill="none">
                                            <path d="M18 6L6 18M6 6l12 12" stroke="#1A202C"></path>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                            <div className="search-box">
                                <input type="text" placeholder="Nhập tên,địa điểm bán muốn đến?" />
                                <div className="search-box-icon">
                                    <i className="bx bx-search"></i>
                                </div>
                            </div>
                            <div className="underline-search"></div>
                            <div className="search-box__content">
                                <div className="search-box__content__headding">Phổ biến</div>
                                <div id="place_search" className="search-box__content__place"></div>
                            </div>
                        </div>
                        <label htmlFor="nav-input" id="icon-menu" className="icon-menu">
                            <i className="bx bx-menu"></i>
                        </label>
                    </div>
                </div>
            </header>
            {!authState.isAuthenticated && <Auth authOpen={onAuth} onClose={handleClose} />}
        </>
    );
};

export default Header;
