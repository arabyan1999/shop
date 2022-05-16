import styled, { css } from "styled-components"
import { ReactComponent as EllipseIcon } from "../../assets/icons/Ellipse.svg"
import { ReactComponent as SearchIcon } from "../../assets/icons/searchIcon.svg"

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 76px;
    background: #fff;
    border-radius: 0px 0px 30px 30px;
    @media (max-width: 376px) {
        border-radius: 0;
        padding: 14px 22px 24px;
    }
`

export const StyledNav = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 1000px) {
        width: 100%;
        position: fixed;
        top: 119px;
        left: -150%;
        right: 0;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background: #fff;
        bottom: 0;
        transition: all 0.5s ease;
        z-index: 100;
        opacity: 0.89;
        &.active {
            left: 0; 
        }
    }
    @media (max-width: 376px) {
        top: 86px;
    }
`

export const StyledSearchBar = styled(StyledNav)`
    @media (max-width: 1000px) {
        display: none;
    }
`

export const StyledSearchIcon = styled(SearchIcon)`
    display: none;
    @media (max-width: 1000px) {
        display: inline;
    }
`

export const StyledNavItem = styled.button`
    background: transparent;
    border: none;
    width: fit-content;
    margin-right: ${({marginRight}) => marginRight ? marginRight : ""};
    font-size: 18px;
    cursor: pointer;
    @media (max-width: 1000px) {
        margin-right: 0;
        margin-bottom: 40px;
    }
`

export const StyledEllipseIcon = styled(EllipseIcon)`
    margin-right: 8px;
`

export const StyledBurgerMenuWrapper = styled.div`
    width: 16px;
    height: 16px;
    display: block;
    position: relative;
    float: right;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    @media screen and (min-width: 1000px) {
        display: none;
    }
    span {
        display: block;
        position: absolute;
        height: 2px;
        width: 16px;
        background: #333333;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
    }
    ${({trigger}) => trigger ?
        css`
            span:nth-child(1) {
                top: 7px;
                transform: rotate(135deg);
            }
            span:nth-child(2) {
                opacity: 0;
            }
            span:nth-child(3) {
                top: 7px;
                transform: rotate(-135deg);
            }
        ` 
        : 
        css`
            span:nth-child(1) {
                top: 0px;
            }
            span:nth-child(2) {
                top: 6px;
            }
            span:nth-child(3) {
                top: 12px;
            }
        `
    };
`