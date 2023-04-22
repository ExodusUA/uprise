import '.././App.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function SideBar(props) {

const [portfolioPercent, setPortfolioPercent] = useState(0)

    var activePage = props.activePage;
    var holdings = props.portfolioItems;
    var summa = 0;
    useEffect(() => {

        holdings.forEach(element => {
            summa = summa + (Number(element.Quantity) * Number(element.Cost))
        });

        setPortfolioPercent(((props.totalFolioValue + summa) / props.totalFolioValue).toFixed(2));
    }, [holdings])

    

    return (
        <div className='sideBarWrapper'>


            <div className='sideBar'>
                <div className="investing">
                    <div>
                        <p>Portfolio</p>
                        <p>{props.totalFolioValue} DH</p>
                    </div>
                    <p className='investingPercent'>{portfolioPercent}%</p>
                </div>

                <div className="sidebarMenu">
                    <Link to={'/dashboard'} className={(activePage === 'Home') ? 'sidebarMenuActive' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.5" height="21.618" viewBox="0 0 20.5 21.618">
                            <path data-name="Контур 42234" d="M6.657,18.771V15.7a1.426,1.426,0,0,1,1.424-1.419h2.886A1.426,1.426,0,0,1,12.4,15.7h0v3.076A1.225,1.225,0,0,0,13.6,20h1.924A3.456,3.456,0,0,0,19,16.562h0V7.838a2.439,2.439,0,0,0-.962-1.9L11.458.685a3.18,3.18,0,0,0-3.944,0L.962,5.943A2.42,2.42,0,0,0,0,7.847v8.714A3.456,3.456,0,0,0,3.473,20H5.4a1.235,1.235,0,0,0,1.241-1.229h0" transform="translate(0.75 0.868)" fill="rgba(0,0,0,0)" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" />
                        </svg>
                        <p>Home</p>
                    </Link>
                    <Link to={'portfolio'} className={(activePage === 'Portfolio') ? 'sidebarMenuActive' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.99" height="19.74" viewBox="0 0 19.99 19.74">
                            <path d="M19.273,12.735a.75.75,0,0,1,.691.805l-.19,2.509a4.008,4.008,0,0,1-3.979,3.691H4.195A4.008,4.008,0,0,1,.216,16.049L.026,13.54a.751.751,0,0,1,.692-.805.761.761,0,0,1,.805.692l.189,2.508A2.5,2.5,0,0,0,4.195,18.24h11.6a2.5,2.5,0,0,0,2.483-2.305l.19-2.508A.766.766,0,0,1,19.273,12.735ZM11.285,0a2.965,2.965,0,0,1,2.936,2.579h1.97a3.809,3.809,0,0,1,3.8,3.811V9.83a.75.75,0,0,1-.371.647,19.058,19.058,0,0,1-8.874,2.4v1.8a.75.75,0,1,1-1.5,0v-1.8a19.046,19.046,0,0,1-8.873-2.4A.748.748,0,0,1,0,9.83V6.381a3.81,3.81,0,0,1,3.81-3.8H5.77A2.965,2.965,0,0,1,8.705,0ZM16.19,4.08H3.81a2.308,2.308,0,0,0-2.31,2.3V9.393a18.015,18.015,0,0,0,8.481,2h.025l.476,0A17.865,17.865,0,0,0,18.49,9.393v-3A2.307,2.307,0,0,0,16.19,4.08ZM11.285,1.5H8.705A1.463,1.463,0,0,0,7.3,2.579h5.4A1.463,1.463,0,0,0,11.285,1.5Z" transform="translate(0 0)" fillRule="evenodd" />
                        </svg>
                        <p>Portfolio</p>
                    </Link>

                    <Link to={'settings'} className={(activePage === 'Settings') ? 'sidebarMenuActive' : ''}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.534" height="20.722" viewBox="0 0 19.534 20.722">
                            <g id="Setting" transform="translate(0.1 -0.028)">
                                <path id="Path_33946" d="M18.307,6.124l-.622-1.08a1.913,1.913,0,0,0-2.609-.7h0a1.9,1.9,0,0,1-2.609-.677,1.831,1.831,0,0,1-.256-.915h0A1.913,1.913,0,0,0,10.3.778H9.043a1.9,1.9,0,0,0-1.9,1.913h0A1.913,1.913,0,0,1,5.227,4.577a1.831,1.831,0,0,1-.915-.256h0a1.913,1.913,0,0,0-2.609.7l-.668,1.1a1.913,1.913,0,0,0,.7,2.609h0a1.913,1.913,0,0,1,0,3.314h0a1.9,1.9,0,0,0-.7,2.6h0l.632,1.089a1.913,1.913,0,0,0,2.609.741h0a1.895,1.895,0,0,1,2.6.7,1.831,1.831,0,0,1,.256.915h0A1.913,1.913,0,0,0,9.043,20H10.3a1.913,1.913,0,0,0,1.913-1.9h0a1.9,1.9,0,0,1,1.913-1.913,1.95,1.95,0,0,1,.915.256h0a1.913,1.913,0,0,0,2.609-.7h0l.659-1.1a1.9,1.9,0,0,0-.7-2.609h0a1.9,1.9,0,0,1-.7-2.609,1.876,1.876,0,0,1,.7-.7h0a1.913,1.913,0,0,0,.7-2.6h0Z" fill="rgba(0,0,0,0)" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fillRule="evenodd" />
                                <circle id="Ellipse_737" cx="2.636" cy="2.636" r="2.636" transform="translate(7.039 7.753)" fill="rgba(0,0,0,0)" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" opacity="0.4" />
                            </g>
                        </svg>
                        <p>Settings</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
