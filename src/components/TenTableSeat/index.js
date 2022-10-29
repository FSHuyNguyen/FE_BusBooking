import moment from 'moment/moment';
import React from 'react';

const TenTableSeat = ({ ShowTrip, Props }) => {
    return (
        <table className={`${!ShowTrip ? 'time-map' : ''} table`}>
            <thead>
                <tr className="sub-title">
                    <td className="sub-title-time">Thời gian</td>
                    <td className="sub-title-station">Khởi hành</td>
                </tr>
            </thead>
            <tbody className="table-body">
                <tr>
                    <td className="time-td">
                        <i className="bx bxs-map"></i>
                        <span className="time">{moment(`${Props.timeStart}`, 'HH:mm:ss').format('HH:mm')}</span>
                    </td>
                    <td className="sub-title">
                        <span>{Props.location_start}</span>
                        <p className="desc">{Props.address_start}</p>
                    </td>
                </tr>
                <tr>
                    <td className="time-td">
                        <i className="bx bxs-map-pin"></i>
                        <span className="time">{moment(`${Props.timeEnd}`, 'HH:mm:ss').format('HH:mm')}</span>
                    </td>
                    <td className="sub-title">
                        <span>{Props.location_end}</span>
                        <p className="desc">{Props.address_end}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TenTableSeat;
