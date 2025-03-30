import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { ReactSVG } from "react-svg";

const HeaderContainer = styled.div`
    z-index: 999;
    padding-top: 20px;
    font-size: 14px;
    
    @media (max-width: 430px){
        font-size: 12px;
    }
`;

const MenuList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: right;
`;

const MenuItem = styled.li`
    margin: 0 20px;
    position: relative;
`;


export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <MenuList>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Career</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Awards</MenuItem>
            </MenuList>
        </HeaderContainer>
    )
}