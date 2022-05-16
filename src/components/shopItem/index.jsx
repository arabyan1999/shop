import React from "react"
import {
    StyledItem,
    StyledImageSection,
    StyledLowerSection,
    StyledImage,
    StyledBottomLeftPart,
    StyledTitle,
    StyledDescription,
    StyledItemContainer
} from "./styles"

const ShopItem = ({ image, title, description, price }) => {
    return (
        <StyledItemContainer>
            <StyledItem>
                <StyledImageSection>
                    <StyledImage src={image} alte={title} sizes="cover" />
                </StyledImageSection>
                <StyledLowerSection>
                    <StyledBottomLeftPart>
                        <StyledTitle>{title}</StyledTitle>
                        <StyledDescription>{description}</StyledDescription>
                    </StyledBottomLeftPart>
                    <p>$ {price}</p>
                </StyledLowerSection>
            </StyledItem>
        </StyledItemContainer>
    )
}

export default ShopItem