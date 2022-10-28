import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import EightTableSeat from '../EightTableSeat';
import ElevenTableSeat from '../ElevenTableSeat';
import FiveTableSeat from '../FiveTableSeat';
import FourTableSeat from '../FourTableSeat';
import NineTableSeat from '../NineTableSeat';
import OneTableSeat from '../OneTableSeat';
import SevenTableSeat from '../SevenTableSeat';
import SixTableSeat from '../SixTableSeat';
import TenTableSeat from '../TenTableSeat';
import ThreeTableSeat from '../ThreeTableSeat';
import TwelveTableSeat from '../TwelveTableSeat';
import TwoTableSeat from '../TwoTableSeat';
import SeatMapContent from '../SeatMapContent';

const Seat = ({ ...props }) => {
    const [dataSeat, setDataSeat] = useState([]);
    const [showTrip, setShowTrip] = useState(false);

    useEffect(() => {
        const getSeatbyBusId = async () => {
            const res = await axios.get(process.env.REACT_APP_BASE_URL + '/seat/' + props.BusId);
            setDataSeat(res.data.all_seat);
        };
        getSeatbyBusId();
    }, []);

    const handleShowTrip = () => {
        setShowTrip(!showTrip);
    };
    return (
        <>
            {(dataSeat.length === 0 && (
                <>
                    <ContentLoader
                        speed={2}
                        width={'100%'}
                        height={564}
                        viewBox="0 0 655 564"
                        backgroundColor="#f5f5f5"
                        foregroundColor="#ccc"
                    >
                        <rect x="80" y="9" rx="0" ry="0" width="464" height="45" />
                        <rect x="223" y="93" rx="0" ry="0" width="0" height="1" />
                        <rect x="205" y="122" rx="0" ry="0" width="2" height="0" />
                        <rect x="80" y="73" rx="16" ry="16" width="464" height="396" />
                        <rect x="17" y="493" rx="0" ry="0" width="654" height="58" />
                    </ContentLoader>
                </>
            )) || (
                <div>
                    <div className="time-line-content">
                        <div className="title-content" onClick={handleShowTrip}>
                            <p className="title">LỊCH TRÌNH CHUYẾN ĐI</p>
                        </div>
                        {props.From === 'Ho Chi Minh' && props.To === 'Da Lat' && (
                            <OneTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                        {props.From === 'Ho Chi Minh' && props.To === 'MaDaGui' && (
                            <TwoTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                        {props.From === 'Ho Chi Minh' && props.To === 'Bao Loc' && (
                            <ThreeTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                        {props.From === 'MaDaGui' && props.To === 'Bao Loc' && (
                            <FourTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                        {props.From === 'MaDaGui' && props.To === 'Da Lat' && (
                            <FiveTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                        {props.From === 'Bao Loc' && props.To === 'Da Lat' && (
                            <SixTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                        {props.From === 'Da Lat' && props.To === 'Ho Chi Minh' && (
                            <SevenTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                        {props.From === 'Da Lat' && props.To === 'Bao Loc' && (
                            <EightTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                        {props.From === 'Da Lat' && props.To === 'MaDaGui' && (
                            <NineTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                        {props.From === 'Bao Loc' && props.To === 'MaDaGui' && (
                            <TenTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                        {props.From === 'Bao Loc' && props.To === 'Ho Chi Minh' && (
                            <ElevenTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                        {props.From === 'MaDaGui' && props.To === 'Ho Chi Minh' && (
                            <TwelveTableSeat ShowTrip={showTrip} Props={props} />
                        )}
                    </div>
                    <SeatMapContent dataSeat={dataSeat} props={props} />
                </div>
            )}
        </>
    );
};

export default Seat;
