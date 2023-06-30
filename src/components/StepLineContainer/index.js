import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '~/components/StepLineContainer/style.css';

const StepLineContainer = () => {
    const [params, setParams] = useSearchParams();

    return (
        <div className="step-line-container">
            <div className="step-line">
                <div className="step-circles">
                    <div className="current-step">
                        <div className="text">1</div>
                        <div className="active-title">
                            <span id="step-id-1">CHỌN TUYẾN</span>
                        </div>
                    </div>
                    <div className={`${params.get('status') ? 'current-step' : 'next-step'}`}>
                        <div className="text">2</div>
                        <div className="active-title">
                            <span id="step-id-2">XÁC NHẬN LỘ TRÌNH</span>
                        </div>
                    </div>
                    <div
                        className={`${
                            (params.get('status') === null ? 'empty-step' : '') ||
                            (params.get('status') && !params.get('status-payment') && 'next-step') ||
                            (params.get('status') && params.get('status-payment') && 'current-step')
                        }
                        `}
                    >
                        <div className="text">3</div>
                        <div className={`${params.get('status') ? 'active-title' : 'next-title'}`}>
                            <span id="step-id-3">THÔNG TIN HÀNH KHÁCH</span>
                        </div>
                    </div>
                    <div
                        className={`${
                            !params.get('status') || (params.get('status') && !params.get('status-payment'))
                                ? 'empty-step'
                                : 'next-step'
                        }`}
                    >
                        <div className="text">4</div>
                        <div
                            className={`${
                                !params.get('status') || (params.get('status') && !params.get('status-payment'))
                                    ? 'next-title'
                                    : 'active-title'
                            }`}
                        >
                            <span id="step-id-4">THANH TOÁN</span>
                        </div>
                    </div>
                </div>
                <div className="line_search">
                    <div className="current-line_search"></div>
                    <div className={`${params.get('status') ? 'current-line_search' : 'next-line_search'}`}></div>
                    <div
                        className={`${
                            !params.get('status') || (params.get('status') && !params.get('status-payment'))
                                ? 'next-line_search'
                                : 'current-line_search'
                        }`}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default StepLineContainer;
