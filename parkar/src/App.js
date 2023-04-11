import './App.css'
import {useEffect, useRef, useState} from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'

import ParkEvents from './parks/map/parkevent'
import ParkMap from './parks/map/parkmap'
import Landing from './main'

function App() {
    return(
        <html>
            <head>
                <title>ParkAR</title>
            </head>
            <Router>
                <Routes>
                    <Route path='/' element={Landing()} />
                    <Route path='/map' element={ParkMap()} />
                    <Route path='/map/events' element={ParkEvents()} />
                </Routes>

            </Router>
        </html>
    )
}

export default App

