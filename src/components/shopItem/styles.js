import styled from "styled-components";

export const StyledItemContainer =styled.div`
    margin-bottom: 73px;
    background: transparent;
    padding: 4px;
    @media (max-width: 376px) {
        padding: 2px;
        margin-bottom: 16px;
    }
`

export const StyledItem = styled.div`
    width: 487px;
    img {
        width: 100%;
    }
    @media (max-width: 376px) {
        width: auto;
        max-width: 163px;
    }
`

export const StyledImageSection = styled.div`
    width: 100%;
    height: 584px;
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

export const StyledTitle = styled.p`
    text-transform: uppercase;
`

export const StyledDescription = styled.p`
    margin-top: 3px;
`
