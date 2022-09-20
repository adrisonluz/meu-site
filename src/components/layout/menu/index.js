import React from 'react';
import { slide as MenuHamburguer } from 'react-burger-menu'

function Menu () {
    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',

        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
            overflow: 'hidden'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            with: '100%',
            padding: '5px'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    return (
        <MenuHamburguer styles={ styles }>
            <a href="#banner" className="MenuHamburguer-item">Topo</a>
            <a href="#sobre" className="menu-item">Sobre</a>
            <a href="#empatia" className="menu-item">Empatia</a>
            <a href="#habilidades" className="menu-item">Habilidades</a>
            <a href="#experiencia" className="menu-item">Experiência</a>
        </MenuHamburguer>
    )

}

export default Menu;