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
    const [statusApi, setStatusApi] = useState(null);
    const [filter, setFilter] = useState({
        price: '',
        typeBus: [],
        valTypeBus: '',
        time_start: '',
        time_end: '',
    });
    useEffect(() => {
        const TypeTicketSearch = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_BASE_URL + '/search', {
                    params: {
                        station_start: params.get('idfrom'),
                        station_end: params.get('idto'),
                        type_bus_id: filter.valTypeBus,
                        time_start: filter.time_start,
                        time_end: filter.time_end,
                        sort_price: filter.price,
                    },
                });
                setListTypeTicket(res.data.type_ticket);
                setStatusApi(res.data.status);
            } catch (error) {
                setStatusApi(error.response.data.status);
            }
        };
        TypeTicketSearch();
    }, [filter]);
    return (
        <div>
            <div className="search_bus">
                <div className="grid">
                    <SearchBusHeading />
                    <StepLineContainer />
                    <SearchBusMiddle
                        List={listTypeTicket}
                        filter={filter}
                        setFilter={setFilter}
                        statusApi={statusApi}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchContainer;
