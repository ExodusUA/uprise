import React from 'react';
import '.././App.css';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import { useState } from 'react';
import Portfolio from '../pages/Portfolio';
import Settings from '../pages/Settings';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { useEffect } from 'react';
import Preloader from '../components/Preloader';

function Dashboard() {
    const [loading, setLoading] = useState(true)

    const [activePage, setActivePage] = useState('Home')
    const [updateTime, setUpdateTime] = useState('')

    const token = window.localStorage.getItem('token')
    console.log(token)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token + "");

    const [allHoldings, setAllHoldings] = useState([])
    const [portfolioItems, setPortfolioItems] = useState([])
    const [performanceList, setPerformanceList] = useState([])
    const [stocks, setStocks] = useState([])
    const [totalFolioValue, setTotalFolioValue] = useState('')

    var stocksList = [];
    var holdings = [];


    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch('https://backend.uprise.partnerswire.com/authenticated/v1/stocks', requestOptions)
            .then(response => response.json())
            .then(response => {
                stocksList = response;
                setStocks(response)
            })
            .catch(err => console.error(err));

        fetch('https://backend.uprise.partnerswire.com/authenticated/v1/holdings', requestOptions)
            .then(response => response.json())
            .then(response => {
                setAllHoldings(response)
                formatHoldings(response.holdings)
                holdings = response.holdings
            })
            .catch(err => console.error(err));

    }, [])

    function formatHoldings(data) {
        var formattedData = [];
        var performance = []

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch('https://backend.uprise.partnerswire.com/authenticated/v1/performance', requestOptions)
            .then(response => response.json())
            .then(response => {
                performance = response.performance;
                setPerformanceList(response.performance)

                var costSum = 0;
                data.forEach(element => {
                    costSum = costSum + Number(element.cost)
                });

                data.forEach(element => {
                    const companyName = getStocksName(element.stock_id)
                    const companyID = element.stock_id;

                    /* CALCULATIONS */

                    var lastPrice;
                    var thirty_day_change;
                    var one_year_change;

                    performance.forEach(element => {
                        if (element.stock_id === companyID) {
                            lastPrice = Number(element.last_price)
                            thirty_day_change = Number(element.thirty_day_change)
                            one_year_change = Number(element.one_year_change)
                        }
                    })

                    /* SECTOR */

                    var sector;

                    stocksList.forEach(stockElement => {
                        if (stockElement.id === element.stock_id) {
                            sector = stockElement.sector;
                        }
                    });


                    var value_A = lastPrice * element.quantity
                    var value_B = totalFolio(holdings, performance)

                    var MTD = thirty_day_change / lastPrice;
                    var YTD = one_year_change / lastPrice;
                    formattedData.push({
                        Company: companyName,
                        Sector: sector,
                        Invested: ((element.cost / costSum) * 100).toFixed(2),
                        Value: ((value_A / value_B) * 100).toFixed(2),
                        MTD: (MTD * 100).toFixed(2),
                        YTD: (YTD * 100).toFixed(2),
                        lastPrice: lastPrice,
                        thirty_day_change: thirty_day_change,
                        stock_id: companyID,
                        Cost: element.cost,
                        Quantity: element.quantity
                    })
                });
                setPortfolioItems(formattedData)
               
                setLoading(false)
            })
            .catch(err => console.error(err));
    }

    function totalFolio(hold, pefr) {
        var summa = 0;

        hold.forEach(element => {

            var id = element.stock_id;
            var quantity = Number(element.quantity);
            pefr.forEach(element => {
                if (element.stock_id === id) {
                    summa = summa + (quantity * Number(element.last_price))
                }
            });

        });
        setTotalFolioValue(summa)
        return summa;
    }

    function getStocksName(stock_id) {
        var stockName;
        stocksList.forEach(element => {
            if (element.id === stock_id) {
                stockName = element.name
            }
        });
        return stockName;
    }

    return (
        <section className='dashboard'>
            <Navbar routing={setActivePage} setUpdateTime={setUpdateTime} updateTime={updateTime} />
            <div className="dashboardBody">
                <SideBar routing={setActivePage} activePage={activePage} totalFolioValue={totalFolioValue} portfolioItems={portfolioItems} />

                <div className="dashboardWrapper">
                    <Routes>
                        <Route path='/' element={<Home updateTime={updateTime} portfolioItems={portfolioItems} performance={performanceList} setActivePage={setActivePage} />}></Route>
                        <Route path='/portfolio' element={<Portfolio portfolioItems={portfolioItems} setActivePage={setActivePage} />}></Route>
                        <Route path='/settings' element={<Settings setActivePage={setActivePage} />}></Route>
                    </Routes>
                </div>
            </div>
            {
                (loading === true)
                    ? <Preloader />
                    : ''
            }
        </section>
    );
}

export default Dashboard;
