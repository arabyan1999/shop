import React, { useState } from "react"
import {
    StyledHeader,
    StyledNav,
    StyledNavItem,
    StyledEllipseIcon,
    StyledSearchBar,
    StyledSearchIcon,
    StyledBurgerMenuWrapper
} from "./styles"
import { ReactComponent as SigmaLogo } from "../../assets/logos/SigmaLogo.svg"
import { useScrollingElement } from "../../hooks/useScrollingElement"

const Header = () => {
    const [trigger, setTrigger] = useState(false)
    useScrollingElement(trigger)
    return (
        <StyledHeader>
            <StyledBurgerMenuWrapper trigger={trigger} onClick={() => setTrigger(prev => !prev)}>
                <span />
                <span />
                <span />
            </StyledBurgerMenuWrapper>
            <StyledNav className={trigger ? "active" : ""}>
                <StyledNavItem marginRight="48px" onClick={() => setTrigger(false)}>Menswear</StyledNavItem>
                <StyledNavItem marginRight="48px" onClick={() => setTrigger(false)}>Womenswear</StyledNavItem>
                <StyledNavItem onClick={() => setTrigger(false)}>Everything Else</StyledNavItem>
            </StyledNav>
            <SigmaLogo />
            <StyledSearchIcon />
            <StyledSearchBar>
                <StyledNavItem marginRight="48px">Search</StyledNavItem>
                <StyledEllipseIcon />
                <StyledNavItem>
                    straightkilla187real
                </StyledNavItem>
            </StyledSearchBar>
        </StyledHeader>
    )
}

export default Header