import React, { useState } from 'react';
import images from '~/assets/img';
import Image from '../Image';
import HandlessTippy from '@tippyjs/react/headless';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { logout } from '../Auth/authSlice';
import '~/components/User/style.css';
import DropDownData from '~/Data/DropDownData';

const User = (props) => {
    const dispatch = useDispatch();
    const [dropDown, setDropDown] = useState(false);

    const [history, setHistory] = useState([{ data: DropDownData }]);
    const current = history[history.length - 1];
    const handleCurrentBack = () => {
        setHistory([{ data: DropDownData }]);
    };

    const handleBackDropDown = () => {
        setDropDown(false);
        handleCurrentBack();
    };

    return (
        <li id="navbar__category-info" className="navbar__category-item navbar__category-info">
            <HandlessTippy
                visible={dropDown}
                interactive
                placement="bottom-end"
                zIndex="9999999"
                render={(attrs) => (
                    <div className="navbar__category-info-dropdown" tabIndex={'-1'} {...attrs}>
                        {history.length === 1 && (
                            <div className="navbar__category-info-dropdown__header">
                                <Image
                                    src={`${props.image ? props.image : images.userImg}`}
                                    className="navbar__category-info-img"
                                    alt=""
                                ></Image>
                                <span>{props.name}</span>
                            </div>
                        )}

                        {history.length > 1 && (
                            <div className="back-current" onClick={handleCurrentBack}>
                                <i className="arrow-left bx bxs-chevron-left"></i>
                                <h4>{current.title && current.title}</h4>
                            </div>
                        )}

                        <div id="dropdown_content">
                            {current.data.map((ul) => (
                                <ul className="navbar__category-info-dropdown__content" key={ul.id}>
                                    {ul.data.map((item) => {
                                        const isParent = !!item.children;
                                        const props = {};
                                        if (isParent) {
                                            props.onClick = () => handleAddMenu();
                                        } else if (item.url === '/logout') {
                                            props.onClick = () => dispatch(logout());
                                        } else {
                                            props.to = item.url;
                                        }

                                        const handleAddMenu = () => {
                                            setHistory([
                                                ...history,
                                                { title: item.children.title, data: item.children.data },
                                            ]);
                                        };
                                        return (
                                            <li
                                                {...props}
                                                className="navbar__category-info-dropdown-item"
                                                key={item.id}
                                            >
                                                <Button className="navbar__category-link sidebar-menu-item">
                                                    <i className={item.icon}></i>
                                                    {item.title}
                                                </Button>
                                                {isParent && <i className="arrow bx bxs-chevron-right"></i>}
                                            </li>
                                        );
                                    })}
                                </ul>
                            ))}
                        </div>
                    </div>
                )}
                onClickOutside={handleBackDropDown}
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
