import React from 'react';
import { useNavigate } from 'react-router-dom';
import '~/components/TicketInformation/style.css';

const TicketInformation = () => {
    const navigate = useNavigate();
    const numberFormat = (value) =>
        new Intl.NumberFormat('vn-IN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);

    return (
        <div className="booking-summary-child container">
            <div className="buy-infor-container">
                <div className="title-bar-bg">
                    <p className="title-txt">Thông tin vé xe</p>
                </div>
                <div className="customer-infor-booking-container">
                    <div className="customer-infor-booking-section">
                        <div className="section-title">
                            <p className="section-title-txt">Thông tin khách hàng</p>
                        </div>
                        <div className="section-body">
                            <div className="grid__row">
                                <div className="grid__column-6">
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Họ tên:</div>
                                        <div className="grid__column-8 body-text-right">Nguyen van Huy</div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Số điện thoại:</div>
                                        <div className="grid__column-8 body-text-right">123456789</div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4  body-sub-tit">Email:</div>
                                        <div className="grid__column-8 body-text-right">huy@gmail.com</div>
                                    </div>
                                </div>
                                <div className="grid__column-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ticket-infor-container">
                    <div className="ticket-infor-section">
                        <div className="section-title">
                            <p className="section-title-txt">Chuyến Xe: HCM - DL</p>
                        </div>
                        <div className="section-body">
                            <div className="grid__row">
                                <div className="grid__column-6">
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">
                                            <font style={{ verticalAlign: 'inherit' }}>Chặng xe:</font>
                                        </div>
                                        <div className="grid__column-8 body-text-right">
                                            <font style={{ verticalAlign: 'inherit' }}>HCM - DL</font>
                                        </div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Thời gian:</div>
                                        <div className="grid__column-8 body-text-right">12:00 31/10/2022</div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Điểm đón:</div>
                                        <div className="grid__column-8 body-text-right">
                                            <font style={{ verticalAlign: 'inherit' }}>
                                                <span>dfhghgfhgf</span>
                                                <p>fghghgfgfh</p>
                                            </font>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid__column-6">
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit ">
                                            <font style={{ verticalAlign: 'inherit' }}>Số ghế:</font>
                                        </div>
                                        <div className="grid__column-8 body-text-right seat-id">2</div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit ">
                                            <font style={{ verticalAlign: 'inherit' }}>Tên ghế:</font>
                                        </div>
                                        <div className="grid__column-8 body-text-right seat-name">
                                            <font style={{ verticalAlign: 'inherit' }}>A01,A02</font>
                                        </div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit ">
                                            <font style={{ verticalAlign: 'inherit' }}>Đơn giá:</font>
                                        </div>
                                        <div className="grid__column-8 body-text-right seat-name">
                                            <font style={{ verticalAlign: 'inherit' }}>
                                                <span className="footer-infor-price">100.000đ</span>
                                            </font>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-infor-container">
                    <div className="total-infor">
                        <p className="footer-infor-title">Tổng tiền</p>
                        <p className="footer-infor-price">200.000đ</p>
                    </div>
                </div>
            </div>
            <div className="booking-summary-buttons">
                <div className="booking-summart-left-button">
                    <button className="booking-summary-back-home-btn" onClick={() => navigate('/')}>
                        <i className="bx bx-chevron-left"></i>
                        <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Back</font>
                    </button>
                </div>
                <div className="booking-summart-right-button">
                    <button className="booking-summary-next-order-btn">
                        <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Next</font>
                        <i className="bx bx-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TicketInformation;
