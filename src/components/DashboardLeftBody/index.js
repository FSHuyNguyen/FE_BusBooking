import React from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/img';
import '~/components/DashboardLeftBody/style.css';

const DashboardLeftBody = () => {
    return (
        <div className="grid__column-6">
            <div className="grid__row">
                <div className="grid__column-12">
                    <div className="card tryal-gradient">
                        <div className="cart-body tryal grid__row">
                            <div className="grid__column-6 content-body-title">
                                <h2>Project Management BusLine</h2>
                                <span>Let's see what we have today</span>
                            </div>
                            <div className="grid__column-6">
                                <img src={images.chart} alt="" className="sd-shape content-body-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid__column-12">
                    <div className="card">
                        <div className="card-header border-0 flex-wrap">
                            <h4 className="fs-20 font-w700 mb-2">BusLine</h4>
                            <div className="d-flex align-items-center project-tab mb-2">
                                <div className="card-tabs mt-3 mt-sm-0 mb-3 ">
                                    <ul className="nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/admin-dashboard'} role="tab">
                                                Monthly
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={'/admin-dashboard'} role="tab">
                                                Weekly
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to={'/admin-dashboard'} role="tab">
                                                Today
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="d-flex">
                                    <div className="d-inline-block position-relative donut-chart-sale mb-3">
                                        <svg className="peity" height="70" width="70">
                                            <path
                                                d="M 35 0 A 35 35 0 1 1 10.25126265847084 59.748737341529164 L 20.85786437626905 49.14213562373095 A 20 20 0 1 0 35 15"
                                                fill="rgba(136,108,192,1)"
                                            ></path>
                                            <path
                                                d="M 10.25126265847084 59.748737341529164 A 35 35 0 0 1 34.99999999999999 0 L 34.99999999999999 15 A 20 20 0 0 0 20.85786437626905 49.14213562373095"
                                                fill="rgba(241, 234, 255, 1)"
                                            ></path>
                                        </svg>
                                    </div>
                                    <div className="ms-3">
                                        <h4 className="fs-24 font-w700 ">246</h4>
                                        <span className="fs-16 font-w400 d-block">Total Order</span>
                                    </div>
                                </div>
                                <div className="d-flex ">
                                    <div className="d-flex me-5">
                                        <div className="mt-2">
                                            <svg
                                                width="13"
                                                height="13"
                                                viewBox="0 0 13 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="6.5" cy="6.5" r="6.5" fill="#FFCF6D"></circle>
                                            </svg>
                                        </div>
                                        <div className="ms-3">
                                            <h4 className="fs-24 font-w700 ">246</h4>
                                            <span className="fs-16 font-w400 d-block">Payment Success</span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="mt-2">
                                            <svg
                                                width="13"
                                                height="13"
                                                viewBox="0 0 13 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="6.5" cy="6.5" r="6.5" fill="#FFA7D7"></circle>
                                            </svg>
                                        </div>
                                        <div className="ms-3">
                                            <h4 className="fs-24 font-w700 ">28</h4>
                                            <span className="fs-16 font-w400 d-block">Unpayment</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="Today" style={{ position: 'relative' }}>
                                    <div id="chartBar2" className="chartBar" style={{ minHeight: '385px' }}>
                                        <div
                                            id="apexcharts760zdljv"
                                            className="apexcharts-canvas apexcharts760zdljv apexcharts-theme-light"
                                            style={{ width: '453px', height: '370px' }}
                                        >
                                            <svg
                                                id="SvgjsSvg8273"
                                                width="453"
                                                height="370"
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                className="apexcharts-svg"
                                                transform="translate(0, 0)"
                                                style={{ background: 'transparent' }}
                                            >
                                                <g
                                                    id="SvgjsG8275"
                                                    className="apexcharts-inner apexcharts-graphical"
                                                    transform="translate(47.5, 30)"
                                                >
                                                    <defs id="SvgjsDefs8274">
                                                        <clipPath id="gridRectMask760zdljv">
                                                            <rect
                                                                id="SvgjsRect8280"
                                                                width="403.5"
                                                                height="247.80295475260414"
                                                                x="-4"
                                                                y="-2"
                                                                rx="0"
                                                                ry="0"
                                                                opacity="1"
                                                                strokeWidth="0"
                                                                stroke="none"
                                                                fill="#fff"
                                                            ></rect>
                                                        </clipPath>
                                                        <clipPath id="gridRectMarkerMask760zdljv">
                                                            <rect
                                                                id="SvgjsRect8281"
                                                                width="399.5"
                                                                height="247.80295475260414"
                                                                x="-2"
                                                                y="-2"
                                                                rx="0"
                                                                ry="0"
                                                                opacity="1"
                                                                strokeWidth="0"
                                                                stroke="none"
                                                                fill="#fff"
                                                            ></rect>
                                                        </clipPath>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8285"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8286"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,181,138,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8287"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8288"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8290"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8291"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,181,138,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8292"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8293"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8295"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8296"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,181,138,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8297"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8298"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8300"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8301"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,181,138,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8302"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8303"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8305"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8306"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,181,138,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8307"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8308"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8310"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8311"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,181,138,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8312"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8313"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8315"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8316"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,181,138,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8317"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8318"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,162,109,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8322"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8323"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,126,219,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8324"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8325"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8327"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8328"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,126,219,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8329"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8330"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8332"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8333"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,126,219,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8334"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8335"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8337"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8338"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,126,219,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8339"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8340"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8342"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8343"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,126,219,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8344"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8345"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8347"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8348"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,126,219,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8349"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8350"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                        <linearGradient
                                                            id="SvgjsLinearGradient8352"
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="1"
                                                        >
                                                            <stop
                                                                id="SvgjsStop8353"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,126,219,1)"
                                                                offset="0"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8354"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                            <stop
                                                                id="SvgjsStop8355"
                                                                stopOpacity="1"
                                                                stopColor="rgba(255,94,210,1)"
                                                                offset="0.5"
                                                            ></stop>
                                                        </linearGradient>
                                                    </defs>
                                                    <g
                                                        id="SvgjsG8357"
                                                        className="apexcharts-xaxis"
                                                        transform="translate(0, 0)"
                                                    >
                                                        <g
                                                            id="SvgjsG8358"
                                                            className="apexcharts-xaxis-texts-g"
                                                            transform="translate(0, -10)"
                                                        >
                                                            <text
                                                                id="SvgjsText8360"
                                                                fontFamily="poppins"
                                                                x="28.25"
                                                                y="266.80295475260414"
                                                                textAnchor="end"
                                                                dominantBaseline="auto"
                                                                fontSize="13px"
                                                                fontWeight="100"
                                                                fill="#787878"
                                                                className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                                                                transform="rotate(-45 29.70635223388672 261.3029479980469)"
                                                            >
                                                                <tspan id="SvgjsTspan8361">Sunday</tspan>
                                                                <title>Sunday</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText8363"
                                                                fontFamily="poppins"
                                                                x="84.75"
                                                                y="266.80295475260414"
                                                                textAnchor="end"
                                                                dominantBaseline="auto"
                                                                fontSize="13px"
                                                                fontWeight="100"
                                                                fill="#787878"
                                                                className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                                                                transform="rotate(-45 86.20735931396484 261.3029479980469)"
                                                            >
                                                                <tspan id="SvgjsTspan8364">Monday</tspan>
                                                                <title>Monday</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText8366"
                                                                fontFamily="poppins"
                                                                x="141.25"
                                                                y="266.80295475260414"
                                                                textAnchor="end"
                                                                dominantBaseline="auto"
                                                                fontSize="13px"
                                                                fontWeight="100"
                                                                fill="#787878"
                                                                className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                                                                transform="rotate(-45 142.70560455322266 261.3029479980469)"
                                                            >
                                                                <tspan id="SvgjsTspan8367">Tuesday</tspan>
                                                                <title>Tuesday</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText8369"
                                                                fontFamily="poppins"
                                                                x="197.75"
                                                                y="266.80295475260414"
                                                                textAnchor="end"
                                                                dominantBaseline="auto"
                                                                fontSize="13px"
                                                                fontWeight="100"
                                                                fill="#787878"
                                                                className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                                                                transform="rotate(-45 199.2057876586914 261.3029479980469)"
                                                            >
                                                                <tspan id="SvgjsTspan8370">Wednesday</tspan>
                                                                <title>Wednesday</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText8372"
                                                                fontFamily="poppins"
                                                                x="254.25"
                                                                y="266.80295475260414"
                                                                textAnchor="end"
                                                                dominantBaseline="auto"
                                                                fontSize="13px"
                                                                fontWeight="100"
                                                                fill="#787878"
                                                                className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                                                                transform="rotate(-45 255.70040893554688 261.3029479980469)"
                                                            >
                                                                <tspan id="SvgjsTspan8373">Thursday</tspan>
                                                                <title>Thursday</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText8375"
                                                                fontFamily="poppins"
                                                                x="310.75"
                                                                y="266.80295475260414"
                                                                textAnchor="end"
                                                                dominantBaseline="auto"
                                                                fontSize="13px"
                                                                fontWeight="100"
                                                                fill="#787878"
                                                                className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                                                                transform="rotate(-45 312.20379638671875 261.3029479980469)"
                                                            >
                                                                <tspan id="SvgjsTspan8376">Friday</tspan>
                                                                <title>Friday</title>
                                                            </text>
                                                            <text
                                                                id="SvgjsText8378"
                                                                fontFamily="poppins"
                                                                x="367.25"
                                                                y="266.80295475260414"
                                                                textAnchor="end"
                                                                dominantBaseline="auto"
                                                                fontSize="13px"
                                                                fontWeight="100"
                                                                fill="#787878"
                                                                className="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                                                                transform="rotate(-45 368.70103454589844 261.3029479980469)"
                                                            >
                                                                <tspan id="SvgjsTspan8379">Saturday</tspan>
                                                                <title>Saturday</title>
                                                            </text>
                                                        </g>
                                                        <line
                                                            id="SvgjsLine8380"
                                                            x1="0"
                                                            y1="244.80295475260414"
                                                            x2="395.5"
                                                            y2="244.80295475260414"
                                                            stroke="#e0e0e0"
                                                            strokeWidth="1"
                                                        ></line>
                                                    </g>
                                                    <g id="SvgjsG8395" className="apexcharts-grid">
                                                        <g id="SvgjsG8396" className="apexcharts-gridlines-horizontal">
                                                            <line
                                                                id="SvgjsLine8406"
                                                                x1="0"
                                                                y1="0"
                                                                x2="395.5"
                                                                y2="0"
                                                                stroke="#eeeeee"
                                                                className="apexcharts-gridline"
                                                            ></line>
                                                            <line
                                                                id="SvgjsLine8407"
                                                                x1="0"
                                                                y1="48.76059095052083"
                                                                x2="395.5"
                                                                y2="48.76059095052083"
                                                                stroke="#eeeeee"
                                                                className="apexcharts-gridline"
                                                            ></line>
                                                            <line
                                                                id="SvgjsLine8408"
                                                                x1="0"
                                                                y1="97.52118190104166"
                                                                x2="395.5"
                                                                y2="97.52118190104166"
                                                                stroke="#eeeeee"
                                                                className="apexcharts-gridline"
                                                            ></line>
                                                            <line
                                                                id="SvgjsLine8409"
                                                                x1="0"
                                                                y1="146.2817728515625"
                                                                x2="395.5"
                                                                y2="146.2817728515625"
                                                                stroke="#eeeeee"
                                                                className="apexcharts-gridline"
                                                            ></line>
                                                            <line
                                                                id="SvgjsLine8410"
                                                                x1="0"
                                                                y1="195.04236380208332"
                                                                x2="395.5"
                                                                y2="195.04236380208332"
                                                                stroke="#eeeeee"
                                                                className="apexcharts-gridline"
                                                            ></line>
                                                            <line
                                                                id="SvgjsLine8411"
                                                                x1="0"
                                                                y1="243.80295475260414"
                                                                x2="395.5"
                                                                y2="243.80295475260414"
                                                                stroke="#eeeeee"
                                                                className="apexcharts-gridline"
                                                            ></line>
                                                        </g>
                                                        <g
                                                            id="SvgjsG8397"
                                                            className="apexcharts-gridlines-vertical"
                                                        ></g>
                                                        <line
                                                            id="SvgjsLine8398"
                                                            x1="0"
                                                            y1="244.80295475260414"
                                                            x2="0"
                                                            y2="250.80295475260414"
                                                            stroke="#e0e0e0"
                                                            className="apexcharts-xaxis-tick"
                                                        ></line>
                                                        <line
                                                            id="SvgjsLine8399"
                                                            x1="56.5"
                                                            y1="244.80295475260414"
                                                            x2="56.5"
                                                            y2="250.80295475260414"
                                                            stroke="#e0e0e0"
                                                            className="apexcharts-xaxis-tick"
                                                        ></line>
                                                        <line
                                                            id="SvgjsLine8400"
                                                            x1="113"
                                                            y1="244.80295475260414"
                                                            x2="113"
                                                            y2="250.80295475260414"
                                                            stroke="#e0e0e0"
                                                            className="apexcharts-xaxis-tick"
                                                        ></line>
                                                        <line
                                                            id="SvgjsLine8401"
                                                            x1="169.5"
                                                            y1="244.80295475260414"
                                                            x2="169.5"
                                                            y2="250.80295475260414"
                                                            stroke="#e0e0e0"
                                                            className="apexcharts-xaxis-tick"
                                                        ></line>
                                                        <line
                                                            id="SvgjsLine8402"
                                                            x1="226"
                                                            y1="244.80295475260414"
                                                            x2="226"
                                                            y2="250.80295475260414"
                                                            stroke="#e0e0e0"
                                                            className="apexcharts-xaxis-tick"
                                                        ></line>
                                                        <line
                                                            id="SvgjsLine8403"
                                                            x1="282.5"
                                                            y1="244.80295475260414"
                                                            x2="282.5"
                                                            y2="250.80295475260414"
                                                            stroke="#e0e0e0"
                                                            className="apexcharts-xaxis-tick"
                                                        ></line>
                                                        <line
                                                            id="SvgjsLine8404"
                                                            x1="339"
                                                            y1="244.80295475260414"
                                                            x2="339"
                                                            y2="250.80295475260414"
                                                            stroke="#e0e0e0"
                                                            className="apexcharts-xaxis-tick"
                                                        ></line>
                                                        <line
                                                            id="SvgjsLine8405"
                                                            x1="395.5"
                                                            y1="244.80295475260414"
                                                            x2="395.5"
                                                            y2="250.80295475260414"
                                                            stroke="#e0e0e0"
                                                            className="apexcharts-xaxis-tick"
                                                        ></line>
                                                        <line
                                                            id="SvgjsLine8413"
                                                            x1="0"
                                                            y1="243.80295475260414"
                                                            x2="395.5"
                                                            y2="243.80295475260414"
                                                            stroke="transparent"
                                                        ></line>
                                                        <line
                                                            id="SvgjsLine8412"
                                                            x1="0"
                                                            y1="1"
                                                            x2="0"
                                                            y2="243.80295475260414"
                                                            stroke="transparent"
                                                        ></line>
                                                    </g>
                                                    <g
                                                        id="SvgjsG8282"
                                                        className="apexcharts-bar-series apexcharts-plot-series"
                                                    >
                                                        <g id="SvgjsG8283" className="apexcharts-series" rel="1">
                                                            <path
                                                                id="SvgjsPath8289"
                                                                d="M 12.1475 243.80295475260414L 12.1475 133.90147737630207Q 12.1475 121.90147737630207 24.1475 121.90147737630207L 12.25 121.90147737630207Q 24.25 121.90147737630207 24.25 133.90147737630207L 24.25 133.90147737630207L 24.25 243.80295475260414L 24.25 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8285)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="0"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="121.90147737630207"
                                                                cx="66.64750000000001"
                                                                j="0"
                                                                val="50"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8294"
                                                                d="M 68.64750000000001 243.80295475260414L 68.64750000000001 211.9184228971354Q 68.64750000000001 199.9184228971354 80.64750000000001 199.9184228971354L 68.75 199.9184228971354Q 80.75 199.9184228971354 80.75 211.9184228971354L 80.75 211.9184228971354L 80.75 243.80295475260414L 80.75 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8290)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="0"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="199.9184228971354"
                                                                cx="123.14750000000001"
                                                                j="1"
                                                                val="18"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8299"
                                                                d="M 125.14750000000001 243.80295475260414L 125.14750000000001 85.14088642578125Q 125.14750000000001 73.14088642578125 137.1475 73.14088642578125L 125.25 73.14088642578125Q 137.25 73.14088642578125 137.25 85.14088642578125L 137.25 85.14088642578125L 137.25 243.80295475260414L 137.25 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8295)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="0"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="73.14088642578125"
                                                                cx="179.6475"
                                                                j="2"
                                                                val="70"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8304"
                                                                d="M 181.6475 243.80295475260414L 181.6475 158.2817728515625Q 181.6475 146.2817728515625 193.6475 146.2817728515625L 181.75 146.2817728515625Q 193.75 146.2817728515625 193.75 158.2817728515625L 193.75 158.2817728515625L 193.75 243.80295475260414L 193.75 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8300)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="0"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="146.2817728515625"
                                                                cx="236.1475"
                                                                j="3"
                                                                val="40"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8309"
                                                                d="M 238.1475 243.80295475260414L 238.1475 36.3802954752604Q 238.1475 24.380295475260397 250.1475 24.380295475260397L 238.25 24.380295475260397Q 250.25 24.380295475260397 250.25 36.3802954752604L 250.25 36.3802954752604L 250.25 243.80295475260414L 250.25 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8305)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="0"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="24.380295475260397"
                                                                cx="292.64750000000004"
                                                                j="4"
                                                                val="90"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8314"
                                                                d="M 294.64750000000004 243.80295475260414L 294.64750000000004 85.14088642578125Q 294.64750000000004 73.14088642578125 306.64750000000004 73.14088642578125L 294.75000000000006 73.14088642578125Q 306.75000000000006 73.14088642578125 306.75000000000006 85.14088642578125L 306.75000000000006 85.14088642578125L 306.75000000000006 243.80295475260414L 306.75000000000006 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8310)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="0"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="73.14088642578125"
                                                                cx="349.14750000000004"
                                                                j="5"
                                                                val="70"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8319"
                                                                d="M 351.14750000000004 243.80295475260414L 351.14750000000004 207.04236380208332Q 351.14750000000004 195.04236380208332 363.14750000000004 195.04236380208332L 351.25000000000006 195.04236380208332Q 363.25000000000006 195.04236380208332 363.25000000000006 207.04236380208332L 363.25000000000006 207.04236380208332L 363.25000000000006 243.80295475260414L 363.25000000000006 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8315)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="0"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="195.04236380208332"
                                                                cx="405.64750000000004"
                                                                j="6"
                                                                val="20"
                                                            ></path>
                                                        </g>
                                                        <g id="SvgjsG8320" className="apexcharts-series" rel="2">
                                                            <path
                                                                id="SvgjsPath8326"
                                                                d="M 28.25 243.80295475260414L 28.25 60.76059095052082Q 28.25 48.76059095052082 40.25 48.76059095052082L 28.3525 48.76059095052082Q 40.3525 48.76059095052082 40.3525 60.76059095052082L 40.3525 60.76059095052082L 40.3525 243.80295475260414L 40.3525 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8322)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="1"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="48.76059095052082"
                                                                cx="82.75"
                                                                j="0"
                                                                val="80"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8331"
                                                                d="M 84.75 243.80295475260414L 84.75 158.2817728515625Q 84.75 146.2817728515625 96.75 146.2817728515625L 84.85249999999999 146.2817728515625Q 96.85249999999999 146.2817728515625 96.85249999999999 158.2817728515625L 96.85249999999999 158.2817728515625L 96.85249999999999 243.80295475260414L 96.85249999999999 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8327)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="1"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="146.2817728515625"
                                                                cx="139.25"
                                                                j="1"
                                                                val="40"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8336"
                                                                d="M 141.25 243.80295475260414L 141.25 121.71132963867186Q 141.25 109.71132963867186 153.25 109.71132963867186L 141.3525 109.71132963867186Q 153.3525 109.71132963867186 153.3525 121.71132963867186L 153.3525 121.71132963867186L 153.3525 243.80295475260414L 153.3525 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8332)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="1"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="109.71132963867186"
                                                                cx="195.75"
                                                                j="2"
                                                                val="55"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8341"
                                                                d="M 197.75 243.80295475260414L 197.75 207.04236380208332Q 197.75 195.04236380208332 209.75 195.04236380208332L 197.8525 195.04236380208332Q 209.8525 195.04236380208332 209.8525 207.04236380208332L 209.8525 207.04236380208332L 209.8525 243.80295475260414L 209.8525 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8337)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="1"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="195.04236380208332"
                                                                cx="252.25"
                                                                j="3"
                                                                val="20"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8346"
                                                                d="M 254.25 243.80295475260414L 254.25 146.09162511393225Q 254.25 134.09162511393225 266.25 134.09162511393225L 254.35250000000002 134.09162511393225Q 266.3525 134.09162511393225 266.3525 146.09162511393225L 266.3525 146.09162511393225L 266.3525 243.80295475260414L 266.3525 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8342)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="1"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="134.09162511393225"
                                                                cx="308.75000000000006"
                                                                j="4"
                                                                val="45"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8351"
                                                                d="M 310.75000000000006 243.80295475260414L 310.75000000000006 182.6620683268229Q 310.75000000000006 170.6620683268229 322.75000000000006 170.6620683268229L 310.8525000000001 170.6620683268229Q 322.8525000000001 170.6620683268229 322.8525000000001 182.6620683268229L 322.8525000000001 182.6620683268229L 322.8525000000001 243.80295475260414L 322.8525000000001 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8347)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="1"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="170.6620683268229"
                                                                cx="365.25000000000006"
                                                                j="5"
                                                                val="30"
                                                            ></path>
                                                            <path
                                                                id="SvgjsPath8356"
                                                                d="M 367.25000000000006 243.80295475260414L 367.25000000000006 60.76059095052082Q 367.25000000000006 48.76059095052082 379.25000000000006 48.76059095052082L 367.3525000000001 48.76059095052082Q 379.3525000000001 48.76059095052082 379.3525000000001 60.76059095052082L 379.3525000000001 60.76059095052082L 379.3525000000001 243.80295475260414L 379.3525000000001 243.80295475260414z"
                                                                fill="url(#SvgjsLinearGradient8352)"
                                                                fillOpacity="1"
                                                                stroke="transparent"
                                                                strokeOpacity="1"
                                                                strokeLinecap="round"
                                                                strokeWidth="4"
                                                                className="apexcharts-bar-area"
                                                                index="1"
                                                                clipPath="url(#gridRectMask760zdljv)"
                                                                cy="48.76059095052082"
                                                                cx="421.75000000000006"
                                                                j="6"
                                                                val="80"
                                                            ></path>
                                                        </g>
                                                        <g id="SvgjsG8284" className="apexcharts-datalabels"></g>
                                                        <g id="SvgjsG8321" className="apexcharts-datalabels"></g>
                                                    </g>
                                                    <line
                                                        id="SvgjsLine8414"
                                                        x1="0"
                                                        y1="0"
                                                        x2="395.5"
                                                        y2="0"
                                                        stroke="#b6b6b6"
                                                        strokeWidth="1"
                                                        className="apexcharts-ycrosshairs"
                                                    ></line>
                                                    <line
                                                        id="SvgjsLine8415"
                                                        x1="0"
                                                        y1="0"
                                                        x2="395.5"
                                                        y2="0"
                                                        strokeWidth="0"
                                                        className="apexcharts-ycrosshairs-hidden"
                                                    ></line>
                                                    <g id="SvgjsG8416" className="apexcharts-yaxis-annotations"></g>
                                                    <g id="SvgjsG8417" className="apexcharts-xaxis-annotations"></g>
                                                    <g id="SvgjsG8418" className="apexcharts-point-annotations"></g>
                                                </g>
                                                <g
                                                    id="SvgjsG8381"
                                                    className="apexcharts-yaxis"
                                                    rel="0"
                                                    transform="translate(1.5, 0)"
                                                >
                                                    <g id="SvgjsG8382" className="apexcharts-yaxis-texts-g">
                                                        <text
                                                            id="SvgjsText8383"
                                                            fontFamily="poppins"
                                                            x="20"
                                                            y="31.5"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="13px"
                                                            fontWeight="100"
                                                            fill="#787878"
                                                            className="apexcharts-text apexcharts-yaxis-label apexcharts-xaxis-label"
                                                        >
                                                            <tspan id="SvgjsTspan8384">100</tspan>
                                                        </text>
                                                        <text
                                                            id="SvgjsText8385"
                                                            fontFamily="poppins"
                                                            x="20"
                                                            y="80.26059095052082"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="13px"
                                                            fontWeight="100"
                                                            fill="#787878"
                                                            className="apexcharts-text apexcharts-yaxis-label apexcharts-xaxis-label"
                                                        >
                                                            <tspan id="SvgjsTspan8386">80</tspan>
                                                        </text>
                                                        <text
                                                            id="SvgjsText8387"
                                                            fontFamily="poppins"
                                                            x="20"
                                                            y="129.02118190104164"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="13px"
                                                            fontWeight="100"
                                                            fill="#787878"
                                                            className="apexcharts-text apexcharts-yaxis-label apexcharts-xaxis-label"
                                                        >
                                                            <tspan id="SvgjsTspan8388">60</tspan>
                                                        </text>
                                                        <text
                                                            id="SvgjsText8389"
                                                            fontFamily="poppins"
                                                            x="20"
                                                            y="177.78177285156247"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="13px"
                                                            fontWeight="100"
                                                            fill="#787878"
                                                            className="apexcharts-text apexcharts-yaxis-label apexcharts-xaxis-label"
                                                        >
                                                            <tspan id="SvgjsTspan8390">40</tspan>
                                                        </text>
                                                        <text
                                                            id="SvgjsText8391"
                                                            fontFamily="poppins"
                                                            x="20"
                                                            y="226.5423638020833"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="13px"
                                                            fontWeight="100"
                                                            fill="#787878"
                                                            className="apexcharts-text apexcharts-yaxis-label apexcharts-xaxis-label"
                                                        >
                                                            <tspan id="SvgjsTspan8392">20</tspan>
                                                        </text>
                                                        <text
                                                            id="SvgjsText8393"
                                                            fontFamily="poppins"
                                                            x="20"
                                                            y="275.30295475260414"
                                                            textAnchor="end"
                                                            dominantBaseline="auto"
                                                            fontSize="13px"
                                                            fontWeight="100"
                                                            fill="#787878"
                                                            className="apexcharts-text apexcharts-yaxis-label apexcharts-xaxis-label"
                                                        >
                                                            <tspan id="SvgjsTspan8394">0</tspan>
                                                        </text>
                                                    </g>
                                                </g>
                                                <g id="SvgjsG8276" className="apexcharts-annotations"></g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="resize-triggers">
                                        <div className="expand-trigger">
                                            <div style={{ width: '454px', height: '386px' }}></div>
                                        </div>
                                        <div className="contract-trigger"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLeftBody;
