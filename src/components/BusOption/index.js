import React, { useState } from 'react';
import '~/components/BusOption/style.css';

const BusOption = () => {
    const [openTripInfo, setOpenTripInfo] = useState(false);
    return (
        <>
            <div className={`bus-option ${openTripInfo && 'selected'}`}>
                <div className="bus-option-header">
                    6:00
                    <svg width="26" height="26" fill="none">
                        <path
                            d="M17.5 10.5L20 13M4 13h16"
                            stroke="#1A202C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    12:00
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
                    <sup>340.000đ</sup>
                    <span className="dot"></span>
                    <span>Limousine</span>
                    <span className="dot"></span>
                    Còn 11 chỗ
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
                            <span>HCM</span>
                            <div>Xe Tuyến: 700kn-14hour </div>
                        </div>
                        <div className="bus-line">
                            <img
                                alt="destination-bold"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmCAMAAACS/WnbAAAA51BMVEUAAAD/AAD/ZjPmTRrvUCDwWh7yTSbzUSP2VSbwUiXwUCT4VSPxUyLyUSLwVSPxVSbyVSTtUSTzUiHuVCPvVSPxUyPxVCPxUyPvUyPwUyLwUyPxUyPwUyPwUiLxUiLvUyPwUiLwVCLvVCLwUyLvUyLvUiLwUyPwUiLvUyPvUyLwUiPwUyLvUiLvUiLwUiLvUyLwUiLvUiPxUyLwUiLwUyLvUiLwUiLvUyLvUyLwUyLvUiLwUiPvUiPvUiL////++ff83tX71sv1knTxZjzwXC70VCPyUyLxUyLwUiLvUiLvUSHvTx/vTh3N/rktAAAAPnRSTlMAAQUKEBEUFhsiIyQlJjM2OTk+SWBsbW5ueHuEhIiPk56rrra8xcfJ1dXW2Nna3OHi5efo6u3v9Pb5+vv7/K+Q08cAAAFUSURBVHjafdPllsIwEAXgu8YKrOHu7u5umQHe/3kWerophabfz9w5k2RyAunxwxPPlobDUjbu+XjEne9shwQRM5GgTvYbZp+pHZvsUp+44m0JviFaXki+CVuY+KDzT9nS1A+Ne8AKAzcuKsQKVMFZWLCSCAOOKhsOx9PpeGBD1YHfsRFv16vFYrXeGiXjX0SFzDfLuWa5kRUiijyxbqvlWsWWdZRHWzZYz6W1bNHGiHXH1VxaHVk3Qp91p8VcWpxY10eF7AqogjTZbUFpBPd2h9wH8TO2u+b4B46a3aBqDiBJ6lFTEoBrpn6smQtnCcEKIoGL9y4rdN+hiQlFgxh0RWILVMS/rx5b6H1BCrCFAAwPkfufFXnAlZccsQnlXmDyWiZTXn7FDVedWKK6C3ecDZJ5wwkLzqpgjag6YemtILS88AaF54wgEplnKD2Fms3Qk2npDzuS7aPkEDnLAAAAAElFTkSuQmCC"
                                width="16"
                                height="19"
                            />
                            <span>Đà Lạt</span>
                        </div>
                    </div>
                    <div className="action" onClick={() => setOpenTripInfo(!openTripInfo)}>
                        <img
                            className="actionImg"
                            alt="checkbox"
                            src={`${
                                openTripInfo
                                    ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAFgAAAAAcITNaAAACSUlEQVQ4EbWVP2gUQRTGvzc7MedtzGljYWIhQoQYLTQSFQKKtSYgNkZFxE4sLERJQGOnpLCzUBQRsbGIsRJsbBW7gIUERZIcIv65i3fH5XK7z3kjs+xddol3kmlm5s17v5n3duZbQkornN6zhauVESKMgLmfibaJKzHnQfSBGTOUyc5sfjb7KwlBzUY+fyRTXFq4whReAyPXvN4wJxSJ1Z1cd+9devymGl9rAFdO9fXUwuAFMw/GndYaE9H7DcobzT7/uOh8I7BAl8PgrUm7xy221BMtdipvyMGVBEv6ctK2oRbCf7M1LJlasK1pi+lLcHOTEgpL7GS//nL585ofqpmSNpcP2unvUHKl2oF6u/Yhe3nK5Ow1bmFukjC13FNzJ1tqXv8BdI0/RPg9nxgnTCWXP3E1xah3D6Fr4pGFlm6OAWGw2tMwlXtR8VU9eAwdwyfiJjvWA4fgT5iTfptH6cYYuPhjlY8YhKmTVvTAQWSOX0DF70bt1VProvcehn/9AcKvX1CaPANe+pkUGtm0vH1T4r7IYgbVJ7ehtvZi48VJIKibEy4Y6H2E+U8Gehb8O1EeIoQwqXBy57S5f6OR1Q10B/yr96D3HwXqNQTzcyjfOgcuFZxHak+gaSUqlehRX0F56hJW3r1GMDeLsqT/D1BhmQq8XL8HInoq0pd46jaMwhKm1Qqrp0b62uA0hIh8CkuM6yubsoPoqOip7CrzVprExLVYYm0pHETguU3bhwlq3ORSdPbUXpTM+EqME3jnG5XCGVz/vz/TPwESC7rVdcaIAAAAAElFTkSuQmCC'
                                    : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAtFBMVEUAAAAAgICAgL+Upa2Pl5+bo6uVoKuWoKqfqLGWn6mapK2Zo62dpq+apa6dp7Cep6+ep7CbprCdp7Ccpa+cpq+bpq6ep7Gcpq+dp7Ccp7Cbpq+dprD////+///+/v76+vv6+vr4+fn29/f19vfx8vTs7vDr7e/i5efa3uHa3eDV2d3U2d3S1tvM0ta7wsixucCvt76psrqmrregqrKgqbKfqLKeqLGdp7CdprCcpq+bpa+bpa4Vzj1GAAAAHHRSTlMAAgQfID1GS1JoeX2Mp7m6v8zT4uPk7vP4+/v86VxdYgAAAX1JREFUeNqVldmSgjAQRaO44bjhrpNBZWBAQSBsmab//7/GoqgpXJDkPJ+HTtK5lzygdNXxfL3drudjtauQd/SnC8g45Ig58OxzOenXme2elgImLPCvN/yAJQip1mu/cjuzPUd2sQydFujGz4Uh3886z+5gAxg6tDRLn55DhM3gQW2NdhB7R/rEyYthN2rduUPAyKYvsSP8/ajaI4DApDWYAcCoMu8OgwOt5RDg7n/uzgYik77BjGDTKe93BrFN32LHMGsXcm+PHm3Aw32vkDUeHpvkY8i1Yh9SdGgjDqb9mzwF1ux+UQZTQpQVurQZ/YILhXQhsagAVgJdombMEJG/WaaSMQ90EVkP+JjMwadC+DAn6/wqJl/zNdmiqIxbKVlqDKkDSl2d8KMYLFOlnlt0kaiLS6Vc0WYYTISX/4xpX/RbnUKuSX1YqSiQCRmZ+JIJRvHIhWFLKMyPZZi/rIkHnKIm6grIrRSQ5ZYFJFFt9aW5qpQmrKb3pSlVx3/OLLyF52G6QAAAAABJRU5ErkJggg=='
                            }`}
                            height="22"
                        />
                        <div className={`${openTripInfo ? 'selected' : ''}`}>Chọn</div>
                    </div>
                </div>

                <div className="time-line-content" style={{ display: `${openTripInfo ? 'flex' : 'none'}` }}>
                    <div className="title-content">
                        <p className="title">LỊCH TRÌNH CHUYẾN ĐI</p>
                    </div>
                </div>
                <div className="seat-map-content" style={{ display: `${openTripInfo ? 'flex' : 'none'}` }}>
                    <div className="seat-map-content-wrap">
                        <div className="seat-map-title"></div>
                        <div className="seat-map-table">
                            <div className="seat-map-table-content">
                                <ul className="seat-map-table-content">
                                    <li className="">
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
                                                ></tspan>
                                            </text>
                                        </svg>
                                    </li>
                                </ul>
                                <ul className="seat-map-table-content">
                                    <li>
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
                                                ></tspan>
                                            </text>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bus-option">
                <div className="bus-option-header">
                    6:00
                    <svg width="26" height="26" fill="none">
                        <path
                            d="M17.5 10.5L20 13M4 13h16"
                            stroke="#1A202C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    12:00
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
                    <sup>340.000đ</sup>
                    <span className="dot"></span>
                    <span>Limousine</span>
                    <span className="dot"></span>
                    Còn 11 chỗ
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
                            <span>HCM</span>
                            <div>Xe Tuyến: 700kn-14hour </div>
                        </div>
                        <div className="bus-line">
                            <img
                                alt="destination-bold"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAmCAMAAACS/WnbAAAA51BMVEUAAAD/AAD/ZjPmTRrvUCDwWh7yTSbzUSP2VSbwUiXwUCT4VSPxUyLyUSLwVSPxVSbyVSTtUSTzUiHuVCPvVSPxUyPxVCPxUyPvUyPwUyLwUyPxUyPwUyPwUiLxUiLvUyPwUiLwVCLvVCLwUyLvUyLvUiLwUyPwUiLvUyPvUyLwUiPwUyLvUiLvUiLwUiLvUyLwUiLvUiPxUyLwUiLwUyLvUiLwUiLvUyLvUyLwUyLvUiLwUiPvUiPvUiL////++ff83tX71sv1knTxZjzwXC70VCPyUyLxUyLwUiLvUiLvUSHvTx/vTh3N/rktAAAAPnRSTlMAAQUKEBEUFhsiIyQlJjM2OTk+SWBsbW5ueHuEhIiPk56rrra8xcfJ1dXW2Nna3OHi5efo6u3v9Pb5+vv7/K+Q08cAAAFUSURBVHjafdPllsIwEAXgu8YKrOHu7u5umQHe/3kWerophabfz9w5k2RyAunxwxPPlobDUjbu+XjEne9shwQRM5GgTvYbZp+pHZvsUp+44m0JviFaXki+CVuY+KDzT9nS1A+Ne8AKAzcuKsQKVMFZWLCSCAOOKhsOx9PpeGBD1YHfsRFv16vFYrXeGiXjX0SFzDfLuWa5kRUiijyxbqvlWsWWdZRHWzZYz6W1bNHGiHXH1VxaHVk3Qp91p8VcWpxY10eF7AqogjTZbUFpBPd2h9wH8TO2u+b4B46a3aBqDiBJ6lFTEoBrpn6smQtnCcEKIoGL9y4rdN+hiQlFgxh0RWILVMS/rx5b6H1BCrCFAAwPkfufFXnAlZccsQnlXmDyWiZTXn7FDVedWKK6C3ecDZJ5wwkLzqpgjag6YemtILS88AaF54wgEplnKD2Fms3Qk2npDzuS7aPkEDnLAAAAAElFTkSuQmCC"
                                width="16"
                                height="19"
                            />
                            <span>Đà Lạt</span>
                        </div>
                    </div>
                    <div className="action">
                        <img
                            className="actionImg"
                            alt="checkbox"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAtFBMVEUAAAAAgICAgL+Upa2Pl5+bo6uVoKuWoKqfqLGWn6mapK2Zo62dpq+apa6dp7Cep6+ep7CbprCdp7Ccpa+cpq+bpq6ep7Gcpq+dp7Ccp7Cbpq+dprD////+///+/v76+vv6+vr4+fn29/f19vfx8vTs7vDr7e/i5efa3uHa3eDV2d3U2d3S1tvM0ta7wsixucCvt76psrqmrregqrKgqbKfqLKeqLGdp7CdprCcpq+bpa+bpa4Vzj1GAAAAHHRSTlMAAgQfID1GS1JoeX2Mp7m6v8zT4uPk7vP4+/v86VxdYgAAAX1JREFUeNqVldmSgjAQRaO44bjhrpNBZWBAQSBsmab//7/GoqgpXJDkPJ+HTtK5lzygdNXxfL3drudjtauQd/SnC8g45Ig58OxzOenXme2elgImLPCvN/yAJQip1mu/cjuzPUd2sQydFujGz4Uh3886z+5gAxg6tDRLn55DhM3gQW2NdhB7R/rEyYthN2rduUPAyKYvsSP8/ajaI4DApDWYAcCoMu8OgwOt5RDg7n/uzgYik77BjGDTKe93BrFN32LHMGsXcm+PHm3Aw32vkDUeHpvkY8i1Yh9SdGgjDqb9mzwF1ux+UQZTQpQVurQZ/YILhXQhsagAVgJdombMEJG/WaaSMQ90EVkP+JjMwadC+DAn6/wqJl/zNdmiqIxbKVlqDKkDSl2d8KMYLFOlnlt0kaiLS6Vc0WYYTISX/4xpX/RbnUKuSX1YqSiQCRmZ+JIJRvHIhWFLKMyPZZi/rIkHnKIm6grIrRSQ5ZYFJFFt9aW5qpQmrKb3pSlVx3/OLLyF52G6QAAAAABJRU5ErkJggg=="
                            width="22"
                            height="22"
                        />
                        <div onClick={() => setOpenTripInfo(true)}>Chọn</div>
                    </div>
                </div>
                <div className="time-line-content" style={{ display: `${openTripInfo ? 'flex' : 'none'}` }}>
                    <div className="title-content">
                        <p className="title">LỊCH TRÌNH CHUYẾN ĐI</p>
                    </div>
                </div>
                <div className="seat-map-content" style={{ display: `${openTripInfo ? 'flex' : 'none'}` }}>
                    <div className="seat-map-content-wrap">
                        <div className="seat-map-title"></div>
                        <div className="seat-map-table">
                            <div className="seat-map-table-content">
                                <ul className="seat-map-table-content">
                                    <li className="">
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
                                                ></tspan>
                                            </text>
                                        </svg>
                                    </li>
                                </ul>
                                <ul className="seat-map-table-content">
                                    <li>
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
                                                ></tspan>
                                            </text>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusOption;
