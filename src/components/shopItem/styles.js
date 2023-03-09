import styled, { css } from "styled-components"
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg"

export const StyledItem = styled.div`
    position: relative;
    width: 300px;
    margin-bottom: 43px;
    background: transparent;
    img {
        width: 100%;
    }
    @media (max-width: 500px) {
        width: auto;
        margin-bottom: 16px;
    }
`

export const StyledHeartItem = styled(HeartIcon)`
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
    ${({isliked}) => isliked ?
        css`
            path {
                fill: red;
                fill-opacity: 1;
                stroke: red;
            }
        `
        :
        css`
            path {
                fill: none;
                stroke: black;
            }
        `
    }
    @media (max-width: 376px) {
        display: none;
    }
`

export const StyledImageSection = styled.div`
    width: 100%;
    margin-bottom: 9px;
    border-radius: 10px;
    @media (max-width: 376px) {
        height: auto;
    }
`

export const StyledImage = styled.img`
    border-radius: inherit;
`

export const StyledLowerSection = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 376px) {
        flex-direction: column;
    }
`

export const StyledBottomLeftPart = styled.div`
    p {
        margin: 0;
    }
`

export const StyledP = styled.p`
    font-weight: 700;
    font-size: 16px;
    min-width: max-content;
`

export const StyledTitle = styled.p`
    text-transform: uppercase;
    font-weight: 700;
`

export const StyledDescription = styled.p`
    margin-top: 3px;
`
