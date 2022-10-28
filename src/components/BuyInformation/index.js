import React from 'react';

const BuyInformation = () => {
    return (
        <div>
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
                                        <div className="grid__column-8 body-text-right">Nguyễn Văn Huy</div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Số điện thoại:</div>
                                        <div className="grid__column-8 body-text-right">123456789</div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Email:</div>
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
                            <p className="section-title-txt">
                                <font style={{ verticalAlign: 'inherit' }}>Thông tin chuyến xe: HCM - Da Lat</font>
                            </p>
                        </div>
                        <div className="section-body">
                            <div className="grid__row">
                                <div className="grid__column-6">
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">
                                            <font style={{ verticalAlign: 'inherit' }}>Chặng xe:</font>
                                        </div>
                                        <div className="grid__column-8 body-text-right">
                                            <font style={{ verticalAlign: 'inherit' }}>HCM - Da Lat</font>
                                        </div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Thời gian:</div>
                                        <div className="grid__column-8 body-text-right">123456789</div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Điểm đón:</div>
                                        <div className="grid__column-8 body-text-right">
                                            <font style={{ verticalAlign: 'inherit' }}>
                                                VP BX Mien Tay: 395 Kinh Duong Vuong , P.An Lac , Q.Binh Tan , TP.HCM
                                                (TERMINAL BUS STATION)
                                            </font>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid__column-6">
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit ">
                                            <font style={{ verticalAlign: 'inherit' }}>Số ghế:</font>
                                        </div>
                                        <div className="grid__column-8 body-text-right seat-id">1</div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit ">
                                            <font style={{ verticalAlign: 'inherit' }}>Tên ghế:</font>
                                        </div>
                                        <div className="grid__column-8 body-text-right seat-name">
                                            <font style={{ verticalAlign: 'inherit' }}>A01</font>
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
                        <p className="footer-infor-price">
                            200.000 <sup>đ</sup>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyInformation;
