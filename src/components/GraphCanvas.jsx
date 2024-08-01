// import React from 'react';
// import { useDrop } from 'react-dnd';
// import { Line, Scatter, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

// const ItemTypes = {
//     POINT: 'point',
// };

// const GraphCanvas = ({ dataPoints, setDataPoints, graphType }) => {
//     const [{ isOver }, drop] = useDrop(() => ({
//         accept: ItemTypes.POINT,
//         drop: (item) => addPoint(item.point),
//         collect: (monitor) => ({
//             isOver: !!monitor.isOver(),
//         }),
//     }));

//     const addPoint = (point) => {
//         setDataPoints((prevPoints) => [...prevPoints, point]);
//     };

//     const data = {
//         datasets: [
//             {
//                 label: 'Data Points',
//                 data: dataPoints,
//                 backgroundColor: 'rgba(75,192,192,1)',
//             },
//         ],
//     };

//     const options = {
//         scales: {
//             x: {
//                 type: 'linear',
//                 position: 'bottom',
//             },
//             y: {
//                 type: 'linear',
//             },
//         },
//     };

//     return (
//         <div ref={drop} className={`p-4 bg-white border rounded ${isOver ? 'bg-gray-200' : ''}`}>
//             {graphType === 'line' && <Line data={data} options={options} />}
//             {graphType === 'scatter' && <Scatter data={data} options={options} />}
//             {graphType === 'bar' && <Bar data={data} options={options} />}
//         </div>
//     );
// };

// export default GraphCanvas;

import React from 'react';
import { useDrop } from 'react-dnd';
import { Line, Scatter, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ItemTypes = {
    POINT: 'point',
};

const GraphCanvas = ({ dataPoints, setDataPoints, graphType, selectedPoint, setSelectedPoint }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.POINT,
        drop: (item) => addPoint(item.point),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addPoint = (point) => {
        setDataPoints((prevPoints) => [...prevPoints, point]);
    };

    const handlePointClick = (point) => {
        setSelectedPoint(point);
    };

    const data = {
        datasets: [
            {
                label: 'Data Points',
                data: dataPoints,
                backgroundColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            },
            y: {
                type: 'linear',
            },
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const index = elements[0].index;
                handlePointClick(dataPoints[index]);
            }
        },
    };

    return (
        <div ref={drop} className={`graph-canvas ${isOver ? 'bg-gray-200' : ''}`}>
            {graphType === 'line' && <Line data={data} options={options} />}
            {graphType === 'scatter' && <Scatter data={data} options={options} />}
            {graphType === 'bar' && <Bar data={data} options={options} />}
        </div>
    );
};

export default GraphCanvas;