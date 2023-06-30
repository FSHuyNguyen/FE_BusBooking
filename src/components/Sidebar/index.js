import images from '~/assets/img';
import Button from '../Button';
import Image from '../Image';
import '~/components/Sidebar/style.css';
import { authSelector } from '~/redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Auth/authSlice';
import { disabledScroll, enabledScroll } from '~/utils/scrollBody';
import { useEffect, useState } from 'react';
import SidebarData from '~/Data/SidebarData';

const Sidebar = ({ openMenu, setOpenActive }) => {
    const dispatch = useDispatch();
    const authState = useSelector(authSelector);
    useEffect(() => {
        openMenu ? disabledScroll() : enabledScroll();
    }, [openMenu]);

    const [history, setHistory] = useState([{ data: SidebarData }]);
    const current = history[history.length - 1];
    const handleCurrentBack = () => {
        setHistory([{ data: SidebarData }]);
    };

    const handleRemoveSidebar = () => {
        setOpenActive(false);
        setTimeout(() => {
            handleCurrentBack();
        }, 500);
    };

    const handleLogOut = () => {
        setOpenActive(false);
        dispatch(logout());
    };

    return (
        <div className={`navbar__select ${openMenu && 'active'} container`}>
            <div className="navbar__select__remove">
                <div className="navbar__select-back">
                    {history.length > 1 && (
                        <i className="arrow-sidebar-left bx bxs-chevron-left" onClick={handleCurrentBack}></i>
                    )}
                    <h2>{(current.title && current.title) || 'Tài khoản cá nhân'}</h2>
                </div>
                <span className="btn__remove-label" onClick={handleRemoveSidebar}>
                    <svg width="24" height="24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="#1A202C"></path>
                    </svg>
                </span>
            </div>

            <div className="navbar__menu">
                {authState.isAuthenticated && history.length === 1 ? (
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
                    {authState.isAuthenticated && history.length === 1 ? (
                        <ul className="navbar__menu-list">
                            <li className="navbar__menu-item">
                                <Button to="/" className="navbar__menu-item-link">
                                    <i className="bx bxs-user"></i>
                                    <span>Trang cá nhân</span>
                                </Button>
                            </li>
                            <li className="navbar__menu-item">
                                <Button to="/" className="navbar__menu-item-link">
                                    <i className="bx bxs-cart"></i>
                                    <span>Đơn hàng</span>
                                </Button>
                            </li>
                        </ul>
                    ) : (
                        ''
                    )}
                    {current.data.map((ul) => (
                        <ul className="navbar__menu-list" key={ul.id}>
                            {ul.data.map((li) => {
                                const isParent = !!li.children;
                                const props = {};
                                if (isParent) {
                                    props.onClick = () => handleAddMenu();
                                } else if (li.url === '/') {
                                    props.onClick = () => setOpenActive(false);
                                } else {
                                    props.to = li.url;
                                }

                                const handleAddMenu = () => {
                                    setHistory([...history, { title: li.children.title, data: li.children.data }]);
                                };
                                return (
                                    <li {...props} className="navbar__menu-item" key={li.id}>
                                        <Button className="navbar__menu-item-link">
                                            <i className={li.icon}></i>
                                            <span>{li.title}</span>
                                        </Button>
                                        {isParent && <i className="sidebar-arrow bx bxs-chevron-right"></i>}
                                    </li>
                                );
                            })}
                        </ul>
                    ))}
                    {authState.isAuthenticated && history.length === 1 ? (
                        <ul className="navbar__menu-list">
                            <li className="navbar__menu-item">
                                <Button onClick={handleLogOut} className="navbar__menu-item-link">
                                    <i className="bx bx-log-out"></i>
                                    <span>Đăng xuất</span>
                                </Button>
                            </li>
                        </ul>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
