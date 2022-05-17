import React, { useEffect, useState } from "react"
import axios from "axios"
import { sigmaURL } from "../../utils/constants"
import Header from "../../components/header"
import {
    StyledHomePage,
    StyledContainer,
    StyledUpperPart,
    StyledItemSection,
    StyledSortDropdown,
    StyledParagraph,
    StyledDropdownLeftPart,
    StyledArrowIcon
} from "./styles"
import ShopItem from "../../components/shopItem"
import Footer from "../../components/footer"

export const HomePage = () => {
    const [scans, setScans] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(sigmaURL)
            setScans(data)
        }
        getData()
    }, [])

    return (
        <StyledHomePage>
            <Header />
            <StyledContainer>
                <StyledUpperPart>
                        <p>{scans.length + 1} listings shown</p>
                    <StyledSortDropdown>
                        <StyledDropdownLeftPart>
                            <StyledParagraph>Sort by:</StyledParagraph>
                        </StyledDropdownLeftPart>
                        <StyledParagraph>
                            <span>Latest arrivals</span>
                            <StyledArrowIcon />
                        </StyledParagraph>
                    </StyledSortDropdown>
                </StyledUpperPart>
                <StyledItemSection>
                    {
                        scans.map((element) => (
                            <ShopItem
                                key={element.id}
                                image={element.picture}
                                title={element.name}
                                description={element.description}
                                price={element.price}
                                isLiked={element.isLiked}
                            />
                        ))
                    }
                </StyledItemSection>
                <Footer />
            </StyledContainer>
        </StyledHomePage>
    )
}

export default HomePage