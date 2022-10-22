import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '~/components/SearchBusHeading/style.css';

const SearchBusHeading = () => {
    const [params, setParams] = useSearchParams();
    return (
        <div className="search__bus-heading">
            <h1 className="search__heading-place">
                {params.get('from')} - {params.get('to')}
            </h1>
            <div className="search__heading-time">{params.get('date')}</div>
        </div>
    );
};

export default SearchBusHeading;
