import React, { useEffect, useState } from 'react';
import SearchBusHeading from '../SearchBusHeading';
import '~/components/SearchContainer/style.css';
import StepLineContainer from '../StepLineContainer';
import SearchBusMiddle from '../SearchBusMiddle';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const SearchContainer = () => {
    const [params, setParams] = useSearchParams();
    const [listTypeTicket, setListTypeTicket] = useState([]);
    useEffect(() => {
        const TypeTicketSearch = async () => {
            const res = await axios.get(process.env.REACT_APP_BASE_URL + '/search-by-station', {
                params: {
                    station_start: params.get('idfrom'),
                    station_end: params.get('idto'),
                },
            });
            setListTypeTicket(res.data.type_ticket);
        };
        TypeTicketSearch();
    }, []);
    return (
        <div>
            <div className="search_bus">
                <div className="grid">
                    <SearchBusHeading />
                    <StepLineContainer />
                    <SearchBusMiddle List={listTypeTicket} />
                </div>
            </div>
        </div>
    );
};

export default SearchContainer;
