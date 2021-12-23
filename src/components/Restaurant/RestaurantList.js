import Restaurant from "./Restaurant";
import { DUMMY_RESTAURANT } from "../../constants/Restaurant";
import Styled from "styled-components";

const SectionStyled = Styled.section`
h2 {
  color: white;
  margin: 2rem auto;
  text-align: center;
  text-transform: uppercase;
}
div {
  list-style: none;
  margin: 0;
  padding: 0;
}
`;

const RestaurantList = (props) => {
  const filter_products = DUMMY_RESTAURANT.filter((item) =>
    item.title.toUpperCase().includes(props.name.toUpperCase())
  );
  return (
    <SectionStyled>
      <div>
        {filter_products.map((product) => (
          <Restaurant
            id={product.id}
            key={product.id}
            title={product.title}
            description={product.description}
            img={product.img}
          />
        ))}
        {filter_products.length === 0 && <h2>Not Found</h2>}
      </div>
    </SectionStyled>
  );
};

export default RestaurantList;
