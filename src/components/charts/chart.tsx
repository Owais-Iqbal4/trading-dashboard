"use client"

import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartPropTypes } from './chart.types';
import { chartData } from '../app.utils'
import { useSelector } from 'react-redux';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const Chart: React.FC<ChartPropTypes> = (props) => {
    const date = useSelector((state: any) => state.chartData.date);
    const [data, setData] = useState({
        labels: [
            'Jan 23', 'Feb 23', 'Mar 23', 'Apr 23', 'May 23', 'Jun 23', 'Jul 23', 'Aug 23',
            'Sep 23', 'Oct 23', 'Nov 23', 'Dec 23', 'Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24', 'Jul 24', 'Aug 24'
        ],
        datasets: [
            {
                type: 'line',
                label: 'Net / Gross Profit',
                data: [65, 59, 80, 81, 56, 55, 40, 45, 50, 55, 60, 70, 80, 90, 100, 10, 120, 130, 140, 150],
                fill: false,
                borderColor: '#FEC84B',
                backgroundColor: '#0046FF',
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 5,
            },
            {
                type: 'bar',
                label: 'Balance',
                data: [85, 72, 70, 75, 92, 80, 85, 90, 95, 85, 80, 85, 75, 80, 85, 9, 95, 100, 105, 110],
                backgroundColor: '#0046FF',
            },
            {
                type: 'bar',
                label: 'Cost',
                data: [30, 40, 50, 60, 55, 65, 70, 75, 60, 65, 70, 75, 80, 85, 90, 9, 100, 105, 110, 115],
                backgroundColor: '#F03EFF',
            },
            {
                type: 'bar',
                label: 'Revenue',
                data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
                backgroundColor: '#26C6DA',
            },
        ],
    })
    // const dataCH = {
    //     labels: [
    //         'Jan 23', 'Feb 23', 'Mar 23', 'Apr 23', 'May 23', 'Jun 23', 'Jul 23', 'Aug 23',
    //         'Sep 23', 'Oct 23', 'Nov 23', 'Dec 23', 'Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24', 'Jul 24', 'Aug 24'
    //     ],
    //     datasets: [
    //         {
    //             type: 'line',
    //             label: 'Net / Gross Profit',
    //             data: [65, 59, 80, 81, 56, 55, 40, 45, 50, 55, 60, 70, 80, 90, 100, 10, 120, 130, 140, 150],
    //             fill: false,
    //             borderColor: '#FEC84B',
    //             backgroundColor: '#0046FF',
    //             tension: 0.4,
    //             borderWidth: 2,
    //             pointRadius: 5,
    //         },
    //         {
    //             type: 'bar',
    //             label: 'Balance',
    //             data: [85, 72, 70, 75, 92, 80, 85, 90, 95, 85, 80, 85, 75, 80, 85, 9, 95, 100, 105, 110],
    //             backgroundColor: '#0046FF',
    //         },
    //         {
    //             type: 'bar',
    //             label: 'Cost',
    //             data: [30, 40, 50, 60, 55, 65, 70, 75, 60, 65, 70, 75, 80, 85, 90, 9, 100, 105, 110, 115],
    //             backgroundColor: '#F03EFF',
    //         },
    //         {
    //             type: 'bar',
    //             label: 'Revenue',
    //             data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
    //             backgroundColor: '#26C6DA',
    //         },
    //     ],
    // };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow chart to fill the container
        plugins: {
            legend: {
                labels: {
                    color: '#FFF',
                },
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#FFF',
                },
                grid: {
                    color: 'rgba(0,0,0,0)',
                },
            },
            y: {
                ticks: {
                    color: '#FFF',
                },
                grid: {
                    color: 'rgba(0,0,0,0)',
                },
            },
        },
    };


    useEffect(() => {
        let arrayData: Array<any> = [];
        arrayData = chartData.filter((item: any) => {
            return item?.name === date;
        });
        setData(arrayData[0].data)
        console.log('arrayData ', arrayData[0].data)
    }, [date])

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }} className='min-w-[500px]'>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Chart;
