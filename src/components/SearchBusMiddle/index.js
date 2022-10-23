import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '~/components/SearchBusMiddle/style.css';
import BusOption from '../BusOption';
import moment from 'moment/moment';

const SearchBusMiddle = ({ filter, setFilter, List }) => {
    const [time, setTime] = useState('');
    useEffect(() => {
        const getTypeBusApi = async () => {
            const res = await axios.get(process.env.REACT_APP_BASE_URL + '/typebus');
            setFilter({
                ...filter,
                typeBus: res.data.type_bus,
            });
        };
        getTypeBusApi();
    }, []);

    const HandleChangeTime = (value) => {
        setTime(value);
        switch (value) {
            case '1':
                setFilter({
                    ...filter,
                    time_start: '00:00:00',
                    time_end: '08:00:00',
                });
                return;
            case '2':
                setFilter({
                    ...filter,
                    time_start: '08:00:00',
                    time_end: '16:00:00',
                });
                return;

            case '3':
                setFilter({
                    ...filter,
                    time_start: '16:00:00',
                    time_end: '24:00:00',
                });
                return;
            default:
                return;
        }
    };

    return (
        <div className="search__bus-middle">
            <div className="search__bus-content">
                <div className="search__bus-content">
                    <div className="search__bus-content-filter">
                        <select
                            value={filter.price}
                            onChange={(e) => setFilter({ ...filter, price: e.target.value })}
                            className="custom-select filter-select"
                        >
                            <option value="0">Giá</option>
                            <option id="0" value="asc">
                                Thấp - Cao
                            </option>
                            <option id="1" value="desc">
                                Cao - Thấp
                            </option>
                        </select>
                        <select
                            className="custom-select filter-select"
                            value={filter.valTypeBus}
                            onChange={(e) => setFilter({ ...filter, valTypeBus: e.target.value })}
                        >
                            {filter.typeBus.map((item, index) => (
                                <option id={item.id} value={item.id} key={index}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                        <select
                            value={filter.time}
                            className="custom-select filter-select"
                            onChange={(e) => HandleChangeTime(e.target.value)}
                        >
                            <option value="0">Giờ</option>
                            <option value="1">0h - 8h</option>
                            <option value="2">8h - 16h</option>
                            <option value="3">16h - 24h</option>
                        </select>
                    </div>
                    <h2 className="trip-info">Chọn giờ lên xe đi Đà Lạt từ TP.Hồ Chí Minh</h2>
                </div>

                <BusOption ListItem={List} filter={filter} />
            </div>
        </div>
    );
};

export default SearchBusMiddle;
