import React from 'react';
import images from '~/assets/img';
import Button from '../../Button';
import Image from '../../Image';

const Login = ({ onChangeForm, onClose }) => {
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

                <form action="#" id="login-form">
                    <div className="field input-field form-group">
                        <input
                            type="email"
                            name="email"
                            rules="required|email"
                            placeholder="Nhập email"
                            className="form-control input"
                        />
                        <span className="form-message"></span>
                    </div>

                    <div className="field input-field form-group">
                        <input
                            type="password"
                            name="password"
                            rules="required|min:6"
                            placeholder="Nhập mật khẩu"
                            className="form-control password"
                        />
                        <span className="form-message"></span>
                        <i className="bx bxs-hide eye-icon"></i>
                    </div>

                    <div className="form-link">
                        <Button className="forgot-pass">Quên mật khẩu?</Button>
                    </div>

                    <div className="field button-field">
                        <Button>ĐĂNG NHẬP</Button>
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
                <Button className="field facebook">
                    <i className="bx bxl-facebook-circle facebook-icon"></i>
                    <span className="field-title">Đăng nhập bằng Facebook</span>
                </Button>
            </div>

            <div className="media-options">
                <Button className="field google">
                    <Image src={images.google} className="google-img"></Image>
                    <span className="field-title">Đăng nhập bằng Google</span>
                </Button>
            </div>
        </div>
    );
};

export default Login;
