import React, { useState } from 'react'
import { Container, Wrapper, SearchContainer, Input, Logo, MenuItem, LogoNave, Menu, Search, Category } from './style'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuCategory from '../MenuCategory/MenuCategory';

const Navbar = ({busca, setBusca}) => {

    

    

    return (
        <Container>
            <Wrapper>
                <LogoNave><Logo>BRECHÓ.</Logo></LogoNave>
                <Search>
                    <SearchContainer>
                        <Input 
                            placeholder='Olá, o que está procurando hoje?'
                            value={busca}
                            onChange={event => setBusca(event.target.value)}
                        />
                        <SearchIcon style={{color: "black", fontSize:22}} />
                    </SearchContainer>
                </Search>
                <Menu>
                    <MenuItem><FavoriteBorderOutlinedIcon style={{color: "white"}}/>Lista de desejos</MenuItem>
                    <MenuItem><LogoutOutlinedIcon style={{color: "white"}}/>Entrar</MenuItem>
                    <MenuItem >
                        <Badge badgeContent={1} color="info">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Menu>
               
            </Wrapper>
            
        </Container>
    )
}

export default Navbar
