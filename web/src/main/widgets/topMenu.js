import React from 'react'
import './topMenu.css'
import {Search, CompareArrowsOutlined,
    ShoppingCartOutlined, PermIdentityOutlined} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";

function TopMenu() {

    //const navigate = useNavigate()

    return(
        <div className='menu'>
            <div className='logo'>
                <span>Тут будет лого</span>
            </div>
            <div className='search'>
                <span>Поиск по сайту</span>
                <Search style={{fontSize: 39, color: 'rgb(0, 0, 0, 0.5)', marginRight: 0, marginLeft: 'auto'}}/>
            </div>
            <div className='comparison' id='button'>
                <CompareArrowsOutlined style={{fontSize: 39, color: 'rgb(0, 0, 0, 0.5)'}}/>
            </div>
            <div className='cart' id='button'>
                <ShoppingCartOutlined style={{fontSize: 39, color: 'rgb(0, 0, 0, 0.5)'}}/>
            </div>
        </div>
    )


}

export default TopMenu