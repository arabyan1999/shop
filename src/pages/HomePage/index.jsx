import React, { useEffect, useState } from "react"
import Header from "../../components/header"
import {
    StyledHomePage,
    StyledContainer,
    StyledUpperPart,
} from "./styles"
import Footer from "../../components/footer"
import { getDataApi } from "../../requests/shop"
import { PaginatedItems } from "./components/Pagintaion"

export const HomePage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await getDataApi();
            setProducts(data);
        }
        getData();
    }, [])

    return (
        <StyledHomePage>
            <Header />
            <StyledContainer>
                <StyledUpperPart>
                    <p>{products.length ?? 0} listings shown</p>
                </StyledUpperPart>
                {!!products.length ? <PaginatedItems itemsPerPage={9} products={products} /> : null}
                <Footer />
            </StyledContainer>
        </StyledHomePage>
    )
}

export default HomePage