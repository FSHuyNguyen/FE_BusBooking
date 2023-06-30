import React from 'react';
import { Link } from 'react-router-dom';
import '~/components/Footer/style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="grid container">
                <div className="footer-container">
                    <div className="left-container">
                        <div className="block-hotline">
                            <div>
                                <p className="left-content-title">Tổng đài đặt vé và CSKH</p>
                                <p className="phoneNumber">
                                    <Link href="tel:1900 6067">1900 6067</Link>
                                </p>
                            </div>
                        </div>
                        <div className="desc-footer">
                            <p className="desc-title">CÔNG TY CỔ PHẦN XE KHÁCH BUS LINES</p>
                            <p>Địa chỉ: Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam.</p>
                            <p>
                                Email: &nbsp;
                                <a href="mailto:hotro@futa.vn">hotro@futa.vn</a>
                            </p>
                            <div>
                                <span className="tit-Phone">
                                    Điện thoại: &nbsp;
                                    <a href="tel:02838386852" className="text-Phone">
                                        028 3838 6852
                                    </a>
                                </span>
                                &nbsp;&nbsp;
                                <span className="tit-Phone">
                                    Fax: &nbsp;
                                    <a href="tel:02838386853" className="text-Phone">
                                        028 3838 6853
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="block-bottom">
                            <div className="connect-with-us">
                                <p className="content-title">Kết nối với chúng tôi</p>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/xephuongtrang"
                                    rel="noreferrer"
                                    className="social-btn"
                                >
                                    <img
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEXUExURf///w6o/QBy6QBu5wWM8gui+waP8gOI8AKB7gaU9AiY9gqc9wB16QJ97ACr/wBq5Quf+QKF7hCs/hGv/wB56w6l+/D3/m2q8ABn4wOR9ABs7ABj5Fab7QBs6AF58A+o/QSI8RGv/xGC7AGJ8QBr5onG+FG1+Rqp+wBu5wBl41aj8BGt/wCE8Fy292+79xyj+NLt/gBq6wBr5QBq5gFz6QF66gJ97Bqr/wew/wmr/wJz6BOv/wF16Quh+RCx/xKw/xCt/xCs/0ar9Quc9gma9AaQ8wqY9gmV9He28wyi+4C+9ZLK+LXb+hGt/qjd/d3x/gBn4gBm4gBb3//+/Guj7gKB7AOB7r7f+pXQ+uLz/kdwTP+o6UdwTP8gi6IAAABddFJOU///////////////////Af/+////////////////D/+77fH//5H///8t9//6//////8YvLr49XkYEA9Bw7KRLXmQQ/+yLcP1ef9B////sv//Q7J58cPDw////wD/AHb3tx8AAAFnSURBVCjPVZLncoJAFEavhYgalihGAWOw9957r7GXtBne/zmyBRJzZmDv951fLBd0BhqOepFcpDcaIqMBdkz2EUmSvPiJ7Cd3pj3OSV4TKTdum6alSZZ7JK3FTEfzPjM4LpVK4dOrdYhBAwtnkDyUj+VDiuMsA4TN5snAnfQD5rvkxmGjA5pxbkapTAQcS3jmZgjmSxfDOcW1P1FIuklazmHlcjKUAjZfiqLQ5FrBQnlg2Ikp2o2kLCBsp8Qc+SQxeUeMFWFwUDzTbWKHzWdiW2SNA8IeAv8GJjueNmF45wnCn0kItPmAJi9gfGu/n3wnfmd9pOCbkG74CEI0GsBmHY0KNDfSgPqvjxRbFpuAjYXXPgK9W7dSDMNCvUvuOm61EcQXYkQ6W+PkrvVQVRUxMjUyGdVqiP3TSk0VZTlITVCWRbVWMfcgFM+ov0bNxEN3u3M6ZwyTOZ/+bZWO0pfbFa63S9rctx8HYFBgKP+WYgAAAABJRU5ErkJggg=="
                                        alt="fIcon"
                                        width="25px"
                                        height="25px"
                                    />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/channel/UCs32uT002InnxFnfXCRN48A?view_as=subscriber"
                                    rel="noreferrer"
                                    className="social-btn"
                                >
                                    <img
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAEOUExURcYTF/Dw8MQTGNIaG/Dz8+QmIOElIN8gGvP09PT19eYoIfLy8vX+/skUF+soIfT5+dMfFskAANASEs0TF84YGvL4+K0OE8cVGNoiIMkVGfH29tkfHMYZHcgNEOXIyeqXlOe4uN8dGNgXFOzS0uTCw+YoIcUTGOElIN+GheMmIcQUFP8AAOQmINUeHeAkIN0hHt4jIMUQEuiQjeSsrONCPuF2de3b29hZWOWAf9ukpNcpKY0HDe7q6ug/OMsaGucwKOc4M+mKiei9veUoINtqatAZG9IbG80YHMpISOsnJ9UfHNgfH9ceG+AlILgRFNoxMa4OE44HDYoGDYMDCc0tLtFVVt6UlNM6OtqVlUdwTFB3UsYAAABadFJOU/////////////////////8PAf//////uC34///////////////3kbL/QkIDu/7///f////+////////8v/tGHnD//+Q/8Ptef8Y7XnDkbL/9MN5Lf//////AClxUVkAAAF6SURBVCjPXZJXW8IwFIZPCMgo6a5doliQXcreww0KMl38/z9iQ0WK70Vynu/NVc4HOw9BG98OG8PbsSb8JuBd+ewNG6OwN9m8z/APbh7ycN0DfzAvJTbkhy29eIYvsWensCWeGuEtVg5fX4cPuGM59ia4Jl8pO8vHzl3tilK76zQb4XIlv4NiNuT07uN+Wg0nlC2CVnHMthKNRCJRelDiNcupaDBzTKup0AAhznNc3TKdGcxN08oZDMMoqXZ3wLkDwyUt05zDq22LOQMhZKR64rSLGISUJLbtV7AxPprl92BvZIxteKYm6Jpg6qvTUhB9kxQxfoYnLItNatAgZexvZNRFGT/BBMtS20sOGJ8JGU9A02XpvWUEfaAPSdY1KKqYkGk3mU5fUtLp+/ojIVgtwq6gE5JIVCFwsQeq1QQheoH+dUaC/0gZYb8fVQqcIqm8t9ORSk4EUUd/PcjoR0f0DO/rTmGxOvdYLQonrdoJ28263++vN9tD334AYblSgfiXKlwAAAAASUVORK5CYII="
                                        alt="youtube Icon"
                                        width="25px"
                                        height="25px"
                                    />
                                </a>
                            </div>
                            <div className="download-App">
                                <p className="content-title">Tải app FUTA</p>
                                <div className="block-App">
                                    <a
                                        href="http://onelink.to/futa.ios"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="app-Store"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAABmJLR0QA/wD/AP+gvaeTAAABGElEQVQ4jdWRvS+DURSHnyuVGKTqI2GzkLCUydDBYhaL2sXub7DbJPwDLGIXA1NjEENJTGKwGSStiI+IxmPo2+R6J+9NDH7TGc7z3HPPgX8RtaRuqIspcFk9tZvVFMFuBrfVoaJwRe2on2r9t9CgWsnqMXVbncvqabU/7u+LwLp6DTwD7azeBN6BI+ARuAWe1D11JH51y+K5VMuoNfUrQdBSF1D3E+AXtdob/z5BsBMvcbzQbbu5iQUfCYLJ+AIXCV94UEd7EzQSJpgAGup8UGvAeYIE4CCoAbgCqgmCJQDUtYQ9nP1QqScF4Fd1Ni8YVpu5xk628Thv6nKPCznJALAOTAFN4DiE0FJngBWgBByGEO4S9vVH+QasCjyQ8H0EBwAAAABJRU5ErkJggg=="
                                            alt="Download FUTA app on AppStore"
                                            width="16px"
                                            height="24px"
                                        />
                                        <p>App Store</p>
                                    </a>
                                    <a
                                        href="http://onelink.to/futa.android"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="app-CHPlay"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAABmJLR0QA/wD/AP+gvaeTAAABAUlEQVQ4jdXUPU5CQRTF8QvaWqGtH6jsg8TOPRg7Q2VnY6cGowbUtbAAE92BsZZEfK2WxupnwVMnLy/woONUkzs5/7ln5mYiFl+oo4cjLM8DOMY23vCM9qyAL9xgE0NjDbA1C0AJ5Bv3WKkKKIPAOw5QqwKAC+xgVKg/olH010uYpxFxGBHtiMiS+kNENHCL1Ukd/Oocu3mEs3yd5Xsf6EwDyI2NBFTUflmEVEvJuuwSTeqgazxgozxOK4nwOS3Cpf/pTOO0cIe1SZd4hWbBDE9KnrEI6GEDr0ktU3GQ+gXzTKPcx3piHqA55YX+ACf5yUO8YK+SMQHUcI2OeT6UxdcPlBhIJvD60ZsAAAAASUVORK5CYII="
                                            alt="Download FUTA app on Play Store"
                                            width="16px"
                                            height="24px"
                                        />
                                        <p>CH Play</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-containter">
                        <p className="content-title">Bus Lines</p>
                        <div className="item-list-container">
                            <div className="item-list list1">
                                <div className="item">
                                    <Link to={'/'}>
                                        <i className="bx bx-chevrons-right"></i>
                                        Về chúng tôi
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to={'/'}>
                                        <i className="bx bx-chevrons-right"></i>
                                        Bảng Giá
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to={'/'}>
                                        <i className="bx bx-chevrons-right"></i>
                                        Tìm kiếm đặt xe
                                    </Link>
                                </div>
                            </div>
                            <div className="item-list list2">
                                <div className="item">
                                    <Link to={'/'}>
                                        <i className="bx bx-chevrons-right"></i>
                                        Điều khoản dịch vụ
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to={'/'}>
                                        <i className="bx bx-chevrons-right"></i>
                                        Câu hỏi thường gặp
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to={'/'}>
                                        <i className="bx bx-chevrons-right"></i>
                                        Danh sách chi nhánh
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="license">© 2022 | All rights are reserved | www.busline.site</p>
            </div>
        </footer>
    );
};

export default Footer;
