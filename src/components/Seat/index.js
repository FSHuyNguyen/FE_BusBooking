import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import Button from '../Button';

const Seat = ({ BusId }) => {
    const [dataSeat, setDataSeat] = useState([]);
    const [changeTang, setchangeTang] = useState(true);
    useEffect(() => {
        const getSeatbyBusId = async () => {
            const res = await axios.get(process.env.REACT_APP_BASE_URL + '/seat/' + BusId);

            setDataSeat(res.data.all_seat);
        };
        getSeatbyBusId();
    }, []);

    const handleChangeTang = () => {
        setchangeTang(!changeTang);
    };
    return (
        <>
            {(dataSeat.length === 0 && (
                <>
                    <ContentLoader
                        speed={2}
                        width={655}
                        height={564}
                        viewBox="0 0 655 564"
                        backgroundColor="#f5f5f5"
                        foregroundColor="#ccc"
                    >
                        <rect x="80" y="9" rx="0" ry="0" width="464" height="45" />
                        <rect x="223" y="93" rx="0" ry="0" width="0" height="1" />
                        <rect x="205" y="122" rx="0" ry="0" width="2" height="0" />
                        <rect x="80" y="73" rx="16" ry="16" width="464" height="396" />
                        <rect x="17" y="493" rx="0" ry="0" width="654" height="58" />
                    </ContentLoader>
                </>
            )) || (
                <div>
                    <div className="time-line-content" style={{ display: 'flex' }}>
                        <div className="title-content">
                            <p className="title">LỊCH TRÌNH CHUYẾN ĐI</p>
                        </div>
                    </div>
                    <div className="seat-map-content" style={{ display: 'flex' }}>
                        <div className="seat-map-content-wrap">
                            <div className="seat-map-title">
                                <div className={`seat-map-mb ${changeTang && 'active'}`} onClick={handleChangeTang}>
                                    Tầng dưới
                                </div>
                                <div className={`seat-map-mb ${!changeTang && 'active'}`} onClick={handleChangeTang}>
                                    Tầng trên
                                </div>
                            </div>
                            <div className="seat-map-table">
                                <div className="seat-map-table-content">
                                    <ul className={`seat-map-table-content ${!changeTang && 'hide-mb'}`}>
                                        {dataSeat.map(
                                            (li) =>
                                                li.type_seat === '0' && (
                                                    <li className="" key={li.id}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="42"
                                                            height="42"
                                                            viewBox="0 0 42 42"
                                                            className="seat s-disabled"
                                                            pos="0"
                                                        >
                                                            <g fill="none" fillRule="evenodd">
                                                                <g className="active">
                                                                    <path d="M8.625.5c-3.038 0-5.5 2.462-5.5 5.5v27.875c0 .828.672 1.5 1.5 1.5h32.75c.828 0 1.5-.672 1.5-1.5V6c0-3.038-2.462-5.5-5.5-5.5H8.625zM5.75 35.5V38c0 1.933 1.567 3.5 3.5 3.5h23.5c1.933 0 3.5-1.567 3.5-3.5v-2.5H5.75z"></path>
                                                                    <rect
                                                                        width="5.125"
                                                                        height="16.5"
                                                                        x=".5"
                                                                        y="13.625"
                                                                        rx="2.563"
                                                                    ></rect>
                                                                    <rect
                                                                        width="5.125"
                                                                        height="16.5"
                                                                        x="36.375"
                                                                        y="13.625"
                                                                        rx="2.563"
                                                                    ></rect>
                                                                </g>
                                                            </g>
                                                            <text>
                                                                <tspan
                                                                    x="50%"
                                                                    y="50%"
                                                                    dominantBaseline="middle"
                                                                    textAnchor="middle"
                                                                    className="active-seat-text"
                                                                >
                                                                    {li.name}
                                                                </tspan>
                                                            </text>
                                                        </svg>
                                                    </li>
                                                ),
                                        )}
                                    </ul>
                                    <ul className={`seat-map-table-content ${changeTang && 'hide-mb'}`}>
                                        {dataSeat.map(
                                            (li) =>
                                                li.type_seat === '1' && (
                                                    <li key={li.id}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="42"
                                                            height="42"
                                                            viewBox="0 0 42 42"
                                                            className="seat s-disabled"
                                                            pos="0"
                                                        >
                                                            <g fill="none" fillRule="evenodd">
                                                                <g className="active">
                                                                    <path d="M8.625.5c-3.038 0-5.5 2.462-5.5 5.5v27.875c0 .828.672 1.5 1.5 1.5h32.75c.828 0 1.5-.672 1.5-1.5V6c0-3.038-2.462-5.5-5.5-5.5H8.625zM5.75 35.5V38c0 1.933 1.567 3.5 3.5 3.5h23.5c1.933 0 3.5-1.567 3.5-3.5v-2.5H5.75z"></path>
                                                                    <rect
                                                                        width="5.125"
                                                                        height="16.5"
                                                                        x=".5"
                                                                        y="13.625"
                                                                        rx="2.563"
                                                                    ></rect>
                                                                    <rect
                                                                        width="5.125"
                                                                        height="16.5"
                                                                        x="36.375"
                                                                        y="13.625"
                                                                        rx="2.563"
                                                                    ></rect>
                                                                </g>
                                                            </g>
                                                            <text>
                                                                <tspan
                                                                    x="50%"
                                                                    y="50%"
                                                                    dominantBaseline="middle"
                                                                    textAnchor="middle"
                                                                    className="active-seat-text"
                                                                >
                                                                    {li.name}
                                                                </tspan>
                                                            </text>
                                                        </svg>
                                                    </li>
                                                ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="seat-status">
                                <div className="status-item">
                                    <div className="status-item-active"></div>
                                    <div className="status-item-text">Còn trống</div>
                                </div>
                                <div className="status-item">
                                    <div className="status-item-select"></div>
                                    <div className="status-item-text">Đã chọn</div>
                                </div>
                                <div className="status-item">
                                    <div className="status-item-disabled"></div>
                                    <div className="status-item-text">Đã đặt</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-seat-map">
                            <div>
                                <div className="info-ticket">
                                    <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>0 vé:</font>
                                </div>
                                <div className="info-ticket">
                                    <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>Tổng: </font>
                                    <span className="total">
                                        0 <sup>đ</sup>
                                    </span>
                                </div>
                            </div>
                            <Button buttonSize={'btn--large'}>
                                <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>Next</font>
                                <i className="arrow-next bx bx-chevron-right"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Seat;
