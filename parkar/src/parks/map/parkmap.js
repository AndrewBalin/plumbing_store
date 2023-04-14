import './map.css'
import {useEffect, useRef, useState} from 'react'
import mapboxgl from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css"

// @ts-ignore
mapboxgl.workerClass = require('mapbox-gl/dist/mapbox-gl-csp-worker').default

const Map = () => {
    const mapContainerRef = useRef(null)
    const mapRef = useRef(null)
    const markerRef = useRef(null)
    const [markers, setMarkers] = useState([])


    useEffect(() => {

        mapboxgl.accessToken = 'pk.eyJ1IjoiNDBwdDFrIiwiYSI6ImNsZXNubG93eTE3bW4zc3J2a3YwZnkxdWgifQ.MaNFi2sGb_ITnBrhyzx9CQ'
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/outdoors-v12',
            center: [37.6156, 55.7522],
            zoom: 11,
        });
        mapRef.current.fitBounds([
            [37.495767, 55.931542],
            [37.503178, 55.930264]
        ], {padding: 10, // отступы от краев карты
            maxZoom: 18,
            duration: 7000})

        // Создаем метку
        const marker1 = new mapboxgl.Marker({ draggable: false, offset: [0, -25] })
            .setLngLat([37.49815842436835, 55.9305420680051])
            .addTo(mapRef.current)
        marker1.setPopup(new mapboxgl.Popup().setHTML('<span><h3>Геймер</h3><br/><h5>Квест</h5></span>'))

        return () => {
            if (mapRef.current) {
                mapRef.current.remove()
            }
        }
    }, [])
    return (
        <div
            ref={mapContainerRef}
            style={{ width: '80%', height: '400px', margin: 'auto', border: '1px solid #BB2749',
                borderRadius: '20px' }}
        />
    )
}

// 'pk.eyJ1IjoiNDBwdDFrIiwiYSI6ImNsZXNubG93eTE3bW4zc3J2a3YwZnkxdWgifQ.MaNFi2sGb_ITnBrhyzx9CQ'

function ParkMap() {

    return (
        <div className="App">

            <svg width="1920" height="744" viewBox="0 0 1920 744" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                zIndex: '-1'
            }}>
                <path d="M241 367C132.2 342.2 24 474.667 -16.5 544V820.5L1947.5 796.5L1928.5 45.5C1770.5 184.5 1738 100.5 1689.5 71.5C1641 42.5 1384 -124.5 1059 183C734 490.5 377 398 241 367Z" fill="#F5EEF0"/>
                <path d="M-18 537C5.33333 476.167 70.9 362.1 146.5 392.5C241 430.5 401.952 466.482 564 440.5C715.42 416.222 770.146 282.5 923.5 282.5C1110.5 282.5 1318.5 -69 1413 32C1507.5 133 1605.46 234.727 1729 178C1827 133 1939 -21.4999 1968 42.0001" stroke="#EAB4C1"/>
            </svg>

            <div style={{
                marginTop: '40px',
                marginBottom: '20px'
            }}>
                <span style={{
                    fontFamily: 'Bowler',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '32px',
                    lineHeight: '155%',
                    textAlign: 'center',
                    color: '#121212'
                }}>
                Карта парка
              </span>
            </div>

            <Map/>

            <div style={{
                margin: 'auto',
                display: 'flex',
                flexDirection: 'row',
                width: '80%',
                justifyContent: 'space-between'
            }}>
                <span style={{
                    fontFamily: 'Gilroy',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '16px',
                    lineHeight: '155%'
                }}>
                    Режим установки по клику включён
                </span>
                <span style={{
                    fontFamily: 'Gilroy',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: '16px',
                    lineHeight: '155%',
                    textAlign: 'right',
                    textDecorationLine: 'underline',
                    color: '#9F9F9F',
                }}>
                    Выключить
                </span>
            </div>

            <div style={{
                marginTop: '50px',
                marginBottom: '20px'
            }}>
                <span style={{
                    fontFamily: 'Bowler',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '32px',
                    lineHeight: '155%',
                    color: '#121212'
                }}>
                    Выберите объект для установки
                </span>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'raw',
                margin: 'auto',
                justifyContent: 'center',
                gap: '30px'
            }}>
                <img src='/img.png' className='image'/>
                <img src='/img_1.png' className='image'/>
                <img src='/img_2.png' className='image'/>
                <img src='/img_3.png' className='image'/>
            </div>
        </div>
    )
}

export default ParkMap
