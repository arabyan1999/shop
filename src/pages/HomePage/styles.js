import styled from "styled-components"

export const StyledHomePage = styled.div`
    min-height: 100%;
`

export const StyledContainer = styled.div`
    padding: 39px 75px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 376px) {
        padding: 20px 15px 0;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 29px;
    margin-bottom: 66px;
`