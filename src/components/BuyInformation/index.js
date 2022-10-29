import moment from 'moment';
import React, { useEffect } from 'react';

const BuyInformation = ({ orderInfor }) => {
    const numberFormat = (value) =>
        new Intl.NumberFormat('vn-IN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);

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
                                        <div className="grid__column-8 body-text-right">{orderInfor.full_name}</div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Số điện thoại:</div>
                                        <div className="grid__column-8 body-text-right">{orderInfor.phone}</div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Email:</div>
                                        <div className="grid__column-8 body-text-right">{orderInfor.email}</div>
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
                                <font style={{ verticalAlign: 'inherit' }}>
                                    Thông tin chuyến xe: {orderInfor.from} - {orderInfor.to}
                                </font>
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
                                            <font style={{ verticalAlign: 'inherit' }}>
                                                {orderInfor.from} - {orderInfor.to}
                                            </font>
                                        </div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Thời gian:</div>
                                        <div className="grid__column-8 body-text-right">
                                            {orderInfor.time_start}{' '}
                                            {moment(
                                                moment(orderInfor.departure_date_time).format(moment.HTML5_FMT.DATE),
                                                'YYYY-MM-DD',
                                            ).format('DD-MM-YYYY')}
                                        </div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit">Điểm đón:</div>
                                        <div className="grid__column-8 body-text-right">
                                            <font style={{ verticalAlign: 'inherit' }}>
                                                <p>{orderInfor.location}</p>:{orderInfor.address}
                                            </font>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid__column-6">
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit ">
                                            <font style={{ verticalAlign: 'inherit' }}>Số ghế:</font>
                                        </div>
                                        <div className="grid__column-8 body-text-right seat-id">
                                            {orderInfor.seat_num}
                                        </div>
                                    </div>
                                    <div className="grid__column-12 section-body-field">
                                        <div className="grid__column-4 body-sub-tit ">
                                            <font style={{ verticalAlign: 'inherit' }}>Tên ghế:</font>
                                        </div>
                                        <div className="grid__column-8 body-text-right seat-name">
                                            <font style={{ verticalAlign: 'inherit' }}>
                                                {typeof orderInfor.seat_name === 'object' &&
                                                    orderInfor.seat_name.reduce((result, item, index) => {
                                                        if (
                                                            Number(
                                                                Object.keys(orderInfor.seat_name)[
                                                                    Object.keys(orderInfor.seat_name).length - 1
                                                                ],
                                                            ) === index
                                                        )
                                                            return (result += item);
                                                        return (result += item + ',');
                                                    }, '')}
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
                        <p className="footer-infor-price">{numberFormat(orderInfor.total)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyInformation;
