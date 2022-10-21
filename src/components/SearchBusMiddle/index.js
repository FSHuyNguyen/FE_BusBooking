import React, { useState } from 'react';
import '~/components/SearchBusMiddle/style.css';
import BusOption from '../BusOption';

const SearchBusMiddle = () => {
    const { Price, setPrice } = useState('');
    const { TypeBus, setTypeBus } = useState('');
    const { TimeStart, setTimeStart } = useState('');
    return (
        <div className="search__bus-middle">
            <div className="search__bus-content">
                <div className="search__bus-content">
                    <div className="search__bus-content-filter">
                        <select
                            value={Price}
                            className="custom-select filter-select"
                            onClick={(e) => setPrice(e.target.value)}
                        >
                            <option value="Giá">Giá</option>
                            <option value="Thấp-Cao">Thấp - Cao</option>
                            <option value="Cao-Thấp">Cao - Thấp</option>
                        </select>
                        <select
                            value={TypeBus}
                            className="custom-select filter-select"
                            onClick={(e) => setTypeBus(e.target.value)}
                        >
                            <option value="Loại xe">Loại xe</option>
                            <option value="Giường nằm">Giường nằm</option>
                            <option value="Limousine">Limousine</option>
                        </select>
                        <select
                            value={TimeStart}
                            className="custom-select filter-select"
                            onClick={(e) => setTimeStart(e.target.value)}
                        >
                            <option value="Giờ">Giờ</option>
                            <option value="0h-6h">0h - 6h</option>
                            <option value="6h-12h">6h - 12h</option>
                            <option value="12h-18h">12h - 18h</option>
                            <option value="18h-24h">18h - 24h</option>
                        </select>
                    </div>
                    <h2 className="trip-info">Chọn giờ lên xe đi Đà Lạt từ TP.Hồ Chí Minh</h2>
                </div>
                <BusOption />
            </div>
        </div>
    );
};

export default SearchBusMiddle;
