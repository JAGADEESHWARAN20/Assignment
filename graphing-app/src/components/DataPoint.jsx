import React from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
    POINT: 'point',
};

const DataPoint = ({ point }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.POINT,
        item: { point },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className={`p-2 m-2 bg-white border rounded cursor-pointer ${isDragging ? 'opacity-50' : 'opacity-100'}`}
        >
            {`(${point.x}, ${point.y})`}
        </div>
    );
};

export default DataPoint;