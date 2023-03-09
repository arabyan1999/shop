import ShopItem from "../../../../components/shopItem";
import { StyledItemSection } from "../../styles";

const Products = ({ products }) => (
    <StyledItemSection>
        {products.length ? (
            products.map((element) => (
            <ShopItem
                key={element.id}
                image={element.picture}
                title={element.name}
                description={element.description}
                price={element.price}
                isLiked={element.isLiked}
            />
        ))) : null}
    </StyledItemSection>
)

export default Products;
