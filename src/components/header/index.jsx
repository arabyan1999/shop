import React, { useState } from "react"
import {
    StyledHeader,
    StyledNav,
    StyledNavItem,
    StyledEllipseIcon,
    StyledSearchBar,
    StyledSearchIcon,
    StyledBurgerMenuWrapper,
    StyledSigmaLogo
} from "./styles"
import { useScrollingElement } from "../../hooks/useScrollingElement"

const Header = () => {
    const [trigger, setTrigger] = useState(false)
    useScrollingElement(trigger)
    const [pageUrl, setUrl] = useState('/all')

    const menu = [
        {
            title: "All",
            url: "/all",
        },
        {
            title: "Menswear",
            url: "/men",
        },
        {
            title: "Womenswear",
            url: "/women",
        },
    ]

    const handleMenuItemClick = (url) => {
        setTrigger(false);
        setUrl(url);
    }

    return (
        <StyledHeader>
            <StyledBurgerMenuWrapper trigger={trigger} onClick={() => setTrigger(prev => !prev)}>
                {
                    [1,2,3].map(i => <span key={i} />)
                }
            </StyledBurgerMenuWrapper>
            <StyledNav className={trigger ? "active" : ""}>
                {
                    menu.map(({ title, url }) => (
                        <StyledNavItem
                            key={title}
                            marginRight="30px"
                            onClick={() => handleMenuItemClick(url)}
                            className={url === pageUrl ? 'activeLink' : ''}
                        >
                            {title}
                        </StyledNavItem>
                    ))
                }
            </StyledNav>
            <StyledSigmaLogo />
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