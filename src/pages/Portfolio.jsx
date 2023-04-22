import React from 'react';
import { Link } from 'react-router-dom';
import '.././App.css';
import PortfolioItem from '../components/PortfolioItem';

function Portfolio(props) {
    props.setActivePage('Portfolio')

    return (
        <div className='portfolio'>

            <div className="portfolioHeader">
                <p>Holdings</p>
                <Link to={'/board'}>
                    <div className='addButton'>
                        <svg id="Plus" xmlns="http://www.w3.org/2000/svg" width="16.588" height="16.588" viewBox="0 0 16.588 16.588">
                            <path id="Combined-Shape" d="M11.909,0a4.531,4.531,0,0,1,4.679,4.888V11.7a4.531,4.531,0,0,1-4.679,4.888H4.679A4.531,4.531,0,0,1,0,11.7V4.888A4.531,4.531,0,0,1,4.679,0Zm0,1.157H4.679a3.4,3.4,0,0,0-3.521,3.73V11.7a3.4,3.4,0,0,0,3.521,3.73h7.231a3.4,3.4,0,0,0,3.521-3.73V4.888A3.4,3.4,0,0,0,11.909,1.157ZM8.294,4.882a.579.579,0,0,1,.579.579V7.708h2.25a.579.579,0,1,1,0,1.157H8.873v2.248a.579.579,0,0,1-1.157,0V8.865H5.465a.579.579,0,1,1,0-1.157h2.25V5.46A.579.579,0,0,1,8.294,4.882Z" fill="#fff" fillRule="evenodd" />
                        </svg>
                        <p>Add New</p>
                    </div>
                </Link>
            </div>

            <div className="portfolioWrapper">
                <div className="portfolioList">
                    <div className="portfolioListHeader">
                        <p>Portfolio</p>
                    </div>
                    <div className="portfolioListNames">
                        <div className='company'>
                            <p>COMPANY</p>
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
                            <p>INVESTED</p>
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
                            <p>VALUE</p>
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
                            <p>30 DAYS</p>
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
                            <p>YTD</p>
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
                                <PortfolioItem key={key} data={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
