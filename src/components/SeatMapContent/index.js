import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Button from '../Button';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SeatMapContent = ({ dataSeat, props }) => {
    const [changeTang, setchangeTang] = useState(true);
    const [chooseSeat, setChooseSeat] = useState({});
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const handleChangeTang = () => {
        setchangeTang(!changeTang);
    };

    const handleSelectSeat = (event) => {
        if (
            Object.keys(chooseSeat).length < 5 &&
            !chooseSeat[event.target.dataset.name] &&
            event.target.dataset.status !== '1'
        ) {
            setChooseSeat({ ...chooseSeat, [event.target.dataset.name]: true });
        } else if (chooseSeat[event.target.dataset.name]) {
            delete chooseSeat[event.target.dataset.name];
            setChooseSeat({ ...chooseSeat });
        } else {
            if (event.target.dataset.status === '1') {
                Notify.info('Vé này đã được đặt!', {
                    zindex: `999999`,
                    useIcon: false,
                    cssAnimationStyle: 'from-right',
                    cssAnimationDuration: 600,
                    distance: '30px',
                    showOnlyTheLastOne: true,
                    clickToClose: true,
                    fontSize: '16px',
                    timeout: '800',
                });
            } else {
                Notify.warning('Số lượng vé được đặt tối đa là 5!', {
                    zindex: `999999`,
                    useIcon: false,
                    cssAnimationStyle: 'from-right',
                    cssAnimationDuration: 600,
                    distance: '30px',
                    showOnlyTheLastOne: true,
                    clickToClose: true,
                    fontSize: '16px',
                    timeout: '1000',
                });
            }
        }
    };

    const numberFormat = (value) =>
        new Intl.NumberFormat('vn-IN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);

    const handleNextSearchConfirm = () => {
        Object.keys(chooseSeat).length > 0
            ? navigate({
                  pathname: '/search-confirmation',
                  search: `?&from=${props.From}&to=${props.To}&date=${params.get('date')}&time=${
                      props.timeStart
                  }&type_ticket=${props.type_ticket_id}`,
              })
            : Notify.warning('Vui lòng chọn chuyến xe và ghế ngồi!', {
                  zindex: `999999`,
                  useIcon: false,
                  cssAnimationStyle: 'from-right',
                  cssAnimationDuration: 600,
                  distance: '30px',
                  showOnlyTheLastOne: true,
                  clickToClose: true,
                  fontSize: '16px',
                  timeout: '1000',
              });
    };

    return (
        <div className="seat-map-content" style={{ display: 'flex' }}>
            <div className="seat-map-content-wrap">
                <div className="seat-map-title">
                    <div className={`seat-map-mb ${changeTang && 'seat-map-active'}`} onClick={handleChangeTang}>
                        Tầng dưới
                    </div>
                    <div className={`seat-map-mb ${!changeTang && 'seat-map-active'}`} onClick={handleChangeTang}>
                        Tầng trên
                    </div>
                </div>
                <div className="seat-map-table">
                    <div className="seat-map-table-content">
                        <ul className={`seat-map-table-content ${!changeTang && 'hide-mb'}`}>
                            {dataSeat.map(
                                (li, index) =>
                                    li.type_seat === '0' && (
                                        <li
                                            key={index}
                                            id={li.id}
                                            onClick={handleSelectSeat}
                                            data-name={li.name}
                                            data-status={li.status_seat}
                                            className={li.status_seat === '1' ? 'disabled-seat' : ''}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="42"
                                                height="42"
                                                viewBox="0 0 42 42"
                                                className="seat s-disabled"
                                                pos="0"
                                            >
                                                <g
                                                    fill="none"
                                                    fillRule="evenodd"
                                                    className={
                                                        li.status_seat === '1'
                                                            ? 'disabled-seat'
                                                            : !chooseSeat[li.name]
                                                            ? 'active'
                                                            : 'selecting'
                                                    }
                                                >
                                                    <g>
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
                                (li, index) =>
                                    li.type_seat === '1' && (
                                        <li
                                            className={li.status_seat === '1' ? 'disabled-seat' : ''}
                                            key={index}
                                            id={li.id}
                                            data-status={li.status_seat}
                                            onClick={handleSelectSeat}
                                            data-name={li.name}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="42"
                                                height="42"
                                                viewBox="0 0 42 42"
                                                className="seat s-disabled"
                                                pos="0"
                                            >
                                                <g
                                                    fill="none"
                                                    fillRule="evenodd"
                                                    className={
                                                        li.status_seat === '1'
                                                            ? 'disabled-seat'
                                                            : !chooseSeat[li.name]
                                                            ? 'active'
                                                            : 'selecting'
                                                    }
                                                >
                                                    <g>
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
                        <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>
                            {Object.keys(chooseSeat).length} vé: &nbsp;&nbsp;
                            {Object.keys(chooseSeat).map((item, index) => (
                                <span key={index}>
                                    {item}
                                    {Object.keys(chooseSeat)[Object.keys(chooseSeat).length - 1] !== item && ','}
                                    &nbsp;
                                </span>
                            ))}
                        </font>
                    </div>
                    <div className="info-ticket">
                        <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>Tổng: </font>
                        <span className="total">
                            {numberFormat(Object.keys(chooseSeat).length * Object.values(props)[1])}
                        </span>
                    </div>
                </div>
                <Button buttonSize={'btn--large'} onClick={handleNextSearchConfirm}>
                    <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>Next</font>
                    <i className="arrow-next bx bx-chevron-right"></i>
                </Button>
            </div>
        </div>
    );
};

export default SeatMapContent;
