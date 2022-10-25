import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '~/components/SearchConfirmation/style.css';
import DepatureConfirmation from '../DepartureConfirmation';
import StepLineContainer from '../StepLineContainer';
import moment from 'moment/moment';

const SearchConfirmation = () => {
    const [params, setParams] = useSearchParams();
    return (
        <div className="search-confimation">
            <div className="grid">
                <div className="search__confimation-heading">
                    <h1 className="search-heading-place">Xác nhận thông tin chuyến xe</h1>
                    <div className="search-heading-time">
                        <span>{moment(`${params.get('time')}`, 'HH:mm:ss').format('HH:mm')}</span>
                        &nbsp;&nbsp;{params.get('date')}&nbsp;•&nbsp;
                        <span>
                            {params.get('from')}&nbsp;-&nbsp;{params.get('to')}
                        </span>
                    </div>
                </div>
                <StepLineContainer />
                <DepatureConfirmation />
            </div>
        </div>
    );
};

export default SearchConfirmation;
