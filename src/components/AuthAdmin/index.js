import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import images from '~/assets/img';
import '~/components/AuthAdmin/style.css';
import * as Yup from 'yup';
import { authAdminSelector } from '~/redux/selector';
import authAdminSlice, { loginAdmin } from './authAdminSlice';
import { Loading } from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const AuthAdmin = () => {
    const dispatch = useDispatch();
    const authAdminState = useSelector(authAdminSelector);
    const navigate = useNavigate();

    useEffect(() => {
        authAdminState.loading
            ? Loading.pulse({ zindex: 999999, svgColor: 'var(--admin-primary-color)' })
            : Loading.remove(500);
        if (authAdminState.isAuthenticated) {
            if (authAdminState.admin.role === '1') {
                navigate('/admin-dashboard');
            }
            if (authAdminState.admin.role === '0') {
                navigate('/auth-admin');
                Notify.failure('Bạn không có quyền truy cập tài nguyên này!', {
                    zindex: `999999`,
                    useIcon: false,
                    cssAnimationStyle: 'from-right',
                    cssAnimationDuration: 500,
                    distance: '30px',
                    showOnlyTheLastOne: true,
                    clickToClose: true,
                    fontSize: '16px',
                });
            }
        } else {
            navigate('/auth-admin');
        }
    }, [authAdminState.isAuthenticated, authAdminState.loading]);

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
            dispatch(loginAdmin(values));
        },
    });

    return (
        <div className="authentication">
            <div className="authentication-container">
                <div className="grid h-100">
                    <div className="grid__row h-100 justify-content-center h-100">
                        <div className="grid__column-5 m-3">
                            <div className="authentication-content">
                                <div className="grid__row">
                                    <div className="grid__column-12">
                                        <div className="auth-form-admin">
                                            <div className="auth-form-admin-header">
                                                <div className="auth-img">
                                                    <Link to="/auth-admin">
                                                        <img src={images.logo} alt="Logo-BusLine" />
                                                    </Link>
                                                </div>
                                                <h4>Sign up your account</h4>
                                            </div>
                                            <form className="auth-form-admin-body" onSubmit={formik.handleSubmit}>
                                                <div>
                                                    <label htmlFor="">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="auth-form-control"
                                                        value={formik.values.email}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Nhập email"
                                                    />
                                                    {(authAdminState.notify.msg.email && (
                                                        <span className="form-message">
                                                            {authAdminState.notify.msg.email}
                                                        </span>
                                                    )) ||
                                                        (formik.errors.email && formik.touched.email && (
                                                            <span className="form-message">{formik.errors.email}</span>
                                                        ))}
                                                </div>
                                                <div>
                                                    <label htmlFor="">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="auth-form-control"
                                                        value={formik.values.password}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        placeholder="Nhập password"
                                                    />
                                                    {(authAdminState.notify.msg.password && (
                                                        <span className="form-message">
                                                            {authAdminState.notify.msg.password}
                                                        </span>
                                                    )) ||
                                                        (formik.errors.password && formik.touched.password && (
                                                            <span className="form-message">
                                                                {formik.errors.password}
                                                            </span>
                                                        ))}
                                                </div>
                                                <div style={{ display: 'inline-block' }}>
                                                    {authAdminState.notify.msg.error && (
                                                        <span className="form-message">
                                                            {authAdminState.notify.msg.error}
                                                        </span>
                                                    )}
                                                </div>

                                                <div>
                                                    <Link to="/auth-admin">
                                                        <span>Forgot Password?</span>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <button type="submit" className="btn-admin-signin">
                                                        Sign In
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthAdmin;
