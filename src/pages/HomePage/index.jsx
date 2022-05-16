import React, { useEffect, useState } from "react"
import axios from "axios"
import { sigmaURL } from "../../utils/constants"
import Header from "../../components/header"
import {
    StyledHomePage,
    StyledContainer,
    StyledUpperPart,
    StyledItemSection
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
                    <p>24 listings shown</p>
                    <p>Sort by</p>
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