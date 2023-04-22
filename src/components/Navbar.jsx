import '.././App.css';

import avatar from '../images/avatar.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moment from 'moment'

function Navbar(props) {

    useEffect(() => {
        var lastUpdateTime = window.localStorage.getItem('update_time')

        if (lastUpdateTime) {
            props.setUpdateTime(moment(lastUpdateTime).fromNow())
        } else {
            props.setUpdateTime('never')
        }
    }, [])

    function updatePortfolio() {
        var currentTime = moment();
        window.location.reload()
        var lastUpdateTime = window.localStorage.getItem('update_time')
        window.localStorage.setItem('update_time', currentTime)

        if (lastUpdateTime) {
            props.setUpdateTime('a few seconds ago')
        } else {
            props.setUpdateTime('never')
        }
    }

    function userLogout() {
        window.localStorage.setItem('token', '')
    }

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const [profileMenu, setProfileMenuActive] = useState(false)
    const { height, width } = useWindowDimensions();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const token = window.localStorage.getItem('token')

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + token + "");


    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch('https://backend.uprise.partnerswire.com/authenticated/v1/user/me', requestOptions)
            .then(response => response.json())
            .then(response => {
                setFirstName(response.first_name)
                setLastName(response.last_name)
                setEmail(response.email)
            })
            .catch(err => console.error(err));
    }, [])

    if (width > 1024) {
        return (
            <nav className='dashboardNavbar'>

                <div className="navbarContainer">
                    <svg width="103" height="27" viewBox="0 0 103 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_2)">
                            <path d="M16.5 0H6.4V18.61C6.4 19.65 7.24 20.49 8.28 20.49C9.32 20.49 10.16 19.65 10.16 18.61V3.75H16.5C17.82 3.75 19.09 4.27 20.02 5.21C20.96 6.14 21.48 7.41 21.48 8.73C21.48 10.05 20.96 11.32 20.02 12.26C19.59 12.69 19.09 13.03 18.53 13.28C17.58 13.7 17.16 14.81 17.58 15.76C18 16.71 19.11 17.13 20.06 16.71C21.03 16.28 21.92 15.67 22.67 14.91C24.31 13.27 25.22 11.05 25.22 8.73C25.22 6.41 24.3 4.19 22.66 2.56C21.03 0.92 18.81 0 16.5 0Z" fill="black" />
                            <path d="M18.47 10.99C18.47 10.76 18.4 10.54 18.27 10.35L15.63 6.45C15.28 5.93 14.56 5.79 14.04 6.14C13.92 6.22 13.81 6.33 13.73 6.45L11.09 10.35C10.74 10.87 10.87 11.59 11.4 11.94C11.59 12.07 11.81 12.14 12.04 12.14H12.8V18.26C12.8 19.46 12.33 20.61 11.47 21.46C10.62 22.31 9.47 22.79 8.27 22.79C7.07 22.79 5.92 22.32 5.07 21.46C4.22 20.61 3.74 19.46 3.74 18.26V10.59C3.74 9.55 2.9 8.71 1.86 8.71C0.82 8.71 0 9.55 0 10.59V18.26C0 20.46 0.87 22.56 2.42 24.11C3.97 25.66 6.08 26.54 8.27 26.53C10.47 26.53 12.57 25.66 14.12 24.11C15.67 22.56 16.55 20.45 16.54 18.26V12.14H17.3C17.93 12.14 18.45 11.63 18.45 11L18.47 10.99Z" fill="black" />
                            <path d="M44.18 13.97C44.18 14.96 44.06 15.68 43.83 16.14C43.47 16.95 42.67 17.35 41.46 17.35C40.25 17.35 39.44 16.95 39.08 16.14C38.85 15.68 38.73 14.96 38.73 13.97V5.12H35.67V13.97C35.67 15.5 35.91 16.69 36.38 17.54C37.27 19.1 38.96 19.88 41.46 19.88C43.96 19.88 45.64 19.1 46.53 17.54C47.01 16.69 47.24 15.5 47.24 13.97V5.12H44.18V13.97V13.97Z" fill="black" />
                            <path d="M55.64 8.64001C54.79 8.64001 54.05 8.88001 53.43 9.35001C53.09 9.62001 52.77 9.98 52.47 10.44V8.87H49.8V23.7H52.55V18.15C52.84 18.6 53.14 18.94 53.45 19.18C54.01 19.6 54.71 19.81 55.56 19.81C56.89 19.81 57.97 19.32 58.82 18.34C59.67 17.36 60.08 15.93 60.08 14.05C60.08 12.27 59.65 10.93 58.79 10.01C57.92 9.09 56.87 8.63 55.63 8.63L55.64 8.64001ZM56.61 16.59C56.2 17.19 55.61 17.49 54.84 17.49C54.31 17.49 53.84 17.34 53.45 17.05C52.79 16.55 52.46 15.68 52.46 14.44C52.46 13.66 52.56 13.01 52.75 12.51C53.13 11.55 53.82 11.07 54.83 11.07C55.67 11.07 56.28 11.39 56.65 12.02C57.02 12.65 57.21 13.38 57.21 14.2C57.21 15.2 57.01 15.99 56.6 16.59H56.61Z" fill="black" />
                            <path d="M73.86 18.34C73.81 18.11 73.78 17.66 73.78 17V16.03C73.78 15.02 73.64 14.27 73.36 13.78C73.08 13.29 72.61 12.91 71.95 12.64C72.74 12.37 73.31 11.9 73.66 11.24C74.01 10.58 74.18 9.91 74.18 9.22C74.18 8.65 74.09 8.15 73.91 7.71C73.73 7.27 73.48 6.86 73.17 6.5C72.79 6.06 72.33 5.72 71.79 5.49C71.25 5.26 70.47 5.14 69.46 5.12H62.4V19.51H65.34V13.87H68.45C69.34 13.87 69.94 14.02 70.26 14.33C70.58 14.64 70.75 15.25 70.76 16.17L70.78 17.51C70.78 17.93 70.83 18.35 70.91 18.75C70.95 18.95 71.01 19.2 71.11 19.52H74.42V19.16C74.13 18.98 73.95 18.71 73.87 18.34H73.86ZM70.27 11.26C69.93 11.42 69.42 11.49 68.75 11.49H65.34V7.62H68.84C69.49 7.62 69.98 7.7 70.3 7.87C70.88 8.17 71.17 8.76 71.17 9.63C71.17 10.44 70.87 10.98 70.27 11.25V11.26Z" fill="black" />
                            <path d="M79.4 8.87H76.58V19.51H79.4V8.87Z" fill="black" />
                            <path d="M79.4 5.04H76.58V7.61H79.4V5.04Z" fill="black" />
                            <path d="M87.85 13.11C86.19 12.75 85.22 12.49 84.95 12.34C84.68 12.2 84.54 11.97 84.54 11.65C84.54 11.4 84.67 11.17 84.93 10.99C85.19 10.81 85.62 10.71 86.22 10.71C86.96 10.71 87.48 10.9 87.78 11.28C87.94 11.49 88.04 11.77 88.08 12.13H90.86C90.74 10.83 90.26 9.91 89.42 9.38C88.58 8.85 87.5 8.59 86.17 8.59C84.77 8.59 83.68 8.94 82.91 9.65C82.14 10.36 81.75 11.2 81.75 12.18C81.75 13.01 82 13.65 82.49 14.09C82.98 14.54 83.83 14.91 85.04 15.21C86.71 15.61 87.68 15.89 87.94 16.05C88.2 16.21 88.33 16.45 88.33 16.76C88.33 17.07 88.17 17.33 87.85 17.49C87.53 17.65 87.09 17.73 86.55 17.73C85.62 17.73 84.98 17.54 84.64 17.17C84.44 16.96 84.32 16.61 84.26 16.12H81.44C81.44 17.21 81.84 18.11 82.64 18.82C83.44 19.53 84.67 19.88 86.35 19.88C88.03 19.88 89.2 19.55 89.99 18.88C90.78 18.21 91.17 17.35 91.17 16.3C91.17 15.5 90.9 14.83 90.35 14.3C89.8 13.77 88.97 13.38 87.86 13.12L87.85 13.11Z" fill="black" />
                            <path d="M102.38 12.86C102.26 12.03 101.99 11.29 101.57 10.66C101.11 9.94 100.52 9.42 99.81 9.09C99.1 8.76 98.3 8.59 97.42 8.59C95.93 8.59 94.72 9.08 93.78 10.06C92.84 11.04 92.38 12.46 92.38 14.3C92.38 16.27 92.9 17.69 93.93 18.56C94.96 19.43 96.16 19.87 97.51 19.87C99.15 19.87 100.43 19.35 101.34 18.32C101.93 17.67 102.25 17.03 102.33 16.4H99.49C99.34 16.71 99.17 16.96 98.97 17.13C98.61 17.46 98.15 17.62 97.57 17.62C97.03 17.62 96.57 17.49 96.18 17.22C95.55 16.79 95.21 16.04 95.17 14.97H102.46C102.47 14.05 102.44 13.35 102.37 12.86H102.38ZM95.25 13.13C95.34 12.44 95.56 11.89 95.92 11.49C96.28 11.09 96.77 10.88 97.42 10.88C98.01 10.88 98.51 11.07 98.91 11.45C99.31 11.83 99.53 12.39 99.58 13.12H95.25V13.13Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_2">
                                <rect width="102.48" height="26.54" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>


                    <div className="navbarSearch">
                        <input type="text" name="search" id="search" placeholder='Search' />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.575" height="21.033" viewBox="0 0 20.575 21.033">
                            <g id="Iconly_Two-tone_Search" data-name="Iconly/Two-tone/Search" transform="translate(-2.028 -2.028)">
                                <g id="Search" transform="translate(2 2)">
                                    <circle id="Ellipse_739" cx="8.989" cy="8.989" r="8.989" transform="translate(0.778 0.778)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                    <line id="Line_181" x2="3.524" y2="3.515" transform="translate(16.018 16.485)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" opacity="0.4" />
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div className="navbarReload" onClick={e => updatePortfolio()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='navbarUpdate' width="20.634" height="20" viewBox="0 0 20.634 20">
                            <g data-name="Сгруппировать 48834" transform="translate(-1990.788 -2347.02)">
                                <path data-name="Контур 42247" d="M427.628,276.228v5.31h-5.31" transform="translate(1582.476 2072.481)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path data-name="Контур 42248" d="M285.83,273.828a9.561,9.561,0,0,0-8.844-6,10,10,0,0,0-9.156,6" transform="translate(1724.275 2080.192)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path data-name="Контур 42249" d="M267.828,443.574v-5.31h5.31" transform="translate(1724.277 1921.756)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path data-name="Контур 42250" d="M267.828,438.264a9.561,9.561,0,0,0,8.844,6,10,10,0,0,0,9.156-6" transform="translate(1724.277 1921.756)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                        </svg>
                        <p>Reload Portfolio</p>
                    </div>
                    <p className='navbarLastUpdate'>Last update: {props.updateTime}</p>

                    <div className="navbarProfile">
                        {
                            /*
                            <svg className='navbarNotification' xmlns="http://www.w3.org/2000/svg" width="18.497" height="21.5" viewBox="0 0 18.497 21.5">
                            <g id="Iconly_Light-Outline_Notification" data-name="Iconly/Light-Outline/Notification" transform="translate(-3 -1)">
                                <g id="Notification" transform="translate(3 1)">
                                    <path id="Combined-Shape" d="M7.324,19.106A2.523,2.523,0,0,0,9.2,20h0a2.531,2.531,0,0,0,1.88-.9.75.75,0,0,1,1.115,1A4.016,4.016,0,0,1,9.2,21.5h0a4,4,0,0,1-2.987-1.392.75.75,0,0,1,1.115-1ZM9.247,0c4.445,0,7.431,3.462,7.431,6.7a5.116,5.116,0,0,0,.872,3.116,5.429,5.429,0,0,1,.947,3.16c-.349,4.047-4.574,4.377-9.25,4.377S.345,17.018,0,13.035A5.477,5.477,0,0,1,.944,9.811L1.1,9.547A5.016,5.016,0,0,0,1.816,6.7C1.816,3.462,4.8,0,9.247,0Zm0,1.5c-3.495,0-5.931,2.738-5.931,5.2a6.52,6.52,0,0,1-1.087,3.888A3.954,3.954,0,0,0,1.5,12.971c.167,1.886,1.412,2.877,7.75,2.877,6.3,0,7.587-1.035,7.753-2.942a3.914,3.914,0,0,0-.735-2.323A6.52,6.52,0,0,1,15.178,6.7C15.178,4.238,12.742,1.5,9.247,1.5Z" fillRule="evenodd" />
                                </g>
                            </g>
                        </svg>
                        <hr />
                            */
                        }
                        <div className='navbarProfileBlock' onClick={e => setProfileMenuActive(!profileMenu)}>
                            <div className='navbarAvatar'>M</div>
                            <p className='profileName'>{firstName + ' ' + lastName}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.963" height="7.657" viewBox="0 0 13.963 7.657">
                                <path id="Stroke-1" d="M.448.448a.676.676,0,0,1,.88-.065L1.4.448,7.231,6.276,13.06.448a.676.676,0,0,1,.88-.065l.076.065a.676.676,0,0,1,.065.88l-.065.076L7.709,7.709a.676.676,0,0,1-.88.065l-.076-.065L.448,1.4A.676.676,0,0,1,.448.448Z" transform="translate(-0.25 -0.25)" />
                            </svg>

                            <div className={(profileMenu === true) ? 'navbarProfileMenu navbarProfileMenuActive' : 'navbarProfileMenu'} >
                                <Link onClick={e => props.routing('Settings')} to={'settings'}>Settings</Link>
                                <Link to={'/login'} onClick={e => userLogout()}>Log out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav>
                <div className='mobileNavbar'>

                    <svg className='dashboardLogotype' xmlns="http://www.w3.org/2000/svg" width="165.036" height="38.307" viewBox="0 0 165.036 38.307">
                        <g data-name="Сгруппировать 48876" transform="translate(-69 -63)">
                            <g data-name="Сгруппировать 48873" transform="translate(115.036 71.192)">
                                <text id="UpRise_Tracker" data-name="UpRise Tracker" transform="translate(0 17)" fontSize="17" fontFamily="Averta-Bold, Averta ☞" fontWeight="700"><tspan x="0" y="0">UpRise Tracker</tspan></text>
                            </g>
                            <g data-name="Сгруппировать 48874" transform="translate(69 63)">
                                <path data-name="Контур 42258" d="M-326.847,1091.587a12.577,12.577,0,0,0-8.911-3.692h-14.571v26.858a2.708,2.708,0,0,0,2.708,2.708,2.708,2.708,0,0,0,2.708-2.708v-21.441h9.154a7.156,7.156,0,0,1,5.081,2.106,7.15,7.15,0,0,1,2.105,5.08,7.186,7.186,0,0,1-2.107,5.093,7.171,7.171,0,0,1-2.144,1.475,2.709,2.709,0,0,0-1.366,3.579,2.708,2.708,0,0,0,3.578,1.367,12.626,12.626,0,0,0,3.766-2.592l0-.005a12.613,12.613,0,0,0,3.686-8.916A12.571,12.571,0,0,0-326.847,1091.587Z" transform="translate(359.569 -1087.895)" />
                                <path data-name="Контур 42259" d="M-334.194,1103.758l-3.812-5.635a1.653,1.653,0,0,0-2.739,0l-3.811,5.635a1.653,1.653,0,0,0,1.37,2.579h1.1v8.84A6.5,6.5,0,0,1-344,1119.8a6.5,6.5,0,0,1-4.619,1.913,6.5,6.5,0,0,1-4.619-1.913,6.506,6.506,0,0,1-1.913-4.619v-11.072a2.709,2.709,0,0,0-2.708-2.708,2.709,2.709,0,0,0-2.708,2.708v11.072a11.921,11.921,0,0,0,3.5,8.448,11.921,11.921,0,0,0,8.448,3.5,11.923,11.923,0,0,0,8.449-3.5,11.92,11.92,0,0,0,3.5-8.448v-8.84h1.1A1.653,1.653,0,0,0-334.194,1103.758Z" transform="translate(360.564 -1088.818)" />
                            </g>
                        </g>
                    </svg>

                    <div className="navbarProfile">
                        {
                            /*
                            <svg className='navbarNotification' xmlns="http://www.w3.org/2000/svg" width="18.497" height="21.5" viewBox="0 0 18.497 21.5">
                            <g id="Iconly_Light-Outline_Notification" data-name="Iconly/Light-Outline/Notification" transform="translate(-3 -1)">
                                <g id="Notification" transform="translate(3 1)">
                                    <path id="Combined-Shape" d="M7.324,19.106A2.523,2.523,0,0,0,9.2,20h0a2.531,2.531,0,0,0,1.88-.9.75.75,0,0,1,1.115,1A4.016,4.016,0,0,1,9.2,21.5h0a4,4,0,0,1-2.987-1.392.75.75,0,0,1,1.115-1ZM9.247,0c4.445,0,7.431,3.462,7.431,6.7a5.116,5.116,0,0,0,.872,3.116,5.429,5.429,0,0,1,.947,3.16c-.349,4.047-4.574,4.377-9.25,4.377S.345,17.018,0,13.035A5.477,5.477,0,0,1,.944,9.811L1.1,9.547A5.016,5.016,0,0,0,1.816,6.7C1.816,3.462,4.8,0,9.247,0Zm0,1.5c-3.495,0-5.931,2.738-5.931,5.2a6.52,6.52,0,0,1-1.087,3.888A3.954,3.954,0,0,0,1.5,12.971c.167,1.886,1.412,2.877,7.75,2.877,6.3,0,7.587-1.035,7.753-2.942a3.914,3.914,0,0,0-.735-2.323A6.52,6.52,0,0,1,15.178,6.7C15.178,4.238,12.742,1.5,9.247,1.5Z" fillRule="evenodd" />
                                </g>
                            </g>
                        </svg>
                        <hr />
                            */
                        }

                        <div className='navbarProfileBlock' onClick={e => setProfileMenuActive(!profileMenu)}>
                            <img src={avatar} alt="Avatar" />
                            <p className='profileName'>Sam Smith</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.963" height="7.657" viewBox="0 0 13.963 7.657">
                                <path id="Stroke-1" d="M.448.448a.676.676,0,0,1,.88-.065L1.4.448,7.231,6.276,13.06.448a.676.676,0,0,1,.88-.065l.076.065a.676.676,0,0,1,.065.88l-.065.076L7.709,7.709a.676.676,0,0,1-.88.065l-.076-.065L.448,1.4A.676.676,0,0,1,.448.448Z" transform="translate(-0.25 -0.25)" />
                            </svg>

                            <div className={(profileMenu === true) ? 'navbarProfileMenu navbarProfileMenuActive' : 'navbarProfileMenu'} >
                                <Link onClick={e => props.routing('Settings')} to={'settings'}>Settings</Link>
                                <Link to={'/login'}>Log out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }


}

export default Navbar;
