import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import images from '~/assets/img';
import Button from '../../Button';
import Image from '../../Image';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../authSlice';
import { authSelector } from '~/redux/selector';

const Register = ({ onChangeForm, onClose }) => {
    const dispatch = useDispatch();
    const authState = useSelector(authSelector);
    const [showPassword, setShowPassword] = useState(false);
    const [showReenterPassword, setShowReenterPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            reenter_password: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Vui lòng nhập tên'),
            email: Yup.string().email('Kiểm tra lại định dạng Email').required('Vui lòng nhập email'),
            password: Yup.string().min(6, 'Mật khẩu tối thiểu là 6 ký tự').required('Vui lòng nhập mặt khẩu'),
            reenter_password: Yup.string()
                .oneOf([Yup.ref('password')], 'Vui lòng xác nhận lại mật khẩu')
                .required('Mật khẩu chưa chính xác'),
        }),
        onSubmit: (values) => {
            dispatch(registerUser(values));
        },
    });

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowReenterPassword = () => {
        setShowReenterPassword(!showReenterPassword);
    };
    return (
        <div className={`form_modal signup`}>
            <div className="form-content">
                <header>ĐĂNG KÝ</header>
                <div className="form-content__remove btn-register__remove-active" onClick={onClose}>
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

                <form id="register-form" onSubmit={formik.handleSubmit}>
                    <div className="field input-field">
                        <input
                            type="text"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Nhập tên"
                            className="form-control input"
                        />
                        {(authState.notify.msg.name && (
                            <span className="form-message">{authState.notify.msg.name}</span>
                        )) ||
                            (formik.errors.name && formik.touched.name && (
                                <span className="form-message">{formik.errors.name}</span>
                            ))}
                    </div>
                    <div className="field input-field">
                        <input
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Nhập email"
                            className="form-control input"
                        />
                        {(authState.notify.msg.email && (
                            <span className="form-message">{authState.notify.msg.email}</span>
                        )) ||
                            (formik.errors.email && formik.touched.email && (
                                <span className="form-message">{formik.errors.email}</span>
                            ))}
                    </div>

                    <div className="field input-field">
                        <input
                            type={`${showPassword ? 'text' : 'password'}`}
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            id="register-password"
                            placeholder="Nhập mật khẩu"
                            className="form-control password"
                        />
                        {(authState.notify.msg.password && (
                            <span className="form-message">{authState.notify.msg.password}</span>
                        )) ||
                            (formik.errors.password && formik.touched.password && (
                                <span className="form-message">{formik.errors.password}</span>
                            ))}
                        <i
                            className={`${
                                showPassword ? 'bx bxs-show eye-icon' : 'bx bxs-hide eye-icon'
                            } bx bxs-hide eye-icon`}
                            onClick={handleShowPassword}
                        ></i>
                    </div>

                    <div className="field input-field">
                        <input
                            type={`${showReenterPassword ? 'text' : 'password'}`}
                            name="reenter_password"
                            value={formik.values.reenter_password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Nhập lại mật khẩu"
                            className="form-control password"
                        />
                        {(authState.notify.msg.reenter_password && (
                            <span className="form-message">{authState.notify.msg.reenter_password}</span>
                        )) ||
                            (formik.errors.reenter_password && formik.touched.reenter_password && (
                                <span className="form-message">{formik.errors.reenter_password}</span>
                            ))}
                        <i
                            className={`${
                                showReenterPassword ? 'bx bxs-show eye-icon' : 'bx bxs-hide eye-icon'
                            } bx bxs-hide eye-icon`}
                            onClick={handleShowReenterPassword}
                        ></i>
                    </div>

                    <div className="field button-field">
                        <Button type="submit">ĐĂNG KÝ</Button>
                    </div>
                </form>

                <div className="form-link">
                    <span>
                        Bạn đã có tài khoản?{' '}
                        <Button className="login-link" onClick={onChangeForm}>
                            Đăng nhập
                        </Button>
                    </span>
                </div>
            </div>

            <div className="line"></div>

            <div className="media-options">
                <Button className="field facebook">
                    <i className="bx bxl-facebook-circle facebook-icon"></i>
                    <span className="field-title">Đăng ký bằng Facebook</span>
                </Button>
            </div>

            <div className="media-options">
                <Button className="field google">
                    <Image src={images.google} className="google-img"></Image>
                    <span className="field-title">Đăng ký bằng Google</span>
                </Button>
            </div>
        </div>
    );
};

export default Register;
