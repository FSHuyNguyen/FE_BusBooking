import images from '~/assets/img';
import Button from '../Button';
import Image from '../Image';
import '~/components/Sidebar/style.css';
import { authSelector } from '~/redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Auth/authSlice';

const Sidebar = ({ openMenu, setOpenActive }) => {
    const dispatch = useDispatch();
    const authState = useSelector(authSelector);
    return (
        <div className={`navbar__select ${openMenu && 'active'} container`}>
            <div className="navbar__select__remove " onClick={() => setOpenActive(false)}>
                <h2>Tài khoản cá nhân</h2>
                <span className="btn__remove-label">
                    <svg width="24" height="24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#1A202C"></path>
                    </svg>
                </span>
            </div>
            <div className="navbar__menu">
                {authState.isAuthenticated ? (
                    <div className="navbar__menu-user">
                        <Image
                            src={`${authState.user.image ? authState.user.image : images.userImg}`}
                            className="navbar__menu-img"
                            alt=""
                        ></Image>
                        <h6 className="navbar__menu-title">{authState.user.name}</h6>
                    </div>
                ) : (
                    ''
                )}

                <div className="navbar__menu-body">
                    <ul className="navbar__menu-list">
                        <li className="navbar__menu-item">
                            <Button to="/" className="navbar__menu-item-link">
                                <i className="bx bxs-user"></i>
                                <span>Trang cá nhân</span>
                            </Button>
                            <Button to="/" className="navbar__menu-item-link">
                                <i className="bx bxs-user"></i>
                                <span>Đơn hàng</span>
                            </Button>
                        </li>
                    </ul>
                    <ul className="navbar__menu-list">
                        <li className="navbar__menu-item">
                            <Button className="navbar__menu-item-link" onClick={() => setOpenActive(false)}>
                                <i className="bx bxs-home"></i>
                                <span>Trang chủ</span>
                            </Button>
                            <Button to="/" className="navbar__menu-item-link">
                                <i className="bx bxs-help-circle"></i>
                                <span>Hướng dẫn thanh toán</span>
                            </Button>
                            <Button to="/" className="navbar__menu-item-link">
                                <i className="bx bx-support"></i>
                                <span>Liên hệ</span>
                            </Button>
                        </li>
                    </ul>
                    <ul className="navbar__menu-list">
                        <li className="navbar__menu-item">
                            <Button to="/" className="navbar__menu-item-link">
                                <i className="bx bx-globe"></i>
                                <span>Ngôn ngữ</span>
                            </Button>
                            <Button to="/" className="navbar__menu-item-link">
                                <i className="bx bxs-palette"></i>
                                <span>Chủ đề</span>
                            </Button>
                        </li>
                    </ul>
                    {authState.isAuthenticated && (
                        <ul className="navbar__menu-list">
                            <li className="navbar__menu-item">
                                <Button onClick={() => dispatch(logout())} className="navbar__menu-item-link">
                                    <i className="bx bxs-log-out-circle"></i>
                                    <span>Đăng xuất</span>
                                </Button>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
