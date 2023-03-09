import styled from "styled-components"
import { ReactComponent as ArrowIcon } from "../../assets/icons/ArrowIcon.svg"

export const StyledHomePage = styled.div`
    min-height: 100%;
`

export const StyledContainer = styled.div`
    margin: 39px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 1140px;
    @media (max-width: 376px) {
        margin: 20px auto 0;
    }
`

export const StyledUpperPart = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 87px;
    @media (max-width: 376px) {
        padding: 0;
    }
`

export const StyledItemSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-row-gap: 16px;
    justify-content: space-between;
    margin-top: 29px;
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, auto);
    }
    @media (max-width: 600px) {
        grid-template-columns: auto;
        justify-content: center;
    }
`
