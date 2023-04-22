import React, { useEffect } from 'react';
import '.././App.css';
import ChartPie from '../components/ChartPie';
import ChartSector from '../components/ChartSector';
import ChartTable from '../components/ChartTable';
import AssetItem from '../components/AssetItem';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home(props) {
    props.setActivePage('Home')

    const [assetStatus, setAssetStatus] = useState('Value')
    const [assetData, setAssetData] = useState({
        data: [],
        labels: []
    })
    const [dividentChart, setDividentChart] = useState({
        Percent: [38],
        Data: [
            {
                asset: 'ZIM',
                yield: '109.97%',
            }, {
                asset: 'Test',
                yield: '25%',
            }, {
                asset: 'Test2',
                yield: '33%',
            }
        ]
    })

    useEffect(() => {

        var newDividentData = {
            Percent: [],
            Data: []
        }

        var allYield = 0;
        var perf = props.performance;

        perf.forEach(element => {
            allYield = allYield + Number(element.dividend_yield)
            var companyName;

            props.portfolioItems.forEach(portfolioElement => {
                if (portfolioElement.stock_id === element.stock_id) {
                    companyName = portfolioElement.Company
                }
            });

            newDividentData.Data.push({
                asset: companyName,
                yield: element.dividend_yield
            })
        });
        var allPercentage = allYield / perf.length;
        newDividentData.Percent = allPercentage

        setDividentChart(newDividentData)
    }, [props.performance])


    useEffect(() => {
        formatAsset(assetStatus)
    }, [props.portfolioItems, assetStatus])

    function formatAsset(assetStatus) {
        var assetChart = {
            data: [],
            labels: []
        }
        props.portfolioItems.forEach(element => {
            assetChart.data.push(Number(element[assetStatus]))
            assetChart.labels.push(element.Company)
        });
        setAssetData(assetChart)
    }


    return (
        <div className='home'>
            <div className="homeHeader">
                <p>Dashboard</p>
                <Link to={'/board'}>
                    <div className='addButton'>
                        <svg id="Plus" xmlns="http://www.w3.org/2000/svg" width="16.588" height="16.588" viewBox="0 0 16.588 16.588">
                            <path id="Combined-Shape" d="M11.909,0a4.531,4.531,0,0,1,4.679,4.888V11.7a4.531,4.531,0,0,1-4.679,4.888H4.679A4.531,4.531,0,0,1,0,11.7V4.888A4.531,4.531,0,0,1,4.679,0Zm0,1.157H4.679a3.4,3.4,0,0,0-3.521,3.73V11.7a3.4,3.4,0,0,0,3.521,3.73h7.231a3.4,3.4,0,0,0,3.521-3.73V4.888A3.4,3.4,0,0,0,11.909,1.157ZM8.294,4.882a.579.579,0,0,1,.579.579V7.708h2.25a.579.579,0,1,1,0,1.157H8.873v2.248a.579.579,0,0,1-1.157,0V8.865H5.465a.579.579,0,1,1,0-1.157h2.25V5.46A.579.579,0,0,1,8.294,4.882Z" fill="#fff" fillRule="evenodd" />
                        </svg>
                        <p>Add New</p>
                    </div>
                </Link>

            </div>
            <div className="homeCharts">
                <ChartPie assetStatus={assetStatus} switch={setAssetStatus} data={assetData} />
                <ChartTable data={dividentChart} />
                <ChartSector data={props.portfolioItems} />
            </div>
            <div className="assetTable">
                <div className='chartBlock'>
                    <div className="chartBlockHeader">
                        <p className="chartBLockSubtitle">PORTFOLIO</p>
                        <p className="chartBLockTitle">ASSET BREAKDOWN</p>
                    </div>
                    <div className="chartBlockBody">
                        <div className="portfolioList">
                            <div className="portfolioListNames">
                                <div className='company'>
                                    <p>TICKER</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.839" height="12.083" viewBox="0 0 13.839 12.083">
                                        <g transform="translate(1.061 0.75)">
                                            <line className='sortIcon' id="Stroke-1" y1="8.824" transform="translate(9.075 1.759)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                            <path className='sortIcon' id="Stroke-3" d="M16.046,13.068,13.4,15.723l-2.642-2.654" transform="translate(-4.329 -5.14)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" />
                                            <line className='sortIcon' id="Stroke-5" y2="8.824" transform="translate(2.642 0)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                            <path className='sortIcon' id="Stroke-7" d="M.833,3.487,3.476.832,6.118,3.487" transform="translate(-0.833 -0.832)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <p>PRICE</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.839" height="12.083" viewBox="0 0 13.839 12.083">
                                        <g transform="translate(1.061 0.75)">
                                            <line className='sortIcon' id="Stroke-1" y1="8.824" transform="translate(9.075 1.759)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                            <path className='sortIcon' id="Stroke-3" d="M16.046,13.068,13.4,15.723l-2.642-2.654" transform="translate(-4.329 -5.14)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" />
                                            <line className='sortIcon' id="Stroke-5" y2="8.824" transform="translate(2.642 0)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                            <path className='sortIcon' id="Stroke-7" d="M.833,3.487,3.476.832,6.118,3.487" transform="translate(-0.833 -0.832)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <p>CHANGE</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.839" height="12.083" viewBox="0 0 13.839 12.083">
                                        <g transform="translate(1.061 0.75)">
                                            <line className='sortIcon' id="Stroke-1" y1="8.824" transform="translate(9.075 1.759)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                            <path className='sortIcon' id="Stroke-3" d="M16.046,13.068,13.4,15.723l-2.642-2.654" transform="translate(-4.329 -5.14)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" />
                                            <line className='sortIcon' id="Stroke-5" y2="8.824" transform="translate(2.642 0)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                            <path className='sortIcon' id="Stroke-7" d="M.833,3.487,3.476.832,6.118,3.487" transform="translate(-0.833 -0.832)" fill="none" stroke="#909ca8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="portfolioListItems">
                                {
                                    props.portfolioItems.map((item, key) => (
                                        <AssetItem data={item} key={key} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
