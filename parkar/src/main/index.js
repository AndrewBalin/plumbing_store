import React from 'react'
import {useEffect, useRef, useState} from 'react'
import './index.css'

import {Title, NewsBlocks, PhoneInfo} from './widgets'
import {Router} from "react-router-dom";


function Landing() {

    return(
        <div>
            {FirstBlock()}
            {News()}
            {Panel()}
            {Admin()}
            {About()}
            {Login()}
        </div>
    )
}

export default Landing
function FirstBlock() {

    return(
        <div className='firstBlock'>
            <div className='firstTitle'>
                AR эффекты привлекают внимание пользователей и увеличивают их активность
            </div>
        </div>
    )
}

function News() {

    return(
        <div className='secondBlock'>
            {Title('Новости')}
            {NewsBlocks()}
        </div>
    )
}

function Panel() {

    const info = [
        [{phone: 1, title: 'Стартовое меню', content: 'Система будет автоматически настроена под ближайший парк. Администрация парка сможет перейти в админ режим, введя код парка. А пользователи попадают в главное меню, нажав кнопку START'},
        {phone: 1, title: 'Главное меню', content: 'Главное меню, с которым взаимодействует пользователь'}],
        [{phone: 2, title: 'Карта местности', content: 'Интерактивная карта, на которой будут расположены отметки о мероприятиях и виртуальные объекты в двумерном виде, при нажатии на которые пользователь сможет проложить маршрут'},
        {phone: 3, title: 'Режим фото', content: 'Фото-режим, который делает снимок экрана и сохраняет его в галерею. Так можно запечатлеть виртуальные объекты и сделать фото на их фоне'}],
        [{phone: 4, title: 'Раздел игр', content: 'Вкладка «Игры» предоставит пользователю возможность сыграть в AR игру. Сейчас доступна игра «Майнкрафт 3D», в которой можно устанавливать виртуальные блоки вокруг себя'},
        {phone: 5, title: 'Мероприятия', content: 'Показывает все мероприятия, которые пройдут в ближайшее время на территории парка, а также предлагает проложить к ним маршрут'}],
        [{phone: 6, title: 'Квесты', content: 'На странице "Квесты" можно выбрать и выполнить общие или частные задания, получив за них валюту парка - Парккоины. Программа лояльности устанавливается руководством парка и определяет вознаграждение за каждый пройденный квест'},
        {phone: 7, title: 'Знакомства', content: 'Во вкладке «Знакомства» пользователь сможет оставить виртуальное анонимное послание в виде сердечка. Пользователь может читать послания, оставленные другими людьми, находясь в радиусе 5 метров от места установки'}],
        [{phone: 8, title: 'Построение маршрута', content: 'Пользователь видит полный список маршрутов, установленных администрацией парка. Есть возможность проложить 3D маршрут к конечной точке'}]
    ]

    return(
        <div className='thirdBlock'>
            {Title('Панель пользователя')}
            <div className='screensContainer'>
                {
                    info.map((screen) => {
                        let lengthS = screen.length
                        return (
                            lengthS === 2
                                ? (<div className='twoElements'>
                                    {PhoneInfo(screen[0].title, screen[0].content, screen[0].phone)}
                                    {PhoneInfo(screen[1].title, screen[1].content, screen[1].phone)}
                                </div>)
                                : (<div className='twoElements'>{PhoneInfo(screen[0].title, screen[0].content, screen[0].phone)}</div>)
                        )
                    })
                }
            </div>
        </div>
    )
}

