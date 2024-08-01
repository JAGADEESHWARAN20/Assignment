// src/components/chart.tsx

import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { Scatter } from 'react-chartjs-2';

// Register Chart.js components
Chart.register(...registerables);

const GraphCanvas = ({ dataPoints }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'Data Points',
                            data: dataPoints,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            // Clean up chart instance on component unmount
            return () => {
                chartInstance.destroy();
            };
        }
    }, [dataPoints]);

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default GraphCanvas;
