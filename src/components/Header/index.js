import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header" className="header">
            <div className="grid">
                <div className="navbar">
                    <div className="navbar__logo">
                        <label htmlFor="nav-input" id="icon-menu" className="icon-menu">
                            <i className="bx bx-menu"></i>
                        </label>
                        <a href="" className="navbar__logo-link navbar__logo-img">
                            <img
                                src="https://storage.googleapis.com/tripi-assets/mytour/icons/icon_logo_mytour_red.svg"
                                className="navbar__logo-img"
                                alt="Logo Bus"
                            />
                        </a>
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
                        <ul className="navbar__category"></ul>
                        <ul className="navbar__category navbar__category-responsive">
                            <li className="navbar__category-item navbar__category-home">
                                <i className="navbar__category-icon bx bx-home"></i>
                                <a href="" className="navbar__category-link">
                                    Trang chủ
                                </a>
                            </li>
                            <li className="navbar__category-item navbar__category-contact">
                                <i className="navbar__category-icon bx bx-phone"></i>
                                <a href="" className="navbar__category-link">
                                    Liên hệ
                                </a>
                            </li>
                            <li className="navbar__category-item navbar__category-cart">
                                <i className="navbar__category-icon bx bx-task"></i>
                                <a href="" className="navbar__category-link">
                                    Đơn hàng
                                </a>
                                <div id="dropdown-cart" className="navbar__category-cart-dropdown"></div>
                            </li>
                            <li id="Login/Register" className="navbar__category-item navbar__category-login">
                                <i className="navbar__category-icon bx bx-user"></i>
                                <a href="" className="navbar__category-link">
                                    Đăng nhập
                                </a>
                            </li>
                            <li
                                id="navbar__category-info"
                                className="navbar__category-item navbar__category-info"
                                style={{ display: 'none' }}
                            >
                                <div className="navbar__category-link navbar__category-info-link">
                                    <img src="./assets/img/user_img.png" className="navbar__category-info-img" alt="" />
                                </div>
                                <div className="navbar__category-info-dropdown">
                                    <div className="navbar__category-info-dropdown__header">
                                        <img
                                            src="./assets/img/user_img.png"
                                            className="navbar__category-info-img"
                                            alt=""
                                        />
                                        <span>Nguyen van huy</span>
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
    );
};

export default Header;
