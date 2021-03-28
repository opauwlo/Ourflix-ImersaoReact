import React from 'react';
import Button from '../Button';
import {Link} from 'react-router-dom'
import LogoOur from '../../assets/img/LogoOur.png';
import './Menu.css'

function Menu(){

    return (
        <nav className="Menu">
            <Link to='/'>
                <img className='Logo' src={LogoOur} alt='Logo OurFlix'/>
            </Link>
            
            
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
            
        </nav>

    )
}
export default Menu;