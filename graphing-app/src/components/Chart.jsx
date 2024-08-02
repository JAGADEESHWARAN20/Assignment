import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const ChartComponent = ({ dataPoints }) => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    const createChart = () => {
        if (chartRef.current) {
            chartInstanceRef.current = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [
                        {
                            label: 'Data Points',
                            data: dataPoints,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                            pointBorderColor: 'rgba(75, 192, 192, 1)',
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                },
            });
        }
    };

    const destroyChart = () => {
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }
    };

    useEffect(() => {
        createChart();

        const handleResize = () => {
            destroyChart();
            createChart();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            destroyChart();
            window.removeEventListener('resize', handleResize);
        };
    }, [dataPoints]);

    return (
        <div className="chart-container">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default ChartComponent;