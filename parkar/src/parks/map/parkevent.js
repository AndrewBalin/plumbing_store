import './map.css'
import {useEffect, useRef, useState} from 'react'
import mapboxgl from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css"

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

function ParkEvents() {

    return(
        <div className="App">

            <svg width="282" height="1344" viewBox="0 0 282 1344" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                position: 'absolute',
                top: 50,
                left: 0,
                height: '100%',
                zIndex: '-1'
            }}>
                <path d="M183.5 271.5C213.9 175.9 53.5 93 -30.5 63.5L-62 74V1395C26.8333 1444.67 215.4 1489.8 259 1273C313.5 1002 206.5 702 105.5 634.5C4.5 567 145.5 391 183.5 271.5Z" fill="#F5EEF0"/>
                <path d="M-7.5 0.5C59.8333 45.1667 187.7 156.4 160.5 244C126.5 353.5 61.5 553 135 660C208.5 767 330 916.5 261 1141C205.8 1320.6 123.333 1413.17 89 1437" stroke="#EAB4C1"/>
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
                Карта мероприятий
              </span>
            </div>

            <Map/>

        </div>
    )
}

export default ParkEvents