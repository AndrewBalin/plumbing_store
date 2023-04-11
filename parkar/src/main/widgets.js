import {useEffect, useRef, useState}  from 'react'
import './widgets.css'

export function Title(title, right = false, subtitle = false) {

    if (right) {
        return(
            <div className='rightTitle'>
                <span>{title}</span>
                {subtitle && <span className='subtitle'>{subtitle}</span>}
            </div>
        )
    }
    return(
        <div className='title'>
            <span>{title}</span>
            {subtitle && <span className='subtitle'>{subtitle}</span>}
        </div>
    )

}

export function NewsBlocks() {

    const NewsCard = () => {

        return(
            <div>
                <div className='block'>
                    <img src='/landing/NewsImg.png' width={164} height={187} alt=''/>
                    <div className='newsBg'>
                        <div className='newsText'>
                            <span className='newsTitle'>
                                Панды в московском зоопарке отпраздновали день бамбуковых медведей
                            </span>
                            <span className='newsContent'>
                                Дождливая погода не испортила праздника двум бамбуковым...
                            </span>
                        </div>
                        <svg className='plus' width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0V40" stroke="#AD00FF"/>
                            <path d="M40 20L-8.34465e-07 20" stroke="#AD00FF"/>
                        </svg>
                    </div>
                </div>
            </div>
        )

    }

    return(
        <div style={{paddingBottom: '50px'}}>
            {NewsCard()}
            {NewsCard()}
        </div>

    )
}

export function PhoneInfo(title, content, phone) {

    return(
        <div className='phoneBlock'>
            <img src={'/landing/phones/' + phone + '.png'} className='phone' width={230*0.9} height={500*0.9}/>
            <div className='infoPhoneBlock'>
                <span className='infoPhoneTitle'>
                    {title}
                </span>
                <span className='infoPhoneContent'>
                    {content}
                </span>
            </div>
        </div>
    )

}