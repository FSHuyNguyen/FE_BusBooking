import React from 'react';
import { Link } from 'react-router-dom';
import '~/components/Footer/style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="grid container">
                <div className="footer-nav">
                    <div className="footer-menu">
                        <div className="footer-menu__list">
                            <Link to="/" className="footer-menu__item">
                                Introduce
                                <span className="underline footer-menu__item--underline"></span>
                            </Link>
                            <Link to="/" className="footer-menu__item">
                                Contact
                                <span className="underline footer-menu__item--underline"></span>
                            </Link>
                            <Link to="/" className="footer-menu__item">
                                Video
                                <span className="underline footer-menu__item--underline"></span>
                            </Link>
                            <Link to="/" className="footer-menu__item">
                                Download
                                <span className="underline footer-menu__item--underline"></span>
                            </Link>
                            <Link to="/" className="footer-menu__item">
                                Recruitment
                                <span className="underline footer-menu__item--underline"></span>
                            </Link>
                            <Link to="/" className="footer-menu__item">
                                Image
                                <span className="underline footer-menu__item--underline"></span>
                            </Link>
                            <Link to="/" className="footer-menu__item">
                                Go to page
                                <span className="underline footer-menu__item--underline"></span>
                            </Link>
                        </div>
                        <h5 className="footer-menu__copy-right">© 2022 Bus Lines</h5>
                    </div>
                    <div className="footer-social">
                        <div className="footer-social__list">
                            <Link href="https://www.youtube.com/" className="footer-social__item">
                                <i className="bx bxl-youtube"></i>
                            </Link>
                            <Link href="https://www.facebook.com/" className="footer-social__item">
                                <i className="bx bxl-facebook-circle"></i>
                            </Link>
                            <Link href="https://www.google.com/" className="footer-social__item">
                                <i className="bx bxl-google"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
