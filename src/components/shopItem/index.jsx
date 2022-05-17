import React from "react"
import {
    StyledItem,
    StyledImageSection,
    StyledLowerSection,
    StyledImage,
    StyledBottomLeftPart,
    StyledTitle,
    StyledDescription,
    StyledItemContainer,
    StyledHeartItem
} from "./styles"

const ShopItem = ({ image, title, description, price, isLiked }) => {
    return (
        <StyledItemContainer>
            <StyledItem>
                <StyledImageSection>
                    <StyledHeartItem isliked={isLiked} />
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