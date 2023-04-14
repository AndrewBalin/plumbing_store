import {useEffect, useRef, useState}  from 'react'
import './menu.css'

export default function Lenusik() {

    /*useEffect(() => {
        document.title = 'Меню'
    }, [])*/

    return(
        <div>
            <svg width="1898" height="370" viewBox="0 0 1898 370" fill="none" xmlns="http://www.w3.org/2000/svg"
                 style={{
                     position: 'absolute',
                     bottom: 0,
                     left: 0,
                     width: '100%',
                     zIndex: '-1'}}>
                <path d="M299 243.926C184.6 172.326 58.3333 299.093 9.5 371.426H0L766.5 452.426L1938 433.426C1957 259.093 1979 -69.0741 1915 12.9259C1835 115.426 1887 103.426 1860 235.926C1833 368.426 1534 293.926 1424.5 198.426C1315 102.926 1089.5 142.926 862.5 221.426C635.5 299.926 442 333.426 299 243.926Z" fill="url(#paint0_linear_63_186)"/>
                <defs>
                    <linearGradient id="paint0_linear_63_186" x1="130.861" y1="318.282" x2="1701.1" y2="-226.047" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#DFF8E9"/>
                        <stop offset="1" stop-color="#F7EAFE"/>
                    </linearGradient>
                </defs>
            </svg>
            <svg width="1854" height="290" viewBox="0 0 1854 290" fill="none" xmlns="http://www.w3.org/2000/svg"
                 style={{
                     position: 'absolute',
                     bottom: 0,
                     left: 0,
                     width: '100%',
                     zIndex: '-1'}}>
                <path d="M131.5 155.5C60.9637 148.413 3.16667 267 1 307.5L24.5 359L1001 433.5L1929.5 394.5V23C1912.33 8.99999 1876.4 -17.8 1828 23C1767.5 74 1881 157 1744.5 222.5C1608 288 1354 80.5 1163.5 57C973 33.5001 590.5 222.5 459 243.5C314.5 266.576 236 166 131.5 155.5Z" stroke="#A7F5C6"/>
            </svg>

            <div className='menuScreen'>
                <div className='menuButtons'>
                    <span className='menuTitle'>Меню управления</span>
                    <div className='menuTile'>
                        <div className='menuBlock' id='blueMenuBlock'>
                            Информация о посещениях
                            <svg className='menuArrow' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.25 3.31976C33.1893 1.62275 36.8107 1.62275 39.75 3.31976L60.0609 15.0463C63.0002 16.7433 64.8109 19.8795 64.8109 23.2735V46.7265C64.8109 50.1205 63.0002 53.2567 60.0609 54.9537L39.75 66.6802C36.8107 68.3772 33.1893 68.3772 30.25 66.6802L9.93911 54.9537C6.9998 53.2567 5.18911 50.1205 5.18911 46.7265V23.2735C5.18911 19.8795 6.9998 16.7433 9.93911 15.0463L30.25 3.31976Z" fill="white" stroke="#BB2749"/>
                                <path d="M17 34.5H52.5M52.5 34.5L41 23M52.5 34.5L41 46" stroke="#BB2749"/>
                            </svg>
                        </div>
                    </div>
                    <div className='menuTile' onClick={() => window.location.assign('/map')}>
                        <div className='menuBlock'>
                            Карта парка
                            <svg className='menuArrow' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.25 3.31976C33.1893 1.62275 36.8107 1.62275 39.75 3.31976L60.0609 15.0463C63.0002 16.7433 64.8109 19.8795 64.8109 23.2735V46.7265C64.8109 50.1205 63.0002 53.2567 60.0609 54.9537L39.75 66.6802C36.8107 68.3772 33.1893 68.3772 30.25 66.6802L9.93911 54.9537C6.9998 53.2567 5.18911 50.1205 5.18911 46.7265V23.2735C5.18911 19.8795 6.9998 16.7433 9.93911 15.0463L30.25 3.31976Z" fill="white" stroke="#BB2749"/>
                                <path d="M17 34.5H52.5M52.5 34.5L41 23M52.5 34.5L41 46" stroke="#BB2749"/>
                            </svg>
                        </div>
                    </div>
                    <div className='menuTile'>
                        <div className='menuBlock'>
                            Раздел мероприятий
                            <svg className='menuArrow' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.25 3.31976C33.1893 1.62275 36.8107 1.62275 39.75 3.31976L60.0609 15.0463C63.0002 16.7433 64.8109 19.8795 64.8109 23.2735V46.7265C64.8109 50.1205 63.0002 53.2567 60.0609 54.9537L39.75 66.6802C36.8107 68.3772 33.1893 68.3772 30.25 66.6802L9.93911 54.9537C6.9998 53.2567 5.18911 50.1205 5.18911 46.7265V23.2735C5.18911 19.8795 6.9998 16.7433 9.93911 15.0463L30.25 3.31976Z" fill="white" stroke="#BB2749"/>
                                <path d="M17 34.5H52.5M52.5 34.5L41 23M52.5 34.5L41 46" stroke="#BB2749"/>
                            </svg>
                        </div>
                    </div>
                    <div className='menuTile'>
                        <div className='menuBlock'>
                            Раздел квестов
                            <svg className='menuArrow' width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.25 3.31976C33.1893 1.62275 36.8107 1.62275 39.75 3.31976L60.0609 15.0463C63.0002 16.7433 64.8109 19.8795 64.8109 23.2735V46.7265C64.8109 50.1205 63.0002 53.2567 60.0609 54.9537L39.75 66.6802C36.8107 68.3772 33.1893 68.3772 30.25 66.6802L9.93911 54.9537C6.9998 53.2567 5.18911 50.1205 5.18911 46.7265V23.2735C5.18911 19.8795 6.9998 16.7433 9.93911 15.0463L30.25 3.31976Z" fill="white" stroke="#BB2749"/>
                                <path d="M17 34.5H52.5M52.5 34.5L41 23M52.5 34.5L41 46" stroke="#BB2749"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='feedback'>
                    <div className='messadge'>
                        <span className='feedbackName'>Обратная связь</span>
                    </div>
                    <div className='send'>
                        <span className='feedbackName'>Напишите нам</span>
                        <div className='feedbackField'>
                            <input className='inputFeedback' type='text' placeholder='Введите сообщение...'/>
                            <button className='sendFeedback'>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}