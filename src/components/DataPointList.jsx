import React from 'react';
import DataPoint from './DataPoint';

const DataPointList = ({ points }) => {
    return (
        <div className="mr-4">
            {points.map((point, index) => (
                <DataPoint key={index} point={point} />
            ))}
        </div>
    );
};

export default DataPointList;