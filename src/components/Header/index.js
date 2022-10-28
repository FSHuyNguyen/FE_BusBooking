import { Loading } from 'notiflix';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import images from '~/assets/img';
import Button from '~/components/Button';
import { authSelector } from '~/redux/selector';
import Auth from '../Auth';
import authSlice, { getUser } from '../Auth/authSlice';
import Image from '../Image';
import User from '../User';
import '~/components/Header/style.css';
import Sidebar from '../Sidebar';
import { disabledScroll, enabledScroll } from '~/utils/scrollBody';
import Notify from '../Notify';
import Skeleton from 'react-loading-skeleton';

const Header = ({}) => {
    const { modalToggle } = useSelector(authSelector);
    const dispatch = useDispatch();
    const authState = useSelector(authSelector);
    const [openMenu, setOpenMenu] = useState(false);
    const [openNotify, setOpenNotify] = useState(false);
    const handleClose = () => dispatch(authSlice.actions.modalToggle(false));

    useEffect(() => {
        dispatch(getUser());
    }, []);

    useEffect(() => {
        authState.isAuthenticated && dispatch(authSlice.actions.modalToggle(false));
        authState.loading ? Loading.pulse({ zindex: 999999, svgColor: 'var(--primary-color)' }) : Loading.remove(500);
    }, [authState.isAuthenticated, authState.loading]);

    openMenu ? disabledScroll() : enabledScroll();

    const handleOpenNotify = () => {
        setOpenNotify(!openNotify);
    };

    return (
        <>
            <header id="header" className="header container">
                <div className="grid">
                    <div className="navbar">
                        <div className="navbar__logo">
                            <Link to="/" className="navbar__logo-link navbar__logo-img">
                                <Image src={images.logo} className="navbar__logo-img" alt="Logo Bus"></Image>
                            </Link>
                        </div>
                        <label htmlFor="nav-input" className="icon-menu" onClick={() => setOpenMenu(true)}>
                            <i className="bx bx-menu"></i>
                        </label>
                        <Sidebar openMenu={openMenu} setOpenActive={setOpenMenu} />
                        <ul className="navbar__category">
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
                            {authState.loading ? (
                                <Skeleton circle width={40} height={40} />
                            ) : !authState.isAuthenticated ? (
                                <div className="btn-home">
                                    <Button onClick={() => dispatch(authSlice.actions.modalToggle(true))}>
                                        Đăng nhập
                                    </Button>
                                </div>
                            ) : (
                                <div style={{ display: 'flex' }}>
                                    <div className="notification-btn" onClick={handleOpenNotify}>
                                        <i className="bx bxs-bell"></i>
                                    </div>
                                    {openNotify && <Notify openNotify={setOpenNotify} />}
                                    <User
                                        name={authState.user.name}
                                        image={authState.user.image}
                                        email={authState.user.email}
                                    />
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </header>
            {!authState.isAuthenticated && <Auth authOpen={modalToggle} onClose={handleClose} />}
        </>
    );
};

export default Header;
