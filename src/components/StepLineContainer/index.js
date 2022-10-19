import React from 'react';
import '~/components/StepLineContainer/style.css';

const StepLineContainer = () => {
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
                    <div className="next-step">
                        <div className="text">2</div>
                        <div className="active-title">
                            <span id="step-id-2">XÁC NHẬN LỘ TRÌNH</span>
                        </div>
                    </div>
                    <div className="empty-step">
                        <div className="text">3</div>
                        <div className="next-title">
                            <span id="step-id-3">THÔNG TIN HÀNH KHÁCH</span>
                        </div>
                    </div>
                    <div className="empty-step">
                        <div className="text">4</div>
                        <div className="next-title">
                            <span id="step-id-4">THANH TOÁN</span>
                        </div>
                    </div>
                </div>
                <div className="line_search">
                    <div className="current-line_search"></div>
                    <div className="next-line_search"></div>
                    <div className="next-line_search"></div>
                </div>
            </div>
        </div>
    );
};

export default StepLineContainer;
