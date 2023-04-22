import { useState } from 'react';
import '.././App.css';
import Chart from "react-apexcharts";
import { useEffect } from 'react';

function ChartSector(props) {

    var chartData = props.data;

    const [chartNumbers, setChartNumber] = useState([])
    const [chartSectors, setChartSectors] = useState([])
    const [filter, setFilter] = useState('Value')


    useEffect(() => {
        updateChart()

    }, [chartData, filter])

    function updateChart() {

        var chartSec = [];
        var chartNum = [];

        chartData.forEach(element => {
            chartSec.push(element.Sector)
            if (chartSec.indexOf(element.Sector) === -1) {
                chartSec.push(element.Sector)
            }
        });
        setChartSectors(chartSec)

        chartSec.forEach(sectorElement => {
            var summaValue = 0;
            var summaInvested = 0;
            chartData.forEach(element => {
                if (element.Sector === sectorElement) {
                    summaValue = summaValue + Number(element.Value)
                    summaInvested = summaInvested + Number(element.Invested)
                }
            });
            chartNum.push({
                Sector: sectorElement,
                Value: summaValue,
                Invested: summaInvested
            });

        });
        var finalArray = [];

        chartNum.forEach(element => {
            finalArray.push(element[filter])
        });

        setChartNumber(finalArray)
    }

    var defaultSettings = {
        options: {
            chart: {
                type: 'bar',
                height: 380,
                fontFamily: 'SF Pro Display',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    barHeight: '100%',
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom',
                    },
                }
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    colors: ['#fff']
                },
                formatter: function (val, opt) {
                    return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                },
                offsetX: 0,

            },
            legend: {
                show: false
            },
            stroke: {
                width: 1,
                colors: ['#fff']
            },
            xaxis: {
                categories: chartSectors,
            },
            yaxis: {
                labels: {
                    show: false
                }
            },

            tooltip: {
                theme: 'dark',
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function () {
                            return ''
                        }
                    }
                }
            }
        }
    }
    var data = {
        series: [{
            data: chartNumbers
        }],
    }



    return (
        <div className='chartBlock'>
            <div className="chartBlockHeader">
                <p className="chartBLockSubtitle">PORTFOLIO</p>
                <p className="chartBLockTitle">SECTOR BREAKDOWN</p>
            </div>
            <div className="chartBlockBody">
                <div className="chartBlockFilter">
                    <button className={(filter === 'Value') ? 'chartFilterButtonActive' : ''} onClick={e => {
                        setFilter('Value')

                    }}>Value</button>
                    <button className={(filter === 'Invested') ? 'chartFilterButtonActive' : ''} onClick={e => {
                        setFilter('Invested')

                    }}>Invested</button>
                </div>
                <Chart options={defaultSettings.options}
                    series={data.series}
                    type="bar"
                    height={290}
                />
            </div>
        </div>
    );
}

export default ChartSector;
