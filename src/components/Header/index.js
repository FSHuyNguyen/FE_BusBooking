import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/img';
import Button from '~/components/Button';
import Auth from '../Auth';
import Image from '../Image';

const Header = () => {
    const [onAuth, setOnAuth] = useState(false);
    const handleClose = () => setOnAuth(false);
    return (
        <>
            <header id="header" className="header">
                <div className="grid">
                    <div className="navbar">
                        <div className="navbar__logo">
                            <label htmlFor="nav-input" id="icon-menu" className="icon-menu">
                                <i className="bx bx-menu"></i>
                            </label>
                            <Link to="/" className="navbar__logo-link navbar__logo-img">
                                <Image src={images.logo} className="navbar__logo-img" alt="Logo Bus"></Image>
                            </Link>
                            <label htmlFor="nav-search" className="icon-search">
                                <i className="bx bx-search"></i>
                            </label>
                        </div>
                        <input type="checkbox" hidden id="nav-input" className="nav-input" />

                        <label htmlFor="nav-input" className="nav__overlay"></label>

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
                                <Button version="secondary" onClick={() => setOnAuth(true)}>
                                    Đăng nhập
                                </Button>
                                <li
                                    id="navbar__category-info"
                                    className="navbar__category-item navbar__category-info"
                                    style={{ display: 'none' }}
                                >
                                    <div className="navbar__category-link navbar__category-info-link">
                                        <Image src={images.userImg} className="navbar__category-info-img"></Image>
                                    </div>
                                    <div className="navbar__category-info-dropdown">
                                        <div className="navbar__category-info-dropdown__header">
                                            <Image
                                                src={images.userImg}
                                                className="navbar__category-info-img"
                                                alt=""
                                            ></Image>
                                            <span>Nguyen Van Huy</span>
                                        </div>
                                        <div id="dropdown_content"></div>
                                    </div>
                                </li>
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
                    </div>
                </div>
            </header>
            <Auth authOpen={onAuth} onClose={handleClose} />
        </>
    );
};

export default Header;
