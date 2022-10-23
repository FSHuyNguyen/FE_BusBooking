import moment from 'moment/moment';
import React from 'react';
import { Ma_HCM } from '~/Data/RouteInformation';

const TwelveTableSeat = ({ ShowTrip, Props }) => {
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
                        <span>{Ma_HCM[0].data.location}</span>
                        <p className="desc">{Ma_HCM[0].data.address}</p>
                    </td>
                </tr>
                <tr>
                    <td className="time-td">
                        <i className="bx bxs-map-pin"></i>
                        <span className="time">{moment(`${Props.timeEnd}`, 'HH:mm:ss').format('HH:mm')}</span>
                    </td>
                    <td className="sub-title">
                        <span>{Ma_HCM[1].data.location}</span>
                        <p className="desc">{Ma_HCM[1].data.address}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TwelveTableSeat;
