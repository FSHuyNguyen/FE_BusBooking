import React from 'react';
import SearchBusHeading from '../SearchBusHeading';
import '~/components/SearchContainer/style.css';
import StepLineContainer from '../StepLineContainer';
import SearchBusMiddle from '../SearchBusMiddle';

const SearchContainer = () => {
    return (
        <div>
            <div className="search_bus">
                <div className="grid">
                    <SearchBusHeading />
                    <StepLineContainer />
                    <SearchBusMiddle />
                </div>
            </div>
        </div>
    );
};

export default SearchContainer;
