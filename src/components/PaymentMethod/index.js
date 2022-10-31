import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PayMethod from '~/Data/PayMethod';
import Image from '../Image';
import SevenTableSeat from '../SevenTableSeat';

const PaymentMethod = ({ user_id }) => {
    const [payMethod, setPayMethod] = useState({});
    const handlePayMethod = (event) => setPayMethod({ [event.target.id]: !payMethod[event.target.id] });
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleVNPPayment = () => {
        const vnpPayment = async () => {
            try {
                const res = await axios.post(process.env.REACT_APP_BASE_URL + '/vnpay-payment', {
                    user_id: user_id,
                    type_ticket_id: params.get('type_ticket_id'),
                    seat_id: JSON.stringify(params.get('seat_id').split(',')),
                });
                if (res.data.status === 200) {
                    openInNewTab(res.data.returnData.url);
                }
            } catch (error) {
                console.log(error);
            }
        };
        vnpPayment();
    };

    return (
        <>
            <div>
                <div className="payment-method-title">Phương thức thanh toán</div>
                <div className="payment-item-list">
                    {PayMethod.map((item, index) =>
                        item.data.map((pay_item, index) => (
                            <div className="payment-item-container" key={index}>
                                <button
                                    id={pay_item.id}
                                    onClick={handlePayMethod}
                                    className={`${payMethod[pay_item.id] ? 'payment-item-selected' : 'border-normal'}`}
                                >
                                    <img
                                        onClick={handlePayMethod}
                                        id={pay_item.id}
                                        className="check"
                                        alt="checkbox"
                                        src={`${
                                            payMethod[pay_item.id]
                                                ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAFgAAAAAcITNaAAACSUlEQVQ4EbWVP2gUQRTGvzc7MedtzGljYWIhQoQYLTQSFQKKtSYgNkZFxE4sLERJQGOnpLCzUBQRsbGIsRJsbBW7gIUERZIcIv65i3fH5XK7z3kjs+xddol3kmlm5s17v5n3duZbQkornN6zhauVESKMgLmfibaJKzHnQfSBGTOUyc5sfjb7KwlBzUY+fyRTXFq4whReAyPXvN4wJxSJ1Z1cd+9devymGl9rAFdO9fXUwuAFMw/GndYaE9H7DcobzT7/uOh8I7BAl8PgrUm7xy221BMtdipvyMGVBEv6ctK2oRbCf7M1LJlasK1pi+lLcHOTEgpL7GS//nL585ofqpmSNpcP2unvUHKl2oF6u/Yhe3nK5Ow1bmFukjC13FNzJ1tqXv8BdI0/RPg9nxgnTCWXP3E1xah3D6Fr4pGFlm6OAWGw2tMwlXtR8VU9eAwdwyfiJjvWA4fgT5iTfptH6cYYuPhjlY8YhKmTVvTAQWSOX0DF70bt1VProvcehn/9AcKvX1CaPANe+pkUGtm0vH1T4r7IYgbVJ7ehtvZi48VJIKibEy4Y6H2E+U8Gehb8O1EeIoQwqXBy57S5f6OR1Q10B/yr96D3HwXqNQTzcyjfOgcuFZxHak+gaSUqlehRX0F56hJW3r1GMDeLsqT/D1BhmQq8XL8HInoq0pd46jaMwhKm1Qqrp0b62uA0hIh8CkuM6yubsoPoqOip7CrzVprExLVYYm0pHETguU3bhwlq3ORSdPbUXpTM+EqME3jnG5XCGVz/vz/TPwESC7rVdcaIAAAAAElFTkSuQmCC'
                                                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAtFBMVEUAAAAAgICAgL+Upa2Pl5+bo6uVoKuWoKqfqLGWn6mapK2Zo62dpq+apa6dp7Cep6+ep7CbprCdp7Ccpa+cpq+bpq6ep7Gcpq+dp7Ccp7Cbpq+dprD////+///+/v76+vv6+vr4+fn29/f19vfx8vTs7vDr7e/i5efa3uHa3eDV2d3U2d3S1tvM0ta7wsixucCvt76psrqmrregqrKgqbKfqLKeqLGdp7CdprCcpq+bpa+bpa4Vzj1GAAAAHHRSTlMAAgQfID1GS1JoeX2Mp7m6v8zT4uPk7vP4+/v86VxdYgAAAX1JREFUeNqVldmSgjAQRaO44bjhrpNBZWBAQSBsmab//7/GoqgpXJDkPJ+HTtK5lzygdNXxfL3drudjtauQd/SnC8g45Ig58OxzOenXme2elgImLPCvN/yAJQip1mu/cjuzPUd2sQydFujGz4Uh3886z+5gAxg6tDRLn55DhM3gQW2NdhB7R/rEyYthN2rduUPAyKYvsSP8/ajaI4DApDWYAcCoMu8OgwOt5RDg7n/uzgYik77BjGDTKe93BrFN32LHMGsXcm+PHm3Aw32vkDUeHpvkY8i1Yh9SdGgjDqb9mzwF1ux+UQZTQpQVurQZ/YILhXQhsagAVgJdombMEJG/WaaSMQ90EVkP+JjMwadC+DAn6/wqJl/zNdmiqIxbKVlqDKkDSl2d8KMYLFOlnlt0kaiLS6Vc0WYYTISX/4xpX/RbnUKuSX1YqSiQCRmZ+JIJRvHIhWFLKMyPZZi/rIkHnKIm6grIrRSQ5ZYFJFFt9aW5qpQmrKb3pSlVx3/OLLyF52G6QAAAAABJRU5ErkJggg=='
                                        }`}
                                        height="22"
                                    />
                                    <div className="payment-item-images">
                                        <Image
                                            id={pay_item.id}
                                            onClick={handlePayMethod}
                                            src={pay_item.img}
                                            alt={`${pay_item.name}`}
                                            className="icon"
                                        />
                                    </div>
                                    <p className="payment-item-text">{pay_item.name}</p>
                                </button>
                            </div>
                        )),
                    )}
                </div>
            </div>
            <div className="booking-summary-buttons">
                <div className="booking-summart-left-button">
                    <button className="booking-summary-back-btn" onClick={() => navigate(-1)}>
                        <i className="bx bx-chevron-left"></i>
                        <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Back</font>
                    </button>
                </div>
                <div className="booking-summart-right-button">
                    <button className="booking-summary-pay-btn" onClick={handleVNPPayment}>
                        <font style={{ verticalAlign: 'inherit', fontSize: '20px' }}>Pay</font>
                    </button>
                </div>
            </div>
        </>
    );
};

export default PaymentMethod;
