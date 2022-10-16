import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingSkeleton = () => {
    return (
        <div className="deal-skeleton">
            <div className="left-col">
                <Skeleton circle width={40} height={40} />
            </div>
        </div>
    );
};

export default LoadingSkeleton;
