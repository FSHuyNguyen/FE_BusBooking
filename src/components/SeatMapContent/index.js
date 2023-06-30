import React, { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Button from '../Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '~/redux/selector';
import authSlice from '../Auth/authSlice';

const SeatMapContent = ({ dataSeat, props, name, TypeTicket, pageStatus, openSeat, setOpenSeat }) => {
    const [changeTang, setchangeTang] = useState(true);
    const [chooseSeat, setChooseSeat] = useState({});
    const [params, setParams] = useSearchParams();
    const [getSeatID, setGetSeatID] = useState({});
    const [updateParams, setUpdateParams] = useState(false);
    const navigate = useNavigate();
    const authState = useSelector(authSelector);
    const dispatch = useDispatch();
    const handleOpenSeat = () => {
        setOpenSeat(true);
    };

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
            setGetSeatID({ ...getSeatID, [event.target.id]: true });
            if (typeof name === 'object') {
                setUpdateParams(true);
            }
        } else if (chooseSeat[event.target.dataset.name]) {
            delete chooseSeat[event.target.dataset.name];
            delete getSeatID[event.target.id];
            setChooseSeat({ ...chooseSeat });
            setGetSeatID({ ...getSeatID });
            if (typeof name === 'object') {
                setUpdateParams(true);
            }
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
        if (authState.isAuthenticated) {
            Object.keys(chooseSeat).length > 0
                ? navigate({
                      pathname: '/search-confirmation',
                      search: `?from=${props.From}&to=${props.To}&date=${params.get('date')}&type=${
                          props.type_ticket_id
                      }&bus=${props.BusId}&id=${Object.keys(getSeatID)}&name=${Object.keys(chooseSeat)}`,
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
        } else {
            dispatch(authSlice.actions.modalToggle(true));
        }
    };
    const handleCustormerInfor = () => {
        updateParams && Object.keys(chooseSeat).length > 0
            ? navigate({
                  pathname: '/customer-information',
                  search: `?from=${TypeTicket.from}&to=${TypeTicket.to}&date=${params.get('date')}&time=${
                      TypeTicket.time_start
                  }&type=${TypeTicket.id}&bus=${TypeTicket.bus_id}&id=${Object.keys(getSeatID)}&name=${Object.keys(
                      chooseSeat,
                  )},
                  )}&status=${pageStatus}`,
              })
            : Notify.warning('Vui lòng kiểm tra lại thông tin vé!', {
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

    useEffect(() => {
        if (!dataSeat || dataSeat.length === 0 || typeof name !== 'object') return;
        let obj1 = {};
        let obj2 = {};
        if (params.get('id') === null) return navigate(-1);
        for (var i = 0; i < dataSeat.length; i++) {
            if (params.get('id').split(',').includes(String(dataSeat[i].id))) {
                obj1 = { ...obj1, [dataSeat[i].name]: true };
                obj2 = { ...obj2, [dataSeat[i].id]: true };
            }
        }
        setChooseSeat(obj1);
        setGetSeatID(obj2);
        setUpdateParams(true);
    }, [dataSeat]);

    return (
        <>
            {typeof pageStatus === 'undefined' ? (
                <div className="seat-map-content">
                    <div className="seat-map-content-wrap">
                        <div className="seat-map-title">
                            <div
                                className={`seat-map-mb ${changeTang && 'seat-map-active'}`}
                                onClick={handleChangeTang}
                            >
                                Tầng dưới
                            </div>
                            <div
                                className={`seat-map-mb ${!changeTang && 'seat-map-active'}`}
                                onClick={handleChangeTang}
                            >
                                Tầng trên
                            </div>
                        </div>
                        <div className="seat-map-table">
                            <div className="seat-map-table-content">
                                <ul className={`seat-map-table-content ${!changeTang && 'hide-mb'}`}>
                                    {dataSeat.map((li, index) => {
                                        if (li.type_seat !== '0') return null;

                                        return (
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
                                        );
                                    })}
                                </ul>
                                <ul className={`seat-map-table-content ${changeTang && 'hide-mb'}`}>
                                    {dataSeat.map((li, index) => {
                                        if (li.type_seat !== '1') return null;

                                        return (
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
                                        );
                                    })}
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
                                {Object.keys(chooseSeat) && (
                                    <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>
                                        {Object.keys(chooseSeat).length} vé:&nbsp;&nbsp;
                                        {Object.keys(chooseSeat).map((item, index) => (
                                            <span key={index}>
                                                {item}
                                                {Object.keys(chooseSeat)[Object.keys(chooseSeat).length - 1] !== item &&
                                                    ','}
                                                &nbsp;
                                            </span>
                                        ))}
                                    </font>
                                )}
                            </div>
                            <div className="info-ticket">
                                <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>Tổng: </font>
                                {typeof name !== 'object' ? (
                                    <span className="total">
                                        {numberFormat(Object.keys(chooseSeat).length * Object.values(props)[1])}
                                    </span>
                                ) : (
                                    TypeTicket.price && (
                                        <span className="total">
                                            {numberFormat(Object.keys(chooseSeat).length * TypeTicket.price)}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    {typeof name !== 'object' ? (
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div className="search-confirm-left-btn">
                                <Button className="search-confirm-back-btn" onClick={() => navigate(-1)}>
                                    <i className="bx bx-chevron-left"></i>
                                    <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Back</font>
                                </Button>
                            </div>

                            <div className="search-confirm-right-btn">
                                <Button className="search-confirm-next-btn" onClick={handleNextSearchConfirm}>
                                    <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Next</font>
                                    <i className="bx bx-chevron-right"></i>
                                </Button>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            ) : (
                <>
                    <div className={`${!openSeat ? 'seats' : 'seats-disabled'}`}>
                        <div className={`${!openSeat ? 'seats-list' : 'seats-list-disabled'}`}>
                            <span>Ghế đã chọn</span>
                            <span className="seats-item">
                                {Object.keys(chooseSeat) && (
                                    <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>
                                        {Object.keys(chooseSeat).map((item, index) => (
                                            <span key={index}>
                                                {item}
                                                {Object.keys(chooseSeat)[Object.keys(chooseSeat).length - 1] !== item &&
                                                    ','}
                                                &nbsp;
                                            </span>
                                        ))}
                                    </font>
                                )}
                            </span>
                        </div>
                        <div
                            className={`${!openSeat ? 'action-seat' : 'action-seat-disabled'}`}
                            onClick={handleOpenSeat}
                        >
                            <span>Thay đổi ghế</span>
                            <i className="bx bxs-edit-alt"></i>
                        </div>
                    </div>
                    <div
                        className={`seat-map-content ${
                            openSeat ? 'seat-map-content-active' : 'seat-map-content-disabled'
                        }`}
                    >
                        <div className="seat-map-content-wrap">
                            <div className="seat-map-title">
                                <div
                                    className={`seat-map-mb ${changeTang && 'seat-map-active'}`}
                                    onClick={handleChangeTang}
                                >
                                    Tầng dưới
                                </div>
                                <div
                                    className={`seat-map-mb ${!changeTang && 'seat-map-active'}`}
                                    onClick={handleChangeTang}
                                >
                                    Tầng trên
                                </div>
                            </div>
                            <div className="seat-map-table">
                                <div className="seat-map-table-content">
                                    <ul className={`seat-map-table-content ${!changeTang && 'hide-mb'}`}>
                                        {dataSeat.map((li, index) => {
                                            if (li.type_seat !== '0') return null;

                                            return (
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
                                            );
                                        })}
                                    </ul>
                                    <ul className={`seat-map-table-content ${changeTang && 'hide-mb'}`}>
                                        {dataSeat.map((li, index) => {
                                            if (li.type_seat !== '1') return null;

                                            return (
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
                                            );
                                        })}
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
                                    {Object.keys(chooseSeat) && (
                                        <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>
                                            {Object.keys(chooseSeat).length} vé:&nbsp;&nbsp;
                                            {Object.keys(chooseSeat).map((item, index) => (
                                                <span key={index}>
                                                    {item}
                                                    {Object.keys(chooseSeat)[Object.keys(chooseSeat).length - 1] !==
                                                        item && ','}
                                                    &nbsp;
                                                </span>
                                            ))}
                                        </font>
                                    )}
                                </div>
                                <div className="info-ticket">
                                    <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>Tổng: </font>
                                    {typeof name !== 'object' ? (
                                        <span className="total">
                                            {numberFormat(Object.keys(chooseSeat).length * Object.values(props)[1])}
                                        </span>
                                    ) : (
                                        TypeTicket.price && (
                                            <span className="total">
                                                {numberFormat(Object.keys(chooseSeat).length * TypeTicket.price)}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        {(typeof name !== 'object' && (
                            <Button buttonSize={'btn--large'} onClick={handleNextSearchConfirm}>
                                <font style={{ verticalAlign: 'inherit', fontSize: '18px' }}>Next</font>
                                <i className="arrow-next bx bx-chevron-right"></i>
                            </Button>
                        )) || (
                            <div className="search-confirm-btn">
                                <div className="search-confirm-left-btn">
                                    <Button className="search-confirm-back-btn" onClick={() => navigate(-1)}>
                                        <i className="bx bx-chevron-left"></i>
                                        <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Back</font>
                                    </Button>
                                </div>
                                <div className="search-confirm-right-btn">
                                    <Button className="search-confirm-next-btn" onClick={handleCustormerInfor}>
                                        <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Next</font>
                                        <i className="bx bx-chevron-right"></i>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default SeatMapContent;
