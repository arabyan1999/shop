import { StyledFooter, StyledP } from "./styles"

const Footer = () => (
    <StyledFooter>
        <StyledP>
            ©
            {" "}
            {new Date().getFullYear()}
            {" "}
            Sinclair Global
        </StyledP>
    </StyledFooter>
)

export default Footer