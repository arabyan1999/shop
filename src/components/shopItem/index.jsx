import React from "react"
import {
    StyledItem,
    StyledImageSection,
    StyledLowerSection,
    StyledImage,
    StyledBottomLeftPart,
    StyledTitle,
    StyledDescription,
    StyledHeartItem,
    StyledP
} from "./styles"

const ShopItem = ({ image, title, description, price, isLiked }) => {
    return (
            <StyledItem>
                <StyledImageSection>
                    <StyledHeartItem isliked={isLiked ? 1 : 0} />
                    <StyledImage src={image} alte={title} sizes="cover" />
                </StyledImageSection>
                <StyledLowerSection>
                    <StyledBottomLeftPart>
                        <StyledTitle>{title}</StyledTitle>
                        <StyledDescription>{description}</StyledDescription>
                    </StyledBottomLeftPart>
                    <StyledP>$ {price}</StyledP>
                </StyledLowerSection>
            </StyledItem>
    )
}

export default ShopItem