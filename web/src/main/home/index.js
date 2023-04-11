import React from 'react'
import './home.css'
import {
    DryCleaningOutlined,
    BathtubOutlined,
    ShowerOutlined,
    EngineeringOutlined,
    EventSeatOutlined,
    CountertopsOutlined,
    WashOutlined,
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined
} from '@mui/icons-material'
import MiniProductCard from '../product/miniProductCard'
import {useNavigate} from "react-router-dom";


function HomePage(type) {

    const navigate = useNavigate()

    function getCategories() {

        fetch('http://127.0.0.1:5000/get_categories/',
            {
                method: 'POST'
            })
            .then((response) => response.json())
            .then((json) => console.log(json['Санфаянс']))
    }

    const menu = [
        {icon: <DryCleaningOutlined style={{fontSize: '36px'}}/>, text: 'Аксессуары', name: 'Аксессуары'},
        {icon: <BathtubOutlined style={{fontSize: '36px'}}/>, text: 'Ванны', name: 'Ванны'},
        {icon: <ShowerOutlined style={{fontSize: '36px'}}/>, text: 'Душевые кабины\nи ограждения', name: 'Душевые кабины и ограждения'},
        {icon: <EngineeringOutlined style={{fontSize: '36px'}}/>, text: 'Инженерные\nсистемы', name: 'Инженерные системы'},
        {icon: <EventSeatOutlined style={{fontSize: '36px'}}/>, text: 'Мебель для ванных\nкомнат', name: 'Мебель для ванных комнат'},
        {icon: <CountertopsOutlined style={{fontSize: '36px'}}/>, text: 'Санфаянс', name: 'Санфаянс'},
        {icon: <WashOutlined style={{fontSize: '36px'}}/>, text: 'Смесители и\nгарнитуры', name: 'Смесители и гарнитуры'},
    ]

    const company = [
        {image: '', name: '1Марка'},
        {image: '', name: 'Акватон'},
        {image: '', name: 'Грейс'},
        {image: '', name: 'Радомир'},
        {image: '', name: 'Санита'},
        {image: '', name: 'САНТЕК'},
    ]

    function handleNavigate({to}) {
        navigate(`/catalog?category=&name=${to}`)
    }

    function menuTile({tile}) {
        let to = tile.name
        return(
                <div className='navMenuTile' onClick={() => handleNavigate({to})}>
                    <span>{tile.icon}</span>
                    <span>{tile.text}</span>
                </div>
            )

    }

    function companySlide() {
        return(

            <div></div>

        )
    }

    if (type === 'desktop') {
        return (
            <div className='home'>
                <head>
                    <title>Главная</title>
                </head>
                <div style={{display: 'flex', flexDirection: 'row', height: '448px'}}>
                    <div className='navMenu' id='box'>
                        {
                            menu.map(tile => {
                                console.log(tile)
                                return (menuTile({tile}))
                            })
                        }
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: '448px', marginLeft: '32px'}}>
                        <div className='banner' id='box'>

                        </div>
                        <div className='company' id='box'>
                            <ArrowBackIosOutlined id='arrow' style={{
                                fontSize: 48,
                                color: '#808080',
                                marginLeft: '10px',
                                marginRight: 'auto'
                            }}/>
                            <ArrowForwardIosOutlined id='arrow' style={{
                                fontSize: 48,
                                color: '#808080',
                                marginRight: '10px',
                                marginLeft: 'auto'
                            }}/>
                        </div>
                    </div>
                </div>
                <div className='subtitleBox'>
                    <span className='subtitle'>Популярное</span>
                </div>
                <div className='famous' id='box'>
                    <MiniProductCard/>
                    <MiniProductCard/>
                    <MiniProductCard/>
                    <MiniProductCard/>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className='homeM'>
                <head>
                    <title>Главная</title>
                </head>
                <div style={{display: 'flex', flexDirection: 'row', height: '448px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', height: '448px', marginLeft: '32px'}}>
                        <div className='bannerM' id='box'>

                        </div>
                        <div className='companyM' id='box'>
                            <ArrowBackIosOutlined id='arrow' style={{
                                fontSize: 48,
                                color: '#808080',
                                marginLeft: '10px',
                                marginRight: 'auto'
                            }}/>
                            <ArrowForwardIosOutlined id='arrow' style={{
                                fontSize: 48,
                                color: '#808080',
                                marginRight: '10px',
                                marginLeft: 'auto'
                            }}/>
                        </div>
                    </div>
                </div>
                <div className='subtitleBoxM'>
                    <span className='subtitleM'>Популярное</span>
                </div>
                <div className='famousM' id='box'>
                    <MiniProductCard/>
                    <MiniProductCard/>
                    <MiniProductCard/>
                    <MiniProductCard/>
                </div>
            </div>
        )
    }

}

export default HomePage