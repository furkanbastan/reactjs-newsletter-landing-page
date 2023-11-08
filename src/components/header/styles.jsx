import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled(Link)``;

export const Navbar = styled.nav`
    display: flex;
    gap: var(--space-6);

    @media(width < 1000px){
        display: none;
    }
    
`;

export const NavItem = styled(Link)`
    color: var(--dark-grayish-blue);
    transition: color 300ms ease;

    &:hover{
        color: var(--soft-red);
    }
`;

export const NavIcon = styled.img`
    width: 30px;
    height: 30px;
`;