import React from 'react';
import '~/components/DashboardRightBody/style.css';

const DashboardRightBody = () => {
    return (
        <>
            <div className="grid__column-6">
                <div className="grid__row">
                    <div className="grid__column-12">
                        <div className="grid__row">
                            <div className="grid__column-6">
                                <div className="card">
                                    <div className="card-body px-4 pb-0 d-flex justify-content">
                                        <div className="total-clients">
                                            <h3>Total Clients</h3>
                                            <div className="d-flex">
                                                <h2>68</h2>
                                                <span className="d-clock ms-4">
                                                    <svg
                                                        width="21"
                                                        height="11"
                                                        viewBox="0 0 21 11"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1.49217 11C0.590508 11 0.149368 9.9006 0.800944 9.27736L9.80878 0.66117C10.1954 0.29136 10.8046 0.291359 11.1912 0.661169L20.1991 9.27736C20.8506 9.9006 20.4095 11 19.5078 11H1.49217Z"
                                                            fill="#09BD3C"
                                                        ></path>
                                                    </svg>
                                                    <small className="d-block fs-16 font-w400 text-success">
                                                        +0,5%
                                                    </small>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{ minHeight: '165px' }}>
                                            <div
                                                className="apexcharts-canvas apexchartso3cltlqz apexcharts-theme-light"
                                                style={{ width: '96px', height: '150px' }}
                                            >
                                                <svg
                                                    width="96"
                                                    height="150"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    version="1.1"
                                                    className="apexcharts-svg"
                                                    transform="translate(0, 0)"
                                                    style={{ background: 'transparent' }}
                                                >
                                                    <g
                                                        className="apexcharts-inner apexcharts-graphical"
                                                        transform="translate(12, 30)"
                                                    >
                                                        <g className="apexcharts-xaxis" transform="translate(0, 0)">
                                                            <g
                                                                className="apexcharts-xaxis-texts-g"
                                                                transform="translate(0, -4)"
                                                            ></g>
                                                        </g>
                                                        <g className="apexcharts-grid">
                                                            <g
                                                                className="apexcharts-gridlines-horizontal"
                                                                style={{ display: 'none' }}
                                                            >
                                                                <line
                                                                    x1="0"
                                                                    y1="0"
                                                                    x2="74"
                                                                    y2="0"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                                <line
                                                                    x1="0"
                                                                    y1="21"
                                                                    x2="74"
                                                                    y2="21"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                                <line
                                                                    x1="0"
                                                                    y1="42"
                                                                    x2="74"
                                                                    y2="42"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                                <line
                                                                    x1="0"
                                                                    y1="63"
                                                                    x2="74"
                                                                    y2="63"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                                <line
                                                                    x1="0"
                                                                    y1="84"
                                                                    x2="74"
                                                                    y2="84"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                                <line
                                                                    x1="0"
                                                                    y1="105"
                                                                    x2="74"
                                                                    y2="105"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                            </g>
                                                            <g
                                                                className="apexcharts-gridlines-vertical"
                                                                style={{ display: 'none' }}
                                                            ></g>
                                                            <line
                                                                x1="0"
                                                                y1="105"
                                                                x2="74"
                                                                y2="105"
                                                                stroke="transparent"
                                                                strokeDasharray="0"
                                                            ></line>
                                                            <line
                                                                x1="0"
                                                                y1="1"
                                                                x2="0"
                                                                y2="105"
                                                                stroke="transparent"
                                                                strokeDasharray="0"
                                                            ></line>
                                                        </g>
                                                        <g className="apexcharts-bar-series apexcharts-plot-series">
                                                            <g className="apexcharts-series" rel="1">
                                                                <rect
                                                                    width="3.7"
                                                                    height="105"
                                                                    x="7.4"
                                                                    y="0"
                                                                    rx="10"
                                                                    ry="10"
                                                                    opacity="1"
                                                                    strokeWidth="0"
                                                                    stroke="none"
                                                                    strokeDasharray="0"
                                                                    fill="#ECECEC"
                                                                    className="apexcharts-backgroundBar"
                                                                ></rect>
                                                                <path
                                                                    d="M 7.4 105L 7.4 84Q 7.4 84 7.4 84L 11.100000000000001 84Q 11.100000000000001 84 11.100000000000001 84L 11.100000000000001 84L 11.100000000000001 105L 11.100000000000001 105z"
                                                                    fill="rgba(236,236,236,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="0"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="84"
                                                                    cx="25.9"
                                                                    j="0"
                                                                    val="40"
                                                                ></path>
                                                                <rect
                                                                    width="3.7"
                                                                    height="105"
                                                                    x="25.9"
                                                                    y="0"
                                                                    rx="10"
                                                                    ry="10"
                                                                    opacity="1"
                                                                    strokeWidth="0"
                                                                    stroke="none"
                                                                    strokeDasharray="0"
                                                                    fill="#ECECEC"
                                                                    className="apexcharts-backgroundBar"
                                                                ></rect>
                                                                <path
                                                                    d="M 25.9 105L 25.9 76.125Q 25.9 76.125 25.9 76.125L 29.599999999999998 76.125Q 29.599999999999998 76.125 29.599999999999998 76.125L 29.599999999999998 76.125L 29.599999999999998 105L 29.599999999999998 105z"
                                                                    fill="rgba(236,236,236,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="0"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="76.125"
                                                                    cx="44.4"
                                                                    j="1"
                                                                    val="55"
                                                                ></path>
                                                                <rect
                                                                    width="3.7"
                                                                    height="105"
                                                                    x="44.4"
                                                                    y="0"
                                                                    rx="10"
                                                                    ry="10"
                                                                    opacity="1"
                                                                    strokeWidth="0"
                                                                    stroke="none"
                                                                    strokeDasharray="0"
                                                                    fill="#ECECEC"
                                                                    className="apexcharts-backgroundBar"
                                                                ></rect>
                                                                <path
                                                                    d="M 44.4 105L 44.4 97.125Q 44.4 97.125 44.4 97.125L 48.1 97.125Q 48.1 97.125 48.1 97.125L 48.1 97.125L 48.1 105L 48.1 105z"
                                                                    fill="rgba(236,236,236,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="0"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="97.125"
                                                                    cx="62.9"
                                                                    j="2"
                                                                    val="15"
                                                                ></path>
                                                                <rect
                                                                    width="3.7"
                                                                    height="105"
                                                                    x="62.9"
                                                                    y="0"
                                                                    rx="10"
                                                                    ry="10"
                                                                    opacity="1"
                                                                    strokeWidth="0"
                                                                    stroke="none"
                                                                    strokeDasharray="0"
                                                                    fill="#ECECEC"
                                                                    className="apexcharts-backgroundBar"
                                                                ></rect>
                                                                <path
                                                                    d="M 62.9 105L 62.9 76.125Q 62.9 76.125 62.9 76.125L 66.6 76.125Q 66.6 76.125 66.6 76.125L 66.6 76.125L 66.6 105L 66.6 105z"
                                                                    fill="rgba(236,236,236,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="0"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="76.125"
                                                                    cx="81.4"
                                                                    j="3"
                                                                    val="55"
                                                                ></path>
                                                            </g>
                                                            <g className="apexcharts-series" rel="2">
                                                                <path
                                                                    d="M 7.4 84L 7.4 63Q 7.4 63 7.4 63L 11.100000000000001 63Q 11.100000000000001 63 11.100000000000001 63L 11.100000000000001 63L 11.100000000000001 84L 11.100000000000001 84z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="1"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="63"
                                                                    cx="25.9"
                                                                    j="0"
                                                                    val="40"
                                                                ></path>
                                                                <path
                                                                    d="M 25.9 76.125L 25.9 47.25Q 25.9 47.25 25.9 47.25L 29.599999999999998 47.25Q 29.599999999999998 47.25 29.599999999999998 47.25L 29.599999999999998 47.25L 29.599999999999998 76.125L 29.599999999999998 76.125z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="1"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="47.25"
                                                                    cx="44.4"
                                                                    j="1"
                                                                    val="55"
                                                                ></path>
                                                                <path
                                                                    d="M 44.4 97.125L 44.4 78.75Q 44.4 78.75 44.4 78.75L 48.1 78.75Q 48.1 78.75 48.1 78.75L 48.1 78.75L 48.1 97.125L 48.1 97.125z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="1"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="78.75"
                                                                    cx="62.9"
                                                                    j="2"
                                                                    val="35"
                                                                ></path>
                                                                <path
                                                                    d="M 62.9 76.125L 62.9 47.25Q 62.9 47.25 62.9 47.25L 66.6 47.25Q 66.6 47.25 66.6 47.25L 66.6 47.25L 66.6 76.125L 66.6 76.125z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="1"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="47.25"
                                                                    cx="81.4"
                                                                    j="3"
                                                                    val="55"
                                                                ></path>
                                                            </g>
                                                            <g className="apexcharts-series" rel="3">
                                                                <path
                                                                    d="M 7.4 63L 7.4 42Q 7.4 42 7.4 42L 11.100000000000001 42Q 11.100000000000001 42 11.100000000000001 42L 11.100000000000001 42L 11.100000000000001 63L 11.100000000000001 63z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="2"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="42"
                                                                    cx="25.9"
                                                                    j="0"
                                                                    val="40"
                                                                ></path>
                                                                <path
                                                                    d="M 25.9 47.25L 25.9 38.325Q 25.9 38.325 25.9 38.325L 29.599999999999998 38.325Q 29.599999999999998 38.325 29.599999999999998 38.325L 29.599999999999998 38.325L 29.599999999999998 47.25L 29.599999999999998 47.25z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="2"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="38.325"
                                                                    cx="44.4"
                                                                    j="1"
                                                                    val="17"
                                                                ></path>
                                                                <path
                                                                    d="M 44.4 78.75L 44.4 49.875Q 44.4 49.875 44.4 49.875L 48.1 49.875Q 48.1 49.875 48.1 49.875L 48.1 49.875L 48.1 78.75L 48.1 78.75z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="2"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="49.875"
                                                                    cx="62.9"
                                                                    j="2"
                                                                    val="55"
                                                                ></path>
                                                                <path
                                                                    d="M 62.9 47.25L 62.9 18.375Q 62.9 18.375 62.9 18.375L 66.6 18.375Q 66.6 18.375 66.6 18.375L 66.6 18.375L 66.6 47.25L 66.6 47.25z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="2"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="18.375"
                                                                    cx="81.4"
                                                                    j="3"
                                                                    val="55"
                                                                ></path>
                                                            </g>
                                                            <g className="apexcharts-datalabels"></g>
                                                            <g className="apexcharts-datalabels"></g>
                                                            <g className="apexcharts-datalabels"></g>
                                                        </g>
                                                        <line
                                                            x1="0"
                                                            y1="0"
                                                            x2="74"
                                                            y2="0"
                                                            strokeDasharray="0"
                                                            strokeWidth="0"
                                                            className="apexcharts-ycrosshairs-hidden"
                                                        ></line>
                                                        <g className="apexcharts-yaxis-annotations"></g>
                                                        <g className="apexcharts-xaxis-annotations"></g>
                                                        <g className="apexcharts-point-annotations"></g>
                                                    </g>
                                                    <g
                                                        className="apexcharts-yaxis"
                                                        rel="0"
                                                        transform="translate(-18, 0)"
                                                    ></g>
                                                    <g className="apexcharts-annotations"></g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="resize-triggers">
                                    <div className="expand-trigger">
                                        <div style={{ width: '239px', height: '192px' }}></div>
                                    </div>
                                    <div className="contract-trigger"></div>
                                </div>
                            </div>
                            <div className="grid__column-6">
                                <div className="card">
                                    <div className="card-body px-4 pb-0">
                                        <h4 className="fs-18 font-w600 mb-5 text-nowrap">Total Revenue</h4>
                                        <div className="progress default-progress">
                                            <div
                                                className="progress-bar bg-gradient1 progress-animated"
                                                style={{ width: '50%', height: '10px' }}
                                            >
                                                <span className="sr-only">50% Complete</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-end mt-2 pb-3 justify-content-between">
                                            <span style={{ fontSize: '14px' }}>76 left from target</span>
                                            <h4 style={{ fontSize: '14px' }}>42</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-6">
                                <div className="card">
                                    <div className="card-body px-4 pb-0 d-flex justify-content">
                                        <div className="total-clients">
                                            <h3>Total Clients</h3>
                                            <div className="d-flex">
                                                <h2>68</h2>
                                                <span className="d-clock ms-4">
                                                    <svg
                                                        width="21"
                                                        height="11"
                                                        viewBox="0 0 21 11"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M1.49217 11C0.590508 11 0.149368 9.9006 0.800944 9.27736L9.80878 0.66117C10.1954 0.29136 10.8046 0.291359 11.1912 0.661169L20.1991 9.27736C20.8506 9.9006 20.4095 11 19.5078 11H1.49217Z"
                                                            fill="#09BD3C"
                                                        ></path>
                                                    </svg>
                                                    <small className="d-block fs-16 font-w400 text-success">
                                                        +0,5%
                                                    </small>
                                                </span>
                                            </div>
                                        </div>
                                        <div style={{ minHeight: '165px' }}>
                                            <div
                                                className="apexcharts-canvas apexchartso3cltlqz apexcharts-theme-light"
                                                style={{ width: '96px', height: '150px' }}
                                            >
                                                <svg
                                                    width="96"
                                                    height="150"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    version="1.1"
                                                    className="apexcharts-svg"
                                                    transform="translate(0, 0)"
                                                    style={{ background: 'transparent' }}
                                                >
                                                    <g
                                                        className="apexcharts-inner apexcharts-graphical"
                                                        transform="translate(12, 30)"
                                                    >
                                                        <g className="apexcharts-xaxis" transform="translate(0, 0)">
                                                            <g
                                                                className="apexcharts-xaxis-texts-g"
                                                                transform="translate(0, -4)"
                                                            ></g>
                                                        </g>
                                                        <g className="apexcharts-grid">
                                                            <g
                                                                className="apexcharts-gridlines-horizontal"
                                                                style={{ display: 'none' }}
                                                            >
                                                                <line
                                                                    x1="0"
                                                                    y1="0"
                                                                    x2="74"
                                                                    y2="0"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                                <line
                                                                    x1="0"
                                                                    y1="21"
                                                                    x2="74"
                                                                    y2="21"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                                <line
                                                                    x1="0"
                                                                    y1="42"
                                                                    x2="74"
                                                                    y2="42"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                                <line
                                                                    x1="0"
                                                                    y1="63"
                                                                    x2="74"
                                                                    y2="63"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                                <line
                                                                    x1="0"
                                                                    y1="84"
                                                                    x2="74"
                                                                    y2="84"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                                <line
                                                                    x1="0"
                                                                    y1="105"
                                                                    x2="74"
                                                                    y2="105"
                                                                    stroke="#e0e0e0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-gridline"
                                                                ></line>
                                                            </g>
                                                            <g
                                                                className="apexcharts-gridlines-vertical"
                                                                style={{ display: 'none' }}
                                                            ></g>
                                                            <line
                                                                x1="0"
                                                                y1="105"
                                                                x2="74"
                                                                y2="105"
                                                                stroke="transparent"
                                                                strokeDasharray="0"
                                                            ></line>
                                                            <line
                                                                x1="0"
                                                                y1="1"
                                                                x2="0"
                                                                y2="105"
                                                                stroke="transparent"
                                                                strokeDasharray="0"
                                                            ></line>
                                                        </g>
                                                        <g className="apexcharts-bar-series apexcharts-plot-series">
                                                            <g className="apexcharts-series" rel="1">
                                                                <rect
                                                                    width="3.7"
                                                                    height="105"
                                                                    x="7.4"
                                                                    y="0"
                                                                    rx="10"
                                                                    ry="10"
                                                                    opacity="1"
                                                                    strokeWidth="0"
                                                                    stroke="none"
                                                                    strokeDasharray="0"
                                                                    fill="#ECECEC"
                                                                    className="apexcharts-backgroundBar"
                                                                ></rect>
                                                                <path
                                                                    d="M 7.4 105L 7.4 84Q 7.4 84 7.4 84L 11.100000000000001 84Q 11.100000000000001 84 11.100000000000001 84L 11.100000000000001 84L 11.100000000000001 105L 11.100000000000001 105z"
                                                                    fill="rgba(236,236,236,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="0"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="84"
                                                                    cx="25.9"
                                                                    j="0"
                                                                    val="40"
                                                                ></path>
                                                                <rect
                                                                    width="3.7"
                                                                    height="105"
                                                                    x="25.9"
                                                                    y="0"
                                                                    rx="10"
                                                                    ry="10"
                                                                    opacity="1"
                                                                    strokeWidth="0"
                                                                    stroke="none"
                                                                    strokeDasharray="0"
                                                                    fill="#ECECEC"
                                                                    className="apexcharts-backgroundBar"
                                                                ></rect>
                                                                <path
                                                                    d="M 25.9 105L 25.9 76.125Q 25.9 76.125 25.9 76.125L 29.599999999999998 76.125Q 29.599999999999998 76.125 29.599999999999998 76.125L 29.599999999999998 76.125L 29.599999999999998 105L 29.599999999999998 105z"
                                                                    fill="rgba(236,236,236,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="0"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="76.125"
                                                                    cx="44.4"
                                                                    j="1"
                                                                    val="55"
                                                                ></path>
                                                                <rect
                                                                    width="3.7"
                                                                    height="105"
                                                                    x="44.4"
                                                                    y="0"
                                                                    rx="10"
                                                                    ry="10"
                                                                    opacity="1"
                                                                    strokeWidth="0"
                                                                    stroke="none"
                                                                    strokeDasharray="0"
                                                                    fill="#ECECEC"
                                                                    className="apexcharts-backgroundBar"
                                                                ></rect>
                                                                <path
                                                                    d="M 44.4 105L 44.4 97.125Q 44.4 97.125 44.4 97.125L 48.1 97.125Q 48.1 97.125 48.1 97.125L 48.1 97.125L 48.1 105L 48.1 105z"
                                                                    fill="rgba(236,236,236,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="0"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="97.125"
                                                                    cx="62.9"
                                                                    j="2"
                                                                    val="15"
                                                                ></path>
                                                                <rect
                                                                    width="3.7"
                                                                    height="105"
                                                                    x="62.9"
                                                                    y="0"
                                                                    rx="10"
                                                                    ry="10"
                                                                    opacity="1"
                                                                    strokeWidth="0"
                                                                    stroke="none"
                                                                    strokeDasharray="0"
                                                                    fill="#ECECEC"
                                                                    className="apexcharts-backgroundBar"
                                                                ></rect>
                                                                <path
                                                                    d="M 62.9 105L 62.9 76.125Q 62.9 76.125 62.9 76.125L 66.6 76.125Q 66.6 76.125 66.6 76.125L 66.6 76.125L 66.6 105L 66.6 105z"
                                                                    fill="rgba(236,236,236,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="0"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="76.125"
                                                                    cx="81.4"
                                                                    j="3"
                                                                    val="55"
                                                                ></path>
                                                            </g>
                                                            <g className="apexcharts-series" rel="2">
                                                                <path
                                                                    d="M 7.4 84L 7.4 63Q 7.4 63 7.4 63L 11.100000000000001 63Q 11.100000000000001 63 11.100000000000001 63L 11.100000000000001 63L 11.100000000000001 84L 11.100000000000001 84z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="1"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="63"
                                                                    cx="25.9"
                                                                    j="0"
                                                                    val="40"
                                                                ></path>
                                                                <path
                                                                    d="M 25.9 76.125L 25.9 47.25Q 25.9 47.25 25.9 47.25L 29.599999999999998 47.25Q 29.599999999999998 47.25 29.599999999999998 47.25L 29.599999999999998 47.25L 29.599999999999998 76.125L 29.599999999999998 76.125z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="1"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="47.25"
                                                                    cx="44.4"
                                                                    j="1"
                                                                    val="55"
                                                                ></path>
                                                                <path
                                                                    d="M 44.4 97.125L 44.4 78.75Q 44.4 78.75 44.4 78.75L 48.1 78.75Q 48.1 78.75 48.1 78.75L 48.1 78.75L 48.1 97.125L 48.1 97.125z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="1"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="78.75"
                                                                    cx="62.9"
                                                                    j="2"
                                                                    val="35"
                                                                ></path>
                                                                <path
                                                                    d="M 62.9 76.125L 62.9 47.25Q 62.9 47.25 62.9 47.25L 66.6 47.25Q 66.6 47.25 66.6 47.25L 66.6 47.25L 66.6 76.125L 66.6 76.125z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="1"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="47.25"
                                                                    cx="81.4"
                                                                    j="3"
                                                                    val="55"
                                                                ></path>
                                                            </g>
                                                            <g className="apexcharts-series" rel="3">
                                                                <path
                                                                    d="M 7.4 63L 7.4 42Q 7.4 42 7.4 42L 11.100000000000001 42Q 11.100000000000001 42 11.100000000000001 42L 11.100000000000001 42L 11.100000000000001 63L 11.100000000000001 63z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="2"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="42"
                                                                    cx="25.9"
                                                                    j="0"
                                                                    val="40"
                                                                ></path>
                                                                <path
                                                                    d="M 25.9 47.25L 25.9 38.325Q 25.9 38.325 25.9 38.325L 29.599999999999998 38.325Q 29.599999999999998 38.325 29.599999999999998 38.325L 29.599999999999998 38.325L 29.599999999999998 47.25L 29.599999999999998 47.25z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="2"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="38.325"
                                                                    cx="44.4"
                                                                    j="1"
                                                                    val="17"
                                                                ></path>
                                                                <path
                                                                    d="M 44.4 78.75L 44.4 49.875Q 44.4 49.875 44.4 49.875L 48.1 49.875Q 48.1 49.875 48.1 49.875L 48.1 49.875L 48.1 78.75L 48.1 78.75z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="2"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="49.875"
                                                                    cx="62.9"
                                                                    j="2"
                                                                    val="55"
                                                                ></path>
                                                                <path
                                                                    d="M 62.9 47.25L 62.9 18.375Q 62.9 18.375 62.9 18.375L 66.6 18.375Q 66.6 18.375 66.6 18.375L 66.6 18.375L 66.6 47.25L 66.6 47.25z"
                                                                    fill="rgba(136,108,192,1)"
                                                                    fillOpacity="1"
                                                                    strokeOpacity="1"
                                                                    strokeLinecap="round"
                                                                    strokeWidth="0"
                                                                    strokeDasharray="0"
                                                                    className="apexcharts-bar-area"
                                                                    index="2"
                                                                    clipPath="url(#gridRectMasko3cltlqz)"
                                                                    cy="18.375"
                                                                    cx="81.4"
                                                                    j="3"
                                                                    val="55"
                                                                ></path>
                                                            </g>
                                                            <g className="apexcharts-datalabels"></g>
                                                            <g className="apexcharts-datalabels"></g>
                                                            <g className="apexcharts-datalabels"></g>
                                                        </g>
                                                        <line
                                                            x1="0"
                                                            y1="0"
                                                            x2="74"
                                                            y2="0"
                                                            strokeDasharray="0"
                                                            strokeWidth="0"
                                                            className="apexcharts-ycrosshairs-hidden"
                                                        ></line>
                                                        <g className="apexcharts-yaxis-annotations"></g>
                                                        <g className="apexcharts-xaxis-annotations"></g>
                                                        <g className="apexcharts-point-annotations"></g>
                                                    </g>
                                                    <g
                                                        className="apexcharts-yaxis"
                                                        rel="0"
                                                        transform="translate(-18, 0)"
                                                    ></g>
                                                    <g className="apexcharts-annotations"></g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="resize-triggers">
                                    <div className="expand-trigger">
                                        <div style={{ width: '239px', height: '192px' }}></div>
                                    </div>
                                    <div className="contract-trigger"></div>
                                </div>
                            </div>
                            <div className="grid__column-6">
                                <div className="card">
                                    <div className="card-body px-4 pb-0">
                                        <h4 className="fs-18 font-w600 mb-5 text-nowrap">Total Revenue</h4>
                                        <div className="progress default-progress">
                                            <div
                                                className="progress-bar bg-gradient1 progress-animated"
                                                style={{ width: '50%', height: '10px' }}
                                            >
                                                <span className="sr-only">50% Complete</span>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-end mt-2 pb-3 justify-content-between">
                                            <span style={{ fontSize: '14px' }}>76 left from target</span>
                                            <h4 style={{ fontSize: '14px' }}>42</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-12">
                        <div className="grid__row">
                            <div className="card-email">
                                <div className="card-header">
                                    <div>
                                        <h4 className="fs-20 font-w700">Email Categories</h4>
                                        <span className="fs-14 font-w400 d-block">Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>
                                <div className="card-body" style={{ position: 'relative' }}>
                                    <div style={{ minHeight: '182.8px' }}>
                                        <div
                                            className="apexcharts-canvas apexchartsn1nx0fsw apexcharts-theme-light"
                                            style={{ width: '453px', height: '182.8px' }}
                                        >
                                            <svg
                                                width="453"
                                                height="182.79999999999998"
                                                xmlns="http://www.w3.org/2000/svg"
                                                version="1.1"
                                                className="apexcharts-svg"
                                                style={{ background: 'transparent', border: 'none' }}
                                            >
                                                <g
                                                    className="apexcharts-inner apexcharts-graphical"
                                                    transform="translate(139.5, 0)"
                                                >
                                                    <g className="apexcharts-pie">
                                                        <g transform="translate(0, 0) scale(1)">
                                                            <circle
                                                                r="53.20487804878049"
                                                                cx="88"
                                                                cy="88"
                                                                fill="transparent"
                                                            ></circle>
                                                            <g className="apexcharts-slices">
                                                                <g
                                                                    className="apexcharts-series apexcharts-pie-series"
                                                                    rel="1"
                                                                >
                                                                    <path
                                                                        d="M 88 6.146341463414629 A 81.85365853658537 81.85365853658537 0 0 1 169.20821799052166 98.25898370345867 L 140.7853416938391 94.66833940724814 A 53.20487804878049 53.20487804878049 0 0 0 88 34.79512195121951 L 88 6.146341463414629 z"
                                                                        fill="#886CC0"
                                                                        className="apexcharts-pie-area apexcharts-donut-slice-0"
                                                                        index="0"
                                                                        j="0"
                                                                    ></path>
                                                                </g>
                                                                <g
                                                                    className="apexcharts-series apexcharts-pie-series"
                                                                    rel="2"
                                                                >
                                                                    <path
                                                                        d="M 169.20821799052166 98.25898370345867 A 81.85365853658537 81.85365853658537 0 0 1 144.0326850608946 147.66874911283554 L 124.42124528958149 126.7846869233431 A 53.20487804878049 53.20487804878049 0 0 0 140.7853416938391 94.66833940724814 L 169.20821799052166 98.25898370345867 z"
                                                                        fill="rgba(38,224,35,1)"
                                                                        className="apexcharts-pie-area apexcharts-donut-slice-1"
                                                                        index="0"
                                                                        j="1"
                                                                    ></path>
                                                                </g>
                                                                <g
                                                                    className="apexcharts-series apexcharts-pie-series"
                                                                    rel="3"
                                                                >
                                                                    <path
                                                                        d="M 144.0326850608946 147.66874911283554 A 81.85365853658537 81.85365853658537 0 0 1 39.88762666601123 154.22100080786157 L 56.7269573329073 131.04365052511002 A 53.20487804878049 53.20487804878049 0 0 0 124.42124528958149 126.7846869233431 L 144.0326850608946 147.66874911283554 z"
                                                                        fill="rgba(97,207,241,1)"
                                                                        className="apexcharts-pie-area apexcharts-donut-slice-2"
                                                                        index="0"
                                                                        j="2"
                                                                    ></path>
                                                                </g>
                                                                <g
                                                                    className="apexcharts-series apexcharts-pie-series"
                                                                    rel="4"
                                                                >
                                                                    <path
                                                                        d="M 39.88762666601123 154.22100080786157 A 81.85365853658537 81.85365853658537 0 0 1 6.146341463414629 88.00000000000001 L 34.79512195121951 88 A 53.20487804878049 53.20487804878049 0 0 0 56.7269573329073 131.04365052511002 L 39.88762666601123 154.22100080786157 z"
                                                                        fill="rgba(255,218,124,1)"
                                                                        className="apexcharts-pie-area apexcharts-donut-slice-3"
                                                                        index="0"
                                                                        j="3"
                                                                    ></path>
                                                                </g>
                                                                <g
                                                                    className="apexcharts-series apexcharts-pie-series"
                                                                    rel="5"
                                                                >
                                                                    <path
                                                                        d="M 6.146341463414629 88.00000000000001 A 81.85365853658537 81.85365853658537 0 0 1 87.98571384160985 6.146342710117139 L 87.9907139970464 34.79512276157614 A 53.20487804878049 53.20487804878049 0 0 0 34.79512195121951 88 L 6.146341463414629 88.00000000000001 z"
                                                                        fill="rgba(255,134,177,1)"
                                                                        className="apexcharts-pie-area apexcharts-donut-slice-4"
                                                                        index="0"
                                                                        j="4"
                                                                    ></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <line
                                                        x1="0"
                                                        y1="0"
                                                        x2="176"
                                                        y2="0"
                                                        stroke="#b6b6b6"
                                                        className="apexcharts-ycrosshairs"
                                                    ></line>
                                                    <line
                                                        x1="0"
                                                        y1="0"
                                                        x2="176"
                                                        y2="0"
                                                        className="apexcharts-ycrosshairs-hidden"
                                                    ></line>
                                                </g>
                                                <g className="apexcharts-annotations"></g>
                                            </svg>
                                            <div className="apexcharts-legend" style={{ maxHeight: '100px' }}></div>
                                            <div className="apexcharts-tooltip apexcharts-theme-dark">
                                                <div className="apexcharts-tooltip-series-group" style={{ order: '1' }}>
                                                    <span
                                                        className="apexcharts-tooltip-marker"
                                                        style={{ backgroundColor: '#886CC0' }}
                                                    ></span>
                                                    <div className="apexcharts-tooltip-text">
                                                        <div className="apexcharts-tooltip-y-group">
                                                            <span className="apexcharts-tooltip-text-label"></span>
                                                            <span className="apexcharts-tooltip-text-value"></span>
                                                        </div>
                                                        <div className="apexcharts-tooltip-z-group">
                                                            <span className="apexcharts-tooltip-text-z-label"></span>
                                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-tooltip-series-group" style={{ order: '2' }}>
                                                    <span
                                                        className="apexcharts-tooltip-marker"
                                                        style={{ backgroundColor: 'rgb(38, 224, 35)' }}
                                                    ></span>
                                                    <div className="apexcharts-tooltip-text">
                                                        <div className="apexcharts-tooltip-y-group">
                                                            <span className="apexcharts-tooltip-text-label"></span>
                                                            <span className="apexcharts-tooltip-text-value"></span>
                                                        </div>
                                                        <div className="apexcharts-tooltip-z-group">
                                                            <span className="apexcharts-tooltip-text-z-label"></span>
                                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-tooltip-series-group" style={{ order: '3' }}>
                                                    <span
                                                        className="apexcharts-tooltip-marker"
                                                        style={{ backgroundColor: 'rgb(97, 207, 241)' }}
                                                    ></span>
                                                    <div className="apexcharts-tooltip-text">
                                                        <div className="apexcharts-tooltip-y-group">
                                                            <span className="apexcharts-tooltip-text-label"></span>
                                                            <span className="apexcharts-tooltip-text-value"></span>
                                                        </div>
                                                        <div className="apexcharts-tooltip-z-group">
                                                            <span className="apexcharts-tooltip-text-z-label"></span>
                                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-tooltip-series-group" style={{ order: '4' }}>
                                                    <span
                                                        className="apexcharts-tooltip-marker"
                                                        style={{ backgroundColor: 'rgb(255, 218, 124)' }}
                                                    ></span>
                                                    <div className="apexcharts-tooltip-text">
                                                        <div className="apexcharts-tooltip-y-group">
                                                            <span className="apexcharts-tooltip-text-label"></span>
                                                            <span className="apexcharts-tooltip-text-value"></span>
                                                        </div>
                                                        <div className="apexcharts-tooltip-z-group">
                                                            <span className="apexcharts-tooltip-text-z-label"></span>
                                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="apexcharts-tooltip-series-group" style={{ order: '5' }}>
                                                    <span
                                                        className="apexcharts-tooltip-marker"
                                                        style={{ backgroundColor: 'rgb(255, 134, 177)' }}
                                                    ></span>
                                                    <div className="apexcharts-tooltip-text">
                                                        <div className="apexcharts-tooltip-y-group">
                                                            <span className="apexcharts-tooltip-text-label"></span>
                                                            <span className="apexcharts-tooltip-text-value"></span>
                                                        </div>
                                                        <div className="apexcharts-tooltip-z-group">
                                                            <span className="apexcharts-tooltip-text-z-label"></span>
                                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3 mt-4">
                                        <h4 className="fs-18 font-w600">Legend</h4>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <span className="fs-18 font-w500">
                                                <svg
                                                    className="me-3"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width="20" height="20" rx="6" fill="#886CC0"></rect>
                                                </svg>
                                                <p>Ho Chi Minh-Da Lat (27%)</p>
                                            </span>
                                            <span className="fs-18 font-w600">763</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between  mb-4">
                                            <span className="fs-18 font-w500">
                                                <svg
                                                    className="me-3"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width="20" height="20" rx="6" fill="#26E023"></rect>
                                                </svg>
                                                <p>Ho Chi Minh-MaDaGui (11%)</p>
                                            </span>
                                            <span className="fs-18 font-w600">321</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between  mb-4">
                                            <span className="fs-18 font-w500">
                                                <svg
                                                    className="me-3"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width="20" height="20" rx="6" fill="#61CFF1"></rect>
                                                </svg>
                                                <p>Da Lat-Ho Chi Minh (22%)</p>
                                            </span>
                                            <span className="fs-18 font-w600">69</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between  mb-4">
                                            <span className="fs-18 font-w500">
                                                <svg
                                                    className="me-3"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width="20" height="20" rx="6" fill="#FFDA7C"></rect>
                                                </svg>
                                                <p>MaDaGui-Bao Loc (15%)</p>
                                            </span>
                                            <span className="fs-18 font-w600">154</span>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between  mb-4">
                                            <span className="fs-18 font-w500">
                                                <svg
                                                    className="me-3"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect width="20" height="20" rx="6" fill="#FF86B1"></rect>
                                                </svg>
                                                <p>Bao Loc-Da Lat (25%)</p>
                                            </span>
                                            <span className="fs-18 font-w600">696</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardRightBody;