function Admin() {

    const info = [
        [{phone: 10, title: 'Админ-панель', content: 'Панель управления,в которой администрация парка редактирует все параметры системы: опция установки и удаления заданных 3D объектов, а также добавление мероприятий, управление картой и настройка приложения'},
            {phone: 11, title: 'Панель управления', content: 'Положение установленных объектов можно редактировать при помощи нижней панели (поступательно перемещать и поворачивать вокруг центральной оси)'}],
        [{phone: 12, title: 'Стандартный квест', content: 'В разделе «Квесты» администратор может управлять существующими квестами и создавать новые. В списке стандартных квестов администратор выбирает один из предложенных квестов, выполнение которых отслеживается системой'},
            {phone: 13, title: 'Уникальный квест', content: 'При создании уникального квеста администратору предлагается ввести название и описание квеста, а также награду в виде валюты парка ПаркКоинов за его выполнение и код, который вводится пользователем для начисления награды'}],
        [{phone: 14, title: 'Управление картой', content: 'Двумерная карта парка, с помощью которой можно дистанционно создавать объекты в заданных точках с помощью клика на определённое место на карте'},
            {phone: 15, title: 'Список объектов', content: 'Список объектов разбит на пять подотделов для удобства поиска и здесь устанавливается текстура 3D модели объекта. После нажатия на кнопку в верхней части панели можно увидеть полный список установленных объектов и меню их редактирования.'}],
    ]

    return(
        <div className='thirdBlock'>
            {Title('Панель администрации', true)}
            <div className='screensContainer'>
                {
                    info.map((screen) => {
                        return <div className='twoElements'>
                            {PhoneInfo(screen[0].title, screen[0].content, screen[0].phone)}
                            {PhoneInfo(screen[1].title, screen[1].content, screen[1].phone)}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

function About() {

    const info = [
        [{icon: <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19.93" cy="19.93" r="17.7738" stroke="#AD00FF" stroke-width="3.04693"/>
                <path d="M19.9298 12.3125C18.9295 12.3125 17.939 12.5095 17.0148 12.8923C16.0906 13.2751 15.2509 13.8362 14.5436 14.5436C13.8362 15.2509 13.2751 16.0906 12.8923 17.0148C12.5095 17.939 12.3125 18.9295 12.3125 19.9298" stroke="#AD00FF" stroke-width="3.04693" stroke-linecap="round"/>
                <path d="M42.7818 42.7824L35.1644 35.165" stroke="#AD00FF" stroke-width="3.04693" stroke-linecap="round"/>
            </svg>,
            title: 'Уникальный опыт',
            content: 'Пользователь вернётся в ваш парк, за счёт планирования досуга и путешествий, AR играм и квестам, которые сделают посещение вовлеающим и интересным'
        },
        {icon: <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.61743" y="1.61719" width="45.704" height="45.704" rx="3.04693" stroke="#AD00FF" stroke-width="3.04693"/>
                <path d="M37.1648 16.8516L28.4646 29.9019C27.8157 30.8752 26.3575 30.7844 25.8343 29.7382L23.1042 24.2778C22.581 23.2316 21.1228 23.1408 20.4739 24.1141L11.7737 37.1644" stroke="#AD00FF" stroke-width="3.04693" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ,
            title: 'Продвижение парка',
            content: 'Приложение продвигает парк через различные цифровые каналы, что приводит к увеличению числа посетителей и улучшению впечатления о месте'
        },
        {icon: <svg width="39" height="52" viewBox="0 0 39 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.356 6.69531C31.922 6.69531 33.7051 6.69531 34.9859 7.55115C35.5404 7.92165 36.0165 8.39773 36.387 8.95222C37.2428 10.2331 37.2428 12.0161 37.2428 15.5822V39.7037C37.2428 44.4915 37.2428 46.8854 35.7555 48.3728C34.2681 49.8602 31.8742 49.8602 27.0864 49.8602H11.8517C7.06396 49.8602 4.67006 49.8602 3.18269 48.3728C1.69531 46.8854 1.69531 44.4915 1.69531 39.7037V15.5822C1.69531 12.0161 1.69531 10.2331 2.55115 8.95222C2.92165 8.39773 3.39773 7.92165 3.95222 7.55115C5.23307 6.69531 7.01611 6.69531 10.5822 6.69531" stroke="#AD00FF" stroke-width="3.04693"/>
                <path d="M11.8521 6.69541C11.8521 3.89078 14.1256 1.61719 16.9303 1.61719H22.0085C24.8131 1.61719 27.0867 3.89078 27.0867 6.69541C27.0867 9.50003 24.8131 11.7736 22.0085 11.7736H16.9303C14.1256 11.7736 11.8521 9.50003 11.8521 6.69541Z" stroke="#AD00FF" stroke-width="3.04693"/>
                <path d="M11.8521 24.4697L27.0867 24.4697" stroke="#AD00FF" stroke-width="3.04693" stroke-linecap="round"/>
                <path d="M11.8521 34.626L22.0085 34.626" stroke="#AD00FF" stroke-width="3.04693" stroke-linecap="round"/>
            </svg>,
            title: 'Статистика',
            content: 'Приложение — полезный инструмент для сбора и анализа данных о посетителях парка, чтобы понять предпочтения посетителей и улучшить опыт их посещения',
        }],
        [{icon: <svg width="49" height="45" viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61731 17.0205C1.61731 14.4204 3.72505 12.3127 6.32508 12.3127V12.3127C8.10825 12.3127 9.73837 11.3052 10.5358 9.7103L12.6286 5.52485C13.4481 3.88586 13.8578 3.06636 14.5941 2.61131C15.3304 2.15625 16.2466 2.15625 18.0791 2.15625H30.8595C32.692 2.15625 33.6082 2.15625 34.3445 2.61131C35.0808 3.06636 35.4905 3.88586 36.31 5.52485L38.4028 9.7103C39.2002 11.3052 40.8303 12.3127 42.6135 12.3127V12.3127C45.2135 12.3127 47.3213 14.4204 47.3213 17.0205V33.6412C47.3213 37.9502 47.3213 40.1047 45.9826 41.4434C44.644 42.782 42.4895 42.782 38.1805 42.782H10.7581C6.44909 42.782 4.29459 42.782 2.95595 41.4434C1.61731 40.1047 1.61731 37.9502 1.61731 33.6412V17.0205Z" stroke="#AD00FF" stroke-width="3.04693"/>
                <circle cx="24.4694" cy="25.009" r="8.63297" stroke="#AD00FF" stroke-width="3.04693"/>
            </svg>,
            title: 'Привлекательность для молодёжи',
            content: 'ParkAR привлекает больше молодых людей в парк за счёт AR технологий и делает посещение парка более интересным и запоминающимся'
        },
        {icon: <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2084 20.5429C18.1344 18.0484 18.1931 15.4952 18.2603 13.7144C19.8361 14.5466 22.0766 15.7724 24.1999 17.0837C25.5425 17.9128 26.8124 18.7604 27.829 19.5513C28.893 20.3791 29.516 21.0222 29.7469 21.4221C29.9779 21.8221 30.2233 22.6832 30.4082 24.0185C30.5848 25.2944 30.6839 26.8179 30.7306 28.3952C30.8046 30.8897 30.7459 33.4429 30.6787 35.2237C29.1029 34.3915 26.8624 33.1657 24.7391 31.8544C23.3965 31.0253 22.1266 30.1778 21.11 29.3868C20.046 28.559 19.423 27.916 19.1921 27.516C18.9611 27.116 18.7157 26.255 18.5308 24.9196C18.3542 23.6437 18.2551 22.1202 18.2084 20.5429Z" stroke="#AD00FF" stroke-width="3.04693"/>
                <circle cx="24.4694" cy="24.4692" r="22.852" stroke="#AD00FF" stroke-width="3.04693"/>
            </svg>,
            title: 'Удобство и информативность',
            content: 'ParkAR указывает местоположение на карте местности и советует маршруты, а также информирует людей с ограниченными возможностями о доступности'
        },
        {icon: <svg width="35" height="47" viewBox="0 0 35 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7439 43.9586L15.4252 42.5959H15.4252L14.7439 43.9586ZM20.1944 43.9586L19.5131 42.5959L20.1944 43.9586ZM20.8631 43.6242L21.5444 44.9869L20.8631 43.6242ZM22.6092 40.9003L21.089 40.8003L22.6092 40.9003ZM22.2894 42.6853L23.5584 43.5283L22.2894 42.6853ZM12.3292 40.9003L10.809 41.0002L12.3292 40.9003ZM14.0752 43.6242L14.7566 42.2616L14.0752 43.6242ZM12.6489 42.6853L11.3799 43.5283L12.6489 42.6853ZM9.59573 30.5393L8.42089 31.5092L9.59573 30.5393ZM2.23454 17.391L3.55784 16.6362L2.23454 17.391ZM2.2346 17.3912L3.5579 16.6363L2.2346 17.3912ZM26.1061 29.9425L25.2414 28.6882L26.1061 29.9425ZM25.3425 30.5395L24.1677 29.5696L25.3425 30.5395ZM31.1805 17.3909C31.1805 22.0759 28.8321 26.2127 25.2414 28.6882L26.9708 31.1968C31.3512 28.1769 34.2274 23.12 34.2274 17.3909H31.1805ZM17.4693 3.67972C25.0418 3.67972 31.1805 9.81843 31.1805 17.3909H34.2274C34.2274 8.13565 26.7245 0.632784 17.4693 0.632784V3.67972ZM3.75808 17.3909C3.75808 9.81843 9.89679 3.67972 17.4693 3.67972V0.632784C8.21402 0.632784 0.711154 8.13565 0.711154 17.3909H3.75808ZM3.75808 17.3909C3.75808 17.3909 3.75808 17.3909 3.75808 17.3909H0.711154C0.711154 17.3909 0.711154 17.3909 0.711154 17.3909L3.75808 17.3909ZM3.5579 16.6363L3.55784 16.6362L0.911241 18.1459L0.911304 18.146L3.5579 16.6363ZM9.69691 28.6881C6.10639 26.2126 3.75818 22.0759 3.75808 17.3912L0.711154 17.3912C0.711265 23.12 3.58735 28.1767 7.96741 31.1966L9.69691 28.6881ZM13.8493 40.8003C13.6191 37.2979 12.7803 33.8653 11.3738 30.6562L8.5831 31.8793C9.84775 34.7647 10.6019 37.8511 10.809 41.0002L13.8493 40.8003ZM15.4252 42.5959L14.7566 42.2616L13.3939 44.9869L14.0626 45.3212L15.4252 42.5959ZM19.5131 42.5959C18.2264 43.2393 16.7119 43.2393 15.4252 42.5959L14.0626 45.3212C16.2071 46.3934 18.7312 46.3934 20.8757 45.3212L19.5131 42.5959ZM20.1818 42.2616L19.5131 42.5959L20.8757 45.3212L21.5444 44.9869L20.1818 42.2616ZM23.5645 30.6565C22.158 33.8655 21.3192 37.298 21.089 40.8003L24.1294 41.0002C24.3364 37.8512 25.0905 34.7649 26.3551 31.8796L23.5645 30.6565ZM21.5444 44.9869C21.9193 44.7994 22.2953 44.6132 22.5986 44.424C22.9253 44.2203 23.2799 43.9475 23.5584 43.5283L21.0205 41.8422C21.0744 41.7611 21.1164 41.7575 20.9864 41.8386C20.8329 41.9343 20.608 42.0485 20.1818 42.2616L21.5444 44.9869ZM21.089 40.8003C21.0555 41.3101 21.0355 41.593 21.0043 41.7944C20.9757 41.9784 20.9583 41.9358 21.0205 41.8422L23.5584 43.5283C23.8452 43.0966 23.9559 42.6439 24.0152 42.2611C24.0719 41.8957 24.0994 41.4551 24.1294 41.0002L21.089 40.8003ZM10.809 41.0002C10.8389 41.4551 10.8664 41.8957 10.9231 42.2611C10.9824 42.6439 11.0932 43.0966 11.3799 43.5283L13.9178 41.8422C13.98 41.9358 13.9626 41.9784 13.9341 41.7944C13.9028 41.593 13.8829 41.3101 13.8493 40.8003L10.809 41.0002ZM14.7566 42.2616C14.3303 42.0485 14.1054 41.9343 13.952 41.8386C13.8219 41.7575 13.8639 41.7611 13.9178 41.8422L11.3799 43.5283C11.6584 43.9475 12.013 44.2203 12.3397 44.424C12.643 44.6132 13.019 44.7994 13.3939 44.9869L14.7566 42.2616ZM7.96741 31.1966C8.18878 31.3492 8.31086 31.4339 8.39698 31.4995C8.4771 31.5605 8.45971 31.5562 8.42089 31.5092L10.7706 29.5694C10.4657 29.2002 10.0282 28.9165 9.69691 28.6881L7.96741 31.1966ZM11.3738 30.6562C11.2395 30.3498 11.071 29.9333 10.7706 29.5694L8.42089 31.5092C8.39586 31.4789 8.3922 31.4636 8.41738 31.5133C8.43174 31.5415 8.45115 31.5822 8.47972 31.6455C8.5085 31.7092 8.54087 31.783 8.5831 31.8793L11.3738 30.6562ZM2.23458 15.8675C1.06529 15.8675 0.331871 17.1303 0.911241 18.1459L3.55784 16.6362C4.13718 17.6518 3.4038 18.9144 2.23458 18.9144V15.8675ZM0.711154 17.3909C0.711151 16.5496 1.39322 15.8675 2.23458 15.8675V18.9144C3.07598 18.9144 3.75809 18.2324 3.75808 17.3909L0.711154 17.3909ZM0.911304 18.146C0.7798 17.9155 0.711159 17.6553 0.711154 17.3912L3.75808 17.3912C3.75808 17.1271 3.68943 16.8668 3.5579 16.6363L0.911304 18.146ZM25.2414 28.6882C24.9101 28.9167 24.4725 29.2003 24.1677 29.5696L26.5173 31.5094C26.4785 31.5565 26.4611 31.5607 26.5412 31.4997C26.6274 31.4341 26.7495 31.3494 26.9708 31.1968L25.2414 28.6882ZM26.3551 31.8796C26.3974 31.7832 26.4297 31.7094 26.4585 31.6457C26.4871 31.5825 26.5065 31.5417 26.5208 31.5135C26.546 31.4638 26.5424 31.4791 26.5173 31.5094L24.1677 29.5696C23.8672 29.9335 23.6988 30.35 23.5645 30.6565L26.3551 31.8796Z" fill="#AD00FF"/>
                <path d="M25.0669 32.626V32.626C20.4684 35.6997 14.4708 35.6997 9.87231 32.626V32.626" stroke="#AD00FF" stroke-width="3.04693"/>
            </svg>,
            title: 'Обогащение образовательного опыта',
            content: 'Приложение рассказывает посетителям историю и значимость объектов и мест в парке, увеличивает точки соприкосновения посетителей и парка',
        }]
    ]

    return(
        <div className='thirdBlock'>
            {Title('ParkAR', false, 'Платформенное решение — это быстро и надёжно')}
            <div className='screensContainer'>
                {
                    info.map((screen) => {
                        return <div className='threeElements'>
                            <div className='elementAbout'>
                                {screen[0].icon}
                                <span className='titleAbout'>{screen[0].title}</span>
                                <span className='contentAbout'>{screen[0].content}</span>
                            </div>
                            <div className='elementAbout'>
                                {screen[1].icon}
                                <span className='titleAbout'>{screen[1].title}</span>
                                <span className='contentAbout'>{screen[1].content}</span>
                            </div>
                            <div className='elementAbout'>
                                {screen[2].icon}
                                <span className='titleAbout'>{screen[2].title}</span>
                                <span className='contentAbout'>{screen[2].content}</span>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}


function Login() {

    return(
        <div className='thirdBlock'>
            <div className='title' id='reg'>
                <span>Войти в кабинет администратора</span>
                <div>
                    <span style={{fontFamily: 'Gilroy'}}>Логин</span>
                    <input type='text'/>
                </div>
                <div>
                    <span style={{fontFamily: 'Gilroy'}}>Пароль</span>
                    <input type='password'/>
                </div>
                <button onClick={() => window.location.assign('/map')}>Вход
                </button>
            </div>
        </div>
    )
}