import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import Button from '~/components/Button';
import * as Yup from 'yup';
import axios from 'axios';

const ForgotPassword = ({ onClose }) => {
    const [token, setToken] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Kiểm tra lại định dạng Email').required('Vui lòng nhập email'),
        }),
        onSubmit: (values) => {},
    });

    const handleInputToken = () => {
        if (formik.values.email === '' || (formik.errors.email && formik.touched.email)) {
            setToken(false);
        } else {
            setToken(true);
            const data = async () => {
                try {
                    const res = await axios.post(process.env.REACT_APP_BASE_URL + '/auth/reset-password', {
                        email: formik.values.email,
                    });
                    if (res.status === 200) {
                        console.log(res);
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            data();
        }
    };
    return (
        <div className={`form_modal Forgot-passoword`}>
            <div className="form-content">
                <header>Quên mật khẩu</header>
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

                <form onSubmit={formik.handleSubmit}>
                    <div className="field input-field form-group">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control input"
                        />
                        {formik.errors.email && formik.touched.email && (
                            <span className="form-message">{formik.errors.email}</span>
                        )}
                    </div>
                    <div className="field input-field form-group input-token">
                        <input
                            disabled={!token && true}
                            type="text"
                            name="token"
                            rules="required"
                            placeholder="Nhập mã xác nhận"
                            value={formik.values.token}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="form-control input"
                        />
                    </div>
                    <button
                        className={`btn-token ${
                            !(formik.values.email === '' || (formik.errors.email && formik.touched.email))
                                ? 'undisabled'
                                : 'disabled'
                        }`}
                        onClick={handleInputToken}
                    >
                        Gửi mã
                    </button>
                    {formik.errors.email && formik.touched.token && (
                        <span className="form-message form-message-token">{formik.errors.token}</span>
                    )}
                    <div className="field button-field">
                        <Button type="submit">Xác nhận</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
