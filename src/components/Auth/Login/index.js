import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import images from '~/assets/img';
import Button from '../../Button';
import Image from '../../Image';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loginUserByGoogle } from '../authSlice';
import { authSelector } from '~/redux/selector';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Loading } from 'notiflix';

const Login = ({ onChangeForm, onClose, onForgot }) => {
    const dispatch = useDispatch();
    const authState = useSelector(authSelector);
    const [showPassword, setShowPassword] = useState(false);
    const [onForgotPassword, setOnForgotPassword] = useState(false);
    const [loginUrl, setLoginUrl] = useState(null);
    const [openGoogle, setOpenGoogle] = useState(false);
    const [openFacebook, setOpenFacebook] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Kiểm tra lại định dạng Email').required('Vui lòng nhập email'),
            password: Yup.string().min(6, 'Mật khẩu tối thiểu là 6 ký tự').required('Vui lòng nhập mặt khẩu'),
        }),
        onSubmit: (values) => {
            dispatch(loginUser(values));
        },
    });

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleForgotPassword = () => {
        onForgot(true);
    };

    useEffect(() => {
        if (!openGoogle) return;
        const loginByGoogle = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/get-google-sign-in-url');
                if (res.data.status === 200) {
                    window.location.href = res.data.url;
                }
            } catch (error) {
                console.log(error);
            }
        };

        loginByGoogle();
    }, [openGoogle]);

    useEffect(() => {
        if (!openFacebook) return;
        const loginbyFacebook = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/get-facebook-sign-in-url');
                if (res.data.status === 200) {
                    window.location.href = res.data.url;
                }
            } catch (error) {
                console.log(error);
            }
        };
        loginbyFacebook();
    }, [openFacebook]);

    return (
        <div className={`form_modal login`}>
            <div className="form-content">
                <header>ĐĂNG NHẬP</header>
                <div className="form-content__remove btn__remove-active" onClick={onClose}>
                    <button className="btn__remove">
                        <span className="btn__remove-label">
                            <svg width="24" height="24" fill="none">
                                <path
                                    d="M18 6L6 18M6 6l12 12"
                                    stroke="#1A202C"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>

                <form id="login-form" onSubmit={formik.handleSubmit}>
                    <div className="field input-field form-group">
                        <input
                            type="email"
                            name="email"
                            rules="required|email"
                            placeholder="Nhập email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control input"
                        />
                        {(authState.notify.msg.email && (
                            <span className="form-message">{authState.notify.msg.email}</span>
                        )) ||
                            (formik.errors.email && formik.touched.email && (
                                <span className="form-message">{formik.errors.email}</span>
                            ))}
                    </div>

                    <div className="field input-field form-group">
                        <input
                            type={`${showPassword ? 'text' : 'password'}`}
                            name="password"
                            rules="required|min:6"
                            placeholder="Nhập mật khẩu"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control password"
                        />

                        {(authState.notify.msg.error && (
                            <span className="form-message">{authState.notify.msg.error}</span>
                        )) ||
                            (formik.errors.password && formik.touched.password && (
                                <span className="form-message">{formik.errors.password}</span>
                            )) ||
                            (authState.notify.msg.password && (
                                <span className="form-message">{authState.notify.msg.password}</span>
                            ))}
                        <i
                            className={`${
                                showPassword ? 'bx bxs-show eye-icon' : 'bx bxs-hide eye-icon'
                            } bx bxs-hide eye-icon`}
                            onClick={handleShowPassword}
                        ></i>
                    </div>

                    <div className="form-link">
                        <Button className="forgot-pass" onClick={handleForgotPassword}>
                            Quên mật khẩu?
                        </Button>
                    </div>
                    <div className="field button-field">
                        <Button type="submit">ĐĂNG NHẬP</Button>
                    </div>
                </form>

                <div className="form-link">
                    <span>
                        Chưa có tài khoản?{' '}
                        <Button className="signup-link" onClick={onChangeForm}>
                            Đăng ký tài khoản
                        </Button>
                    </span>
                </div>
            </div>

            <div className="line"></div>

            <div className="media-options">
                <Button className="field facebook" onClick={() => setOpenFacebook(!openFacebook)}>
                    <i className="bx bxl-facebook-circle facebook-icon"></i>
                    <span className="field-title">Đăng nhập bằng Facebook</span>
                </Button>
            </div>

            <div className="media-options">
                <Button className="field google" onClick={() => setOpenGoogle(!openGoogle)}>
                    <Image src={images.google} className="google-img"></Image>
                    <span className="field-title">Đăng nhập bằng Google</span>
                </Button>
            </div>
        </div>
    );
};

export default Login;
