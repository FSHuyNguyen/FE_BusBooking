import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import '~/components/SearchConfirmation/style.css';
import DepatureConfirmation from '../DepartureConfirmation';
import StepLineContainer from '../StepLineContainer';
import moment from 'moment/moment';
import axios from 'axios';

const SearchConfirmation = () => {
    const [params, setParams] = useSearchParams();
    const [getTypeTicket, setGetTypeTicket] = useState([]);

    useEffect(() => {
        const getTypeTicketbyId = async () => {
            const res = await axios.get(process.env.REACT_APP_BASE_URL + '/typeticket/' + params.get('type'));
            setGetTypeTicket(res.data.type_ticket_by_id);
        };
        getTypeTicketbyId();
    }, []);

    return (
        <div className="search-confimation">
            <div className="grid">
                <div className="search__confimation-heading">
                    <h1 className="search-heading-place">Xác nhận thông tin chuyến xe</h1>
                    <div className="search-heading-time">
                        <span>{moment(`${getTypeTicket.time_start}`, 'HH:mm:ss').format('HH:mm')}</span>
                        &nbsp;&nbsp;{params.get('date')}&nbsp;•&nbsp;
                        <span>
                            {getTypeTicket.from}&nbsp;-&nbsp;{getTypeTicket.to}
                        </span>
                    </div>
                </div>
                <StepLineContainer />
                <DepatureConfirmation TypeTicket={getTypeTicket} />
            </div>
        </div>
    );
};

export default SearchConfirmation;
