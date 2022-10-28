import React, { useEffect, useState } from 'react';
import '~/components/DepartureConfirmation/style.css';
import SeatMapContent from '../SeatMapContent';
import moment from 'moment/moment';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Button from '../Button';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContentLoader from 'react-content-loader';

const DepatureConfirmation = ({ TypeTicket }) => {
    const [params, setParams] = useSearchParams();
    const [seat, setSeat] = useState([]);
    const [openSeat, setOpenSeat] = useState(false);
    const navigate = useNavigate();
    const [pageStatus, setPageStatus] = useState(true);

    useEffect(() => {
        const getSeatbyBusId = async () => {
            const res = await axios.get(process.env.REACT_APP_BASE_URL + '/seat/' + params.get('bus'));
            setSeat(res.data.all_seat);
        };
        getSeatbyBusId();
    }, []);

    const numberFormat = (value) =>
        new Intl.NumberFormat('vn-IN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);

    const handleOpenSeat = () => {
        setOpenSeat(true);
    };

    const handleCustormerInfor = () => {
        params.get('name') !== null
            ? navigate({
                  pathname: '/customer-information',
                  search: `?from=${TypeTicket.from}&to=${TypeTicket.to}&date=${params.get('date')}&time=${
                      TypeTicket.time_start
                  }&type=${TypeTicket.id}&bus=${TypeTicket.bus_id}&id=${params.get('id')}&name=${params.get(
                      'name',
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

    return (
        <div className="child">
            {Object.keys(TypeTicket).length === 0 ? (
                <ContentLoader
                    speed={2}
                    width={'100%'}
                    height={413}
                    viewBox="0 0 936 413"
                    backgroundColor="#f5f5f5"
                    foregroundColor="#ccc"
                >
                    <rect x="223" y="93" rx="0" ry="0" width="0" height="1" />
                    <rect x="205" y="122" rx="0" ry="0" width="2" height="0" />
                    <rect x="210" y="134" rx="0" ry="0" width="0" height="1" />
                    <rect x="198" y="120" rx="0" ry="0" width="1" height="0" />
                    <rect x="240" y="85" rx="0" ry="0" width="1" height="0" />
                    <rect x="123" y="9" rx="16" ry="16" width="700" height="225" />
                    <rect x="124" y="253" rx="16" ry="16" width="700" height="60" />
                </ContentLoader>
            ) : (
                <div className="confirmation-container">
                    <div className="confirmation-title">Xác nhận lộ trình khởi hành</div>
                    <div className="confirmation-label">
                        <span>{numberFormat(TypeTicket.price)}</span>
                        <span className="dot"></span>
                        <span>{TypeTicket.type_bus}</span>
                    </div>
                    <div className="confirmation-line-container">
                        <div className="confirmation-line-list">
                            <div className="confirmation-line">
                                <span className="confirmation-time">
                                    {moment(`${TypeTicket.time_start}`, 'HH:mm:ss').format('HH:mm')}
                                </span>
                                <img
                                    alt="pickup-bold"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAn1BMVEUAAAAAAAAAgAAAVVUAbUkAYEAAYkUAYkMAYjwAYD4AYTwAYD0AYT4AYTwAYT0AYT0AYT0AYT0AYT0AYT0AYDwAYT0AYT0AYT0AYD0AYT3////+/v79/f39/fzv8/HV4dzL29WTr6I0d1orakwfZUQWY0IPY0APYT4HYj8MXzwGYT4DYT0AYjwAYT0AYTwAYD0AYDwAXTYAXDAAWS0ASwCRAZr+AAAAGnRSTlMAAQIDBxgaIi9Se5eZwsja4Orx9/r7/P39/ifZSUoAAAFmSURBVHjahVMJjoMwDHS37fY+odBAuQrlTmKO/79tTUBVVWmVERLKzCSxHRtGzOYAy83+eDGMy3G/WQLMZ/CBH4DV7iRwgjjtVgP5xhwW2yvi3WKMc8asO+J1uyD6vf/3wPFmC8klgUth35AffkmY9q/P0mTIJcoJHJkpz2uSxv1nNDnpH6CliWd1xgwWBznq3w55WJA8hy0nfSKrsqwmMxK9JRlWV2QDxTnmSdY0WZIjH9ZEXylb2OFt0tOib+O47Yt0dJCwA1ie0Obq/FdXR6Hvh1HdvVBRNp6WsBF3ofS0ewaOQvDsUuUgaQN7tIb8MS/qwPEervvwnKAuchW2hXs4IlPHJX3keK7j0uc5UZ8okuERLsgkocra0Hk4LoF+YZtVRCLDCxhj1mUT+0pWFj9uyrEyhtagv4KCFP8FKShIbZraQmlLrX0s7XNrG0bbcrqm1bX99+AIsqD4GBz96OmHVzv+f2mSel1r7cqaAAAAAElFTkSuQmCC"
                                    width="16"
                                    height="16"
                                />
                                <span>Bến Xe {TypeTicket.from}</span>
                                <div className="confirmation-bus-line">Xe Tuyến: {TypeTicket.distance}</div>
                            </div>
                            <div className="confirmation-line">
                                <span className="confirmation-time">
                                    {moment(`${TypeTicket.time_end}`, 'HH:mm:ss').format('HH:mm')}
                                </span>
                                <img
                                    alt="destination-bold"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmCAMAAACS/WnbAAAA51BMVEUAAAD/AAD/ZjPmTRrvUCDwWh7yTSbzUSP2VSbwUiXwUCT4VSPxUyLyUSLwVSPxVSbyVSTtUSTzUiHuVCPvVSPxUyPxVCPxUyPvUyPwUyLwUyPxUyPwUyPwUiLxUiLvUyPwUiLwVCLvVCLwUyLvUyLvUiLwUyPwUiLvUyPvUyLwUiPwUyLvUiLvUiLwUiLvUyLwUiLvUiPxUyLwUiLwUyLvUiLwUiLvUyLvUyLwUyLvUiLwUiPvUiPvUiL////++ff83tX71sv1knTxZjzwXC70VCPyUyLxUyLwUiLvUiLvUSHvTx/vTh3N/rktAAAAPnRSTlMAAQUKEBEUFhsiIyQlJjM2OTk+SWBsbW5ueHuEhIiPk56rrra8xcfJ1dXW2Nna3OHi5efo6u3v9Pb5+vv7/K+Q08cAAAFUSURBVHjafdPllsIwEAXgu8YKrOHu7u5umQHe/3kWerophabfz9w5k2RyAunxwxPPlobDUjbu+XjEne9shwQRM5GgTvYbZp+pHZvsUp+44m0JviFaXki+CVuY+KDzT9nS1A+Ne8AKAzcuKsQKVMFZWLCSCAOOKhsOx9PpeGBD1YHfsRFv16vFYrXeGiXjX0SFzDfLuWa5kRUiijyxbqvlWsWWdZRHWzZYz6W1bNHGiHXH1VxaHVk3Qp91p8VcWpxY10eF7AqogjTZbUFpBPd2h9wH8TO2u+b4B46a3aBqDiBJ6lFTEoBrpn6smQtnCcEKIoGL9y4rdN+hiQlFgxh0RWILVMS/rx5b6H1BCrCFAAwPkfufFXnAlZccsQnlXmDyWiZTXn7FDVedWKK6C3ecDZJ5wwkLzqpgjag6YemtILS88AaF54wgEplnKD2Fms3Qk2npDzuS7aPkEDnLAAAAAElFTkSuQmCC"
                                    width="16"
                                    height="19"
                                />
                                <span>Bến Xe {TypeTicket.to}</span>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className={`${!openSeat ? 'seats' : 'seats-disabled'}`}>
                        <div className={`${!openSeat ? 'seats-list' : 'seats-list-disabled'}`}>
                            <span>Ghế đã chọn</span>
                            <span className="seats-item">{params.get('name')}</span>
                        </div>
                        <div
                            className={`${!openSeat ? 'action-seat' : 'action-seat-disabled'}`}
                            onClick={handleOpenSeat}
                        >
                            <span>Thay đổi ghế</span>
                            <i className="bx bxs-edit-alt"></i>
                        </div>
                    </div>
                    <SeatMapContent
                        dataSeat={seat}
                        TypeTicket={TypeTicket}
                        name={params.get('name') ? params.get('name').split(',') : {}}
                        openSeat={openSeat}
                    />
                </div>
            )}

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
        </div>
    );
};

export default DepatureConfirmation;
