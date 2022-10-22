import moment from 'moment/moment';
import React from 'react';
import { HCM_DL } from '~/Data/RouteInformation';

const OneTableSeat = ({ ShowTrip, Props }) => {
    return (
        <table className={`${!ShowTrip ? 'time-map' : ''} table`}>
            <thead>
                <tr className="sub-title">
                    <td>Thời gian</td>
                    <td>Khởi hành</td>
                </tr>
            </thead>
            <tbody className="table-body">
                <tr>
                    <td className="time-td">
                        <i className="bx bxs-map"></i>
                        <span className="time">
                            21/10/2022 {moment(`${Props.timeStart}`, 'HH:mm:ss').format('HH:mm')}
                        </span>
                    </td>
                    <td className="sub-title">
                        <span>{HCM_DL[0].data.location}</span>
                        <p className="desc">{HCM_DL[0].data.address}</p>
                    </td>
                </tr>
                <tr>
                    <td className="time-td"></td>
                    <td className="sub-title">
                        <span>{HCM_DL[1].data.location}</span>
                        <p className="desc">{HCM_DL[1].data.address}</p>
                    </td>
                </tr>
                <tr>
                    <td className="time-td"></td>
                    <td className="sub-title">
                        <span>{HCM_DL[2].data.location}</span>
                        <p className="desc">{HCM_DL[2].data.address}</p>
                    </td>
                </tr>
                <tr>
                    <td className="time-td">
                        <i className="bx bxs-map-pin"></i>
                        <span className="time">
                            22/10/2022 {moment(`${Props.timeEnd}`, 'HH:mm:ss').format('HH:mm')}
                        </span>
                    </td>
                    <td className="sub-title">
                        <span>{HCM_DL[3].data.location}</span>
                        <p className="desc">{HCM_DL[3].data.address}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default OneTableSeat;
