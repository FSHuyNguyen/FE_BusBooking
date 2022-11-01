import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '~/components/TicketInformation/style.css';

const TicketInformation = ({ dataOrder }) => {
    const navigate = useNavigate();
    const numberFormat = (value) =>
        new Intl.NumberFormat('vn-IN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);

    return (
        (dataOrder.length === 0 && (
            <ContentLoader
                speed={2}
                width={'95%'}
                height={'95%'}
                viewBox="0 0 936 538"
                backgroundColor="#f5f5f5"
                foregroundColor="#ccc"
            >
                <rect x="223" y="93" rx="0" ry="0" width="0" height="1" />
                <rect x="205" y="122" rx="0" ry="0" width="2" height="0" />
                <rect x="210" y="134" rx="0" ry="0" width="0" height="1" />
                <rect x="198" y="120" rx="0" ry="0" width="1" height="0" />
                <rect x="240" y="85" rx="0" ry="0" width="1" height="0" />
                <rect x="0" y="-11" rx="8" ry="8" width={'95%'} height={'95%'} />
                <rect x="0" y="40" rx="0" ry="0" width={'95%'} height={'95%'} />
                <rect x="0" y="210" rx="0" ry="0" width={'95%'} height={'95%'} />
                <rect x="0" y="435" rx="8" ry="8" width={'95%'} height={'90%'} />
            </ContentLoader>
        )) || (
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
                                            <div className="grid__column-8 body-text-right">{dataOrder.full_name}</div>
                                        </div>
                                        <div className="grid__column-12 section-body-field">
                                            <div className="grid__column-4 body-sub-tit">Số điện thoại:</div>
                                            <div className="grid__column-8 body-text-right">{dataOrder.phone}</div>
                                        </div>
                                        <div className="grid__column-12 section-body-field">
                                            <div className="grid__column-4  body-sub-tit">Email:</div>
                                            <div className="grid__column-8 body-text-right">{dataOrder.email}</div>
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
                                    Chuyến Xe: {dataOrder.from} - {dataOrder.to}
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
                                                    {dataOrder.from} - {dataOrder.to}
                                                </font>
                                            </div>
                                        </div>
                                        <div className="grid__column-12 section-body-field">
                                            <div className="grid__column-4 body-sub-tit">Thời gian:</div>
                                            <div className="grid__column-8 body-text-right">
                                                {dataOrder.time_start}{' '}
                                                {moment(
                                                    moment(dataOrder.departure_date_time).format(moment.HTML5_FMT.DATE),
                                                    'YYYY-MM-DD',
                                                ).format('DD-MM-YYYY')}
                                            </div>
                                        </div>
                                        <div className="grid__column-12 section-body-field">
                                            <div className="grid__column-4 body-sub-tit">Điểm đón:</div>
                                            <div className="grid__column-8 body-text-right">
                                                <font style={{ verticalAlign: 'inherit' }}>
                                                    <span>{dataOrder.location}</span>
                                                    <p>{dataOrder.address}</p>
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
                                                {dataOrder.seat_num}
                                            </div>
                                        </div>
                                        <div className="grid__column-12 section-body-field">
                                            <div className="grid__column-4 body-sub-tit ">
                                                <font style={{ verticalAlign: 'inherit' }}>Tên ghế:</font>
                                            </div>
                                            <div className="grid__column-8 body-text-right seat-name">
                                                <font style={{ verticalAlign: 'inherit' }}>
                                                    {typeof dataOrder.seat_name !== 'object' &&
                                                        dataOrder.seat_name.reduce((result, item, index) => {
                                                            console.log(dataOrder.seat_name);
                                                            if (
                                                                Number(
                                                                    Object.keys(dataOrder.seat_name)[
                                                                        Object.keys(dataOrder.seat_name).length - 1
                                                                    ],
                                                                ) === index
                                                            )
                                                                return (result += item);
                                                            return (result += item + ',');
                                                        }, '')}
                                                </font>
                                            </div>
                                        </div>
                                        <div className="grid__column-12 section-body-field">
                                            <div className="grid__column-4 body-sub-tit ">
                                                <font style={{ verticalAlign: 'inherit' }}>Đơn giá:</font>
                                            </div>
                                            <div className="grid__column-8 body-text-right seat-name">
                                                <font style={{ verticalAlign: 'inherit' }}>
                                                    <span className="footer-infor-price">
                                                        {numberFormat(dataOrder.price)}
                                                    </span>
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
                            <p className="footer-infor-price">{numberFormat(dataOrder.total)}</p>
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
        )
    );
};

export default TicketInformation;
