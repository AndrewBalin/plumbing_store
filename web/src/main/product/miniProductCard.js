import React from 'react'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import './miniProductCard.css'
import {Rating} from "@mui/material";

class MiniProductCard extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='card' style={this.props.border && {
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(0, 0, 0, 0.5)'
            }}>
                <div className='photo'>
                    <img src='test/test.png' width='171px' height='171px'/>
                    <div className='sale'>

                    </div>
                </div>
                <div className='info'>
                    <div className='rating'>
                        <Rating style={{
                            fontSize: '22px'
                        }}
                        defaultValue={3.5} precision={0.5} readOnly/>
                    </div>
                    <div className='count'>
                        <span style={{fontSize: '14px', fontFamily: 'Inter'}}>100 шт.</span>
                    </div>
                </div>
                <div className='name'>
                    <span>Название</span>
                </div>
                <div className='action'>
                    <span className='price' style={{fontSize: '20px', fontFamily: 'Inter'}}>1200₽</span>
                    <div className='buy'>
                        <span style={{fontSize: '20px', fontFamily: 'Inter', color: '#ffffff'}}>В корзину</span>
                        <AddShoppingCartOutlinedIcon style={{fontSize: '20px', fontFamily: 'Inter', color: '#ffffff'}}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default MiniProductCard