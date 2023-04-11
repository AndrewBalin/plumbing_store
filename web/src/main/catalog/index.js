import React from 'react'
import './catalog.css'
import Filter from './filter'
import {useSearchParams} from 'react-router-dom'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@mui/icons-material"
import MiniProductCard from "../product/miniProductCard"

function Catalog() {

    const [queryParameters] = useSearchParams()

    return(
        <div className='catalog'>
            <div className='mainList'>
                <div className='navMenu'>
                    <Filter/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', height: '448px', marginLeft: '32px'}}>
                    <div className='subtitleCatalogBox'>
                        <span className='subtitle'>Каталог - {queryParameters.get('name')}</span>
                    </div>
                    <div className='products'>
                        <MiniProductCard border={true}/>
                        <MiniProductCard border={true}/>
                        <MiniProductCard border={true}/>
                        <MiniProductCard border={true}/>
                        <MiniProductCard border={true}/>
                        <MiniProductCard border={true}/>
                        <MiniProductCard border={true}/>
                        <MiniProductCard border={true}/>
                        <MiniProductCard border={true}/>
                        <MiniProductCard border={true}/>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default Catalog
