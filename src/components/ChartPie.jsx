import { useState } from 'react';
import '.././App.css';
import Chart from "react-apexcharts";

function ChartPie(props) {

    var chartData = props.data;

    var defaultSettings = {
        options: {
            chart: {
                type: 'donut',
                fontFamily: 'SF Pro Display',
            },
            labels: chartData.labels,
            dataLabels: {
                enabled: true,
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.seriesIndex];
                },
                dropShadow: {
                    enabled: false,
                }
            },
            legend: {
                show: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    }
    var data = {
        series: chartData.data
    };

    return (
        <div className='chartBlock'>
            <div className="chartBlockHeader">
                <p className="chartBLockSubtitle">PORTFOLIO</p>
                <p className="chartBLockTitle">ASSET BREAKDOWN</p>
            </div>
            <div className="chartBlockBody">
            <div className="chartBlockFilter">
                    <button className={(props.assetStatus === 'Value') ? 'chartFilterButtonActive' : ''} onClick={e => props.switch('Value')}>Value</button>
                    <button className={(props.assetStatus === 'Invested') ? 'chartFilterButtonActive' : ''} onClick={e => props.switch('Invested')}>Invested</button>
                </div>
                <div className='chartPieWrapper'>
                <Chart options={defaultSettings.options}
                    series={data.series}
                    type="donut"
                    width={350}
                />
                </div>
                
            </div>
        </div>
    );
}

export default ChartPie;
