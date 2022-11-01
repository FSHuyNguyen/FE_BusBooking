import moment from 'moment/moment';
import React, { useState } from 'react';
import '~/components/BusOption/style.css';
import Seat from '../Seat';
import ContentLoader from 'react-content-loader';
import { Link } from 'react-router-dom';

const BusOption = ({ ListItem, statusApi }) => {
    const [ticketSelect, setTicketSelect] = useState({});

    const numberFormat = (value) =>
        new Intl.NumberFormat('vn-IN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);

    const handleSelect = (event) => setTicketSelect({ [event.target.id]: !ticketSelect[event.target.id] });

    return (
        <>
            {statusApi === 403 ? (
                <div className={`activeInfo`}>
                    <div className="alert alert-info">
                        <span>Không tìm thấy chuyến xe tương ứng!</span>
                    </div>
                    <div className="booking-back-btn">
                        <div className="left-btn">
                            <Link to={'/'} className="back-btn">
                                <i className="bx bx-chevron-left"></i>
                                <span>Quay Lại</span>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                (ListItem.length === 0 && (
                    <>
                        <ContentLoader
                            speed={2}
                            width={'100%'}
                            height={222}
                            viewBox="0 0 700 222"
                            backgroundColor="#f5f5f5"
                            foregroundColor="#ccc"
                        >
                            <rect x="20" y="20" rx="0" ry="0" width="calc(90%)" height="22" />
                            <rect x="223" y="93" rx="0" ry="0" width="0" height="1" />
                            <rect x="205" y="122" rx="0" ry="0" width="2" height="0" />
                            <rect x="20" y="60" rx="16" ry="16" width="calc(40%)" height="26" />
                            <rect x="22" y="108" rx="0" ry="0" width="calc(90%)" height="80" />
                            <rect x="26" y="123" rx="0" ry="0" width="calc(40%)" height="42" />
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={'100%'}
                            height={222}
                            viewBox="0 0 700 222"
                            backgroundColor="#f5f5f5"
                            foregroundColor="#ccc"
                        >
                            <rect x="20" y="20" rx="0" ry="0" width="calc(90%)" height="22" />
                            <rect x="223" y="93" rx="0" ry="0" width="0" height="1" />
                            <rect x="205" y="122" rx="0" ry="0" width="2" height="0" />
                            <rect x="20" y="60" rx="16" ry="16" width="calc(40%)" height="26" />
                            <rect x="22" y="108" rx="0" ry="0" width="calc(90%)" height="80" />
                            <rect x="26" y="123" rx="0" ry="0" width="calc(40%)" height="42" />
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={'100%'}
                            height={222}
                            viewBox="0 0 700 222"
                            backgroundColor="#f5f5f5"
                            foregroundColor="#ccc"
                        >
                            <rect x="20" y="20" rx="0" ry="0" width="calc(90%)" height="22" />
                            <rect x="223" y="93" rx="0" ry="0" width="0" height="1" />
                            <rect x="205" y="122" rx="0" ry="0" width="2" height="0" />
                            <rect x="20" y="60" rx="16" ry="16" width="calc(40%)" height="26" />
                            <rect x="22" y="108" rx="0" ry="0" width="calc(90%)" height="80" />
                            <rect x="26" y="123" rx="0" ry="0" width="calc(40%)" height="42" />
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={'100%'}
                            height={222}
                            viewBox="0 0 700 222"
                            backgroundColor="#f5f5f5"
                            foregroundColor="#ccc"
                        >
                            <rect x="20" y="20" rx="0" ry="0" width="calc(90%)" height="22" />
                            <rect x="223" y="93" rx="0" ry="0" width="0" height="1" />
                            <rect x="205" y="122" rx="0" ry="0" width="2" height="0" />
                            <rect x="20" y="60" rx="16" ry="16" width="calc(40%)" height="26" />
                            <rect x="22" y="108" rx="0" ry="0" width="calc(90%)" height="80" />
                            <rect x="26" y="123" rx="0" ry="0" width="calc(40%)" height="42" />
                        </ContentLoader>
                        <ContentLoader
                            speed={2}
                            width={'100%'}
                            height={222}
                            viewBox="0 0 700 222"
                            backgroundColor="#f5f5f5"
                            foregroundColor="#ccc"
                        >
                            <rect x="20" y="20" rx="0" ry="0" width="calc(90%)" height="22" />
                            <rect x="223" y="93" rx="0" ry="0" width="0" height="1" />
                            <rect x="205" y="122" rx="0" ry="0" width="2" height="0" />
                            <rect x="20" y="60" rx="16" ry="16" width="calc(40%)" height="26" />
                            <rect x="22" y="108" rx="0" ry="0" width="calc(90%)" height="80" />
                            <rect x="26" y="123" rx="0" ry="0" width="calc(40%)" height="42" />
                        </ContentLoader>
                    </>
                )) || (
                    <div>
                        {ListItem.map((item, index) => (
                            <div
                                id={item.id}
                                className={`bus-option ${ticketSelect[index] ? 'selected' : ''}`}
                                key={index}
                            >
                                <div className="bus-option-header">
                                    {moment(`${item.time_start}`, 'HH:mm:ss').format('HH:mm')}
                                    <svg width="26" height="26" fill="none">
                                        <path
                                            d="M17.5 10.5L20 13M4 13h16"
                                            stroke="#1A202C"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    {moment(`${item.time_end}`, 'HH:mm:ss').format('HH:mm')}
                                    <div className="utilities">
                                        <img
                                            alt="water utilitie"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTKOstKKstKOss6OrtKOttKOstKautaOttaazuqKrs9iuYewAAAAKdFJOUwBTqMbYepIsaxVu35VTAAAAaUlEQVQoz2NgIBIICgpKIvMZV61atQJdYCmyAKexsbE5fkOFlJQCkPkcXqtWuSILaAENXWWAagmKNWxggcUIASawwBI8AhxggWUIAXawwEI8hrKCBRbRQssiUpxOtgCSwzgFQUCcyGgHAESfV/tGvoBwAAAAAElFTkSuQmCC"
                                            width="18"
                                            height="18"
                                        />
                                        <img
                                            alt="tissue utilitie"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURUdwTKSttKOstqevuKKstKOstKOstKOstKKrs1QBF0QAAAAIdFJOUwBxUB7irc+RSBqH+QAAAHtJREFUKM9jYKAFUFJSRnCMlJQYOjraDGB85oyODqBAh6MgFIh1QARQAEMEKr+VgR1VIIDBA0QVKSkpqYMFWhgg6kBAAmKGCJBoBAuYgfiODKZwAQagKzqCwVqgAmA9mAIYWjAMxbAWw2EYTsfwHIb3sQQQWhBiBDItAABMgnXv5SJBWwAAAABJRU5ErkJggg=="
                                            width="18"
                                            height="18"
                                        />
                                        <img
                                            alt="form utilitie"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURUdwTKvMzKWvt6Oss6eyuaSstqOttaKstKOstKOstKOstKWtt6OstKOstKKrs+TeAR8AAAAOdFJOUwAGI/ATRmDhx7miNot2T+ML3AAAANBJREFUKM9jYKAZYNx2as1VBwSfdfE7IHiRCONzz3sHBs8vQtWfA3Ie24HUKIAFPICs2wKMakB9ZiA+U927lxtADJbD794lAGn3d4+BlJAKUKrv3SOgQNy7agbGG+/eWQUwSL17ChRwfq7AkA6y5KUC4+EFIK0hDDwQa03hDlsHdEMz0OoNUD7bu3dvHRg0372bABXgffcc5KI8uABLXQvYR50KMDOEBBgyp6H6H2jMARQB9nfvHqIIyL0DuxoBON+9K0ARYKqDuwoKREMY6AkAd2hhK9YYGPUAAAAASUVORK5CYII="
                                            width="18"
                                            height="18"
                                        />
                                    </div>
                                </div>

                                <div className="bus-option-label">
                                    <sup>{numberFormat(item.price)}</sup>
                                    <span className="dot"></span>
                                    <span>{item.type_bus}</span>
                                    <span className="dot"></span>
                                    {`Còn ${item.count} chỗ trống`}
                                </div>
                                <div className="bus-line-content">
                                    <div className="bus-line-list">
                                        <div className="bus-line">
                                            <img
                                                alt="pickup-bold"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAn1BMVEUAAAAAAAAAgAAAVVUAbUkAYEAAYkUAYkMAYjwAYD4AYTwAYD0AYT4AYTwAYT0AYT0AYT0AYT0AYT0AYT0AYDwAYT0AYT0AYT0AYD0AYT3////+/v79/f39/fzv8/HV4dzL29WTr6I0d1orakwfZUQWY0IPY0APYT4HYj8MXzwGYT4DYT0AYjwAYT0AYTwAYD0AYDwAXTYAXDAAWS0ASwCRAZr+AAAAGnRSTlMAAQIDBxgaIi9Se5eZwsja4Orx9/r7/P39/ifZSUoAAAFmSURBVHjahVMJjoMwDHS37fY+odBAuQrlTmKO/79tTUBVVWmVERLKzCSxHRtGzOYAy83+eDGMy3G/WQLMZ/CBH4DV7iRwgjjtVgP5xhwW2yvi3WKMc8asO+J1uyD6vf/3wPFmC8klgUth35AffkmY9q/P0mTIJcoJHJkpz2uSxv1nNDnpH6CliWd1xgwWBznq3w55WJA8hy0nfSKrsqwmMxK9JRlWV2QDxTnmSdY0WZIjH9ZEXylb2OFt0tOib+O47Yt0dJCwA1ie0Obq/FdXR6Hvh1HdvVBRNp6WsBF3ofS0ewaOQvDsUuUgaQN7tIb8MS/qwPEervvwnKAuchW2hXs4IlPHJX3keK7j0uc5UZ8okuERLsgkocra0Hk4LoF+YZtVRCLDCxhj1mUT+0pWFj9uyrEyhtagv4KCFP8FKShIbZraQmlLrX0s7XNrG0bbcrqm1bX99+AIsqD4GBz96OmHVzv+f2mSel1r7cqaAAAAAElFTkSuQmCC"
                                                width="16"
                                                height="16"
                                            />
                                            <span>Bến Xe {item.from}</span>
                                            <div>Xe Tuyến: {item.distance} </div>
                                        </div>
                                        <div className="bus-line">
                                            <img
                                                alt="destination-bold"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmCAMAAACS/WnbAAAA51BMVEUAAAD/AAD/ZjPmTRrvUCDwWh7yTSbzUSP2VSbwUiXwUCT4VSPxUyLyUSLwVSPxVSbyVSTtUSTzUiHuVCPvVSPxUyPxVCPxUyPvUyPwUyLwUyPxUyPwUyPwUiLxUiLvUyPwUiLwVCLvVCLwUyLvUyLvUiLwUyPwUiLvUyPvUyLwUiPwUyLvUiLvUiLwUiLvUyLwUiLvUiPxUyLwUiLwUyLvUiLwUiLvUyLvUyLwUyLvUiLwUiPvUiPvUiL////++ff83tX71sv1knTxZjzwXC70VCPyUyLxUyLwUiLvUiLvUSHvTx/vTh3N/rktAAAAPnRSTlMAAQUKEBEUFhsiIyQlJjM2OTk+SWBsbW5ueHuEhIiPk56rrra8xcfJ1dXW2Nna3OHi5efo6u3v9Pb5+vv7/K+Q08cAAAFUSURBVHjafdPllsIwEAXgu8YKrOHu7u5umQHe/3kWerophabfz9w5k2RyAunxwxPPlobDUjbu+XjEne9shwQRM5GgTvYbZp+pHZvsUp+44m0JviFaXki+CVuY+KDzT9nS1A+Ne8AKAzcuKsQKVMFZWLCSCAOOKhsOx9PpeGBD1YHfsRFv16vFYrXeGiXjX0SFzDfLuWa5kRUiijyxbqvlWsWWdZRHWzZYz6W1bNHGiHXH1VxaHVk3Qp91p8VcWpxY10eF7AqogjTZbUFpBPd2h9wH8TO2u+b4B46a3aBqDiBJ6lFTEoBrpn6smQtnCcEKIoGL9y4rdN+hiQlFgxh0RWILVMS/rx5b6H1BCrCFAAwPkfufFXnAlZccsQnlXmDyWiZTXn7FDVedWKK6C3ecDZJ5wwkLzqpgjag6YemtILS88AaF54wgEplnKD2Fms3Qk2npDzuS7aPkEDnLAAAAAElFTkSuQmCC"
                                                width="16"
                                                height="19"
                                            />
                                            <span>Bến Xe {item.to}</span>
                                        </div>
                                    </div>
                                    <div className="action">
                                        <img
                                            id={index}
                                            onClick={handleSelect}
                                            className="actionImg"
                                            alt="checkbox"
                                            src={`${
                                                ticketSelect[index]
                                                    ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAFgAAAAAcITNaAAACSUlEQVQ4EbWVP2gUQRTGvzc7MedtzGljYWIhQoQYLTQSFQKKtSYgNkZFxE4sLERJQGOnpLCzUBQRsbGIsRJsbBW7gIUERZIcIv65i3fH5XK7z3kjs+xddol3kmlm5s17v5n3duZbQkornN6zhauVESKMgLmfibaJKzHnQfSBGTOUyc5sfjb7KwlBzUY+fyRTXFq4whReAyPXvN4wJxSJ1Z1cd+9devymGl9rAFdO9fXUwuAFMw/GndYaE9H7DcobzT7/uOh8I7BAl8PgrUm7xy221BMtdipvyMGVBEv6ctK2oRbCf7M1LJlasK1pi+lLcHOTEgpL7GS//nL585ofqpmSNpcP2unvUHKl2oF6u/Yhe3nK5Ow1bmFukjC13FNzJ1tqXv8BdI0/RPg9nxgnTCWXP3E1xah3D6Fr4pGFlm6OAWGw2tMwlXtR8VU9eAwdwyfiJjvWA4fgT5iTfptH6cYYuPhjlY8YhKmTVvTAQWSOX0DF70bt1VProvcehn/9AcKvX1CaPANe+pkUGtm0vH1T4r7IYgbVJ7ehtvZi48VJIKibEy4Y6H2E+U8Gehb8O1EeIoQwqXBy57S5f6OR1Q10B/yr96D3HwXqNQTzcyjfOgcuFZxHak+gaSUqlehRX0F56hJW3r1GMDeLsqT/D1BhmQq8XL8HInoq0pd46jaMwhKm1Qqrp0b62uA0hIh8CkuM6yubsoPoqOip7CrzVprExLVYYm0pHETguU3bhwlq3ORSdPbUXpTM+EqME3jnG5XCGVz/vz/TPwESC7rVdcaIAAAAAElFTkSuQmCC'
                                                    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAtFBMVEUAAAAAgICAgL+Upa2Pl5+bo6uVoKuWoKqfqLGWn6mapK2Zo62dpq+apa6dp7Cep6+ep7CbprCdp7Ccpa+cpq+bpq6ep7Gcpq+dp7Ccp7Cbpq+dprD////+///+/v76+vv6+vr4+fn29/f19vfx8vTs7vDr7e/i5efa3uHa3eDV2d3U2d3S1tvM0ta7wsixucCvt76psrqmrregqrKgqbKfqLKeqLGdp7CdprCcpq+bpa+bpa4Vzj1GAAAAHHRSTlMAAgQfID1GS1JoeX2Mp7m6v8zT4uPk7vP4+/v86VxdYgAAAX1JREFUeNqVldmSgjAQRaO44bjhrpNBZWBAQSBsmab//7/GoqgpXJDkPJ+HTtK5lzygdNXxfL3drudjtauQd/SnC8g45Ig58OxzOenXme2elgImLPCvN/yAJQip1mu/cjuzPUd2sQydFujGz4Uh3886z+5gAxg6tDRLn55DhM3gQW2NdhB7R/rEyYthN2rduUPAyKYvsSP8/ajaI4DApDWYAcCoMu8OgwOt5RDg7n/uzgYik77BjGDTKe93BrFN32LHMGsXcm+PHm3Aw32vkDUeHpvkY8i1Yh9SdGgjDqb9mzwF1ux+UQZTQpQVurQZ/YILhXQhsagAVgJdombMEJG/WaaSMQ90EVkP+JjMwadC+DAn6/wqJl/zNdmiqIxbKVlqDKkDSl2d8KMYLFOlnlt0kaiLS6Vc0WYYTISX/4xpX/RbnUKuSX1YqSiQCRmZ+JIJRvHIhWFLKMyPZZi/rIkHnKIm6grIrRSQ5ZYFJFFt9aW5qpQmrKb3pSlVx3/OLLyF52G6QAAAAABJRU5ErkJggg=='
                                            }`}
                                            height="22"
                                        />
                                        <div className={ticketSelect[index] ? 'selected' : ''}>Chọn</div>
                                    </div>
                                </div>

                                {ticketSelect[index] ? (
                                    <Seat
                                        type_ticket_id={item.id}
                                        price={item.price}
                                        BusId={item.bus_id}
                                        From={item.from}
                                        location_start={item.location_start}
                                        address_start={item.address_start}
                                        location_end={item.location_end}
                                        address_end={item.address_end}
                                        To={item.to}
                                        type_bus={item.type_bus}
                                        distance={item.distance}
                                        timeStart={item.time_start}
                                        timeEnd={item.time_end}
                                    />
                                ) : null}
                            </div>
                        ))}
                        <div className="booking-back-btn">
                            <div className="left-btn">
                                <Link to={'/'} className="back-btn">
                                    <i className="bx bx-chevron-left"></i>
                                    <span>Back</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default BusOption;
