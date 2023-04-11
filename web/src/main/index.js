import React from 'react'
import './main.css'
import TopMenu from './widgets/topMenu'
import HomePage from './home'
import Catalog from './catalog'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

class MainScreen extends React.Component {

    constructor(props) {
        super(props)

        this.getData()
    }

    getData = async () => {
        let res = await fetch('http://127.0.0.1/get_categories/',
            {
                method: 'POST',
                    mode: 'cors',
                    headers: {
                    'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
                .then((json) => {
                    return json
                })

        console.log(res)
    }

    render() {

        return(
            <div className='main'>
                <TopMenu/>
                <div className='content'>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<HomePage/>}/>
                            <Route path='/catalog' element={<Catalog/>}/>
                            <Route path='*' element={<h1>Не найдено</h1>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        )

    }

    getMainWidth = () => {
        let width = window.innerWidth

        this.setState({width: width})
    }

    updateDimensions = () => {
        this.getMainWidth()
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions)
        this.getMainWidth()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }


}

export default MainScreen