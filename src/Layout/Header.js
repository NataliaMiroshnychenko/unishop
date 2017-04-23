import React from 'react';

import { NavLink } from 'react-router-dom';

import Phone from 'react-icons/lib/md/phone';
import Timer from 'react-icons/lib/md/timer';
import ShoppingCart from 'react-icons/lib/md/shopping-cart';

import MenuLink from './styled/MenuLink';
import MainMenu from './styled/MainMenu';
import SiteLogo from './styled/SiteLogo';
import HeaderBar from './styled/HeaderBar';
import MainMenuIcon from './styled/MainMenuIcon';
import HeaderWrapper from './styled/HeaderWrapper';

import Categories from './Categories';

const Header = (props) => (
    <HeaderWrapper>
        <MainMenu>
            <MenuLink>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </MenuLink>
            <MenuLink>
                <NavLink activeClassName="active" to="/catalog">Catalog</NavLink>
            </MenuLink>
            <MenuLink>
                <NavLink activeClassName="active" to="/about">About</NavLink>
            </MenuLink>
        </MainMenu>
        <HeaderBar>
            <SiteLogo />
            <MainMenuIcon>
                <Phone />
                <Timer />
                <ShoppingCart />
            </MainMenuIcon>
        </HeaderBar>
        <Categories {...props} />
    </HeaderWrapper>
);

export default Header;

