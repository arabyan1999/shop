import styled from "styled-components"
import { ReactComponent as ArrowIcon } from "../../assets/icons/ArrowIcon.svg"

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

export const StyledSortDropdown = styled.div`
    border: 1px solid #A0A0A0;
    background: #fff;
    display: flex;
    border-radius: 6px;
`

export const StyledDropdownLeftPart = styled.div`
    border-right: 1px solid #A0A0A0;
`

export const StyledParagraph = styled.p`
    margin: 7px 16px;
    align-items: center;
    display: flex;
`

export const StyledArrowIcon = styled(ArrowIcon)`
    margin-left: 10px;
`