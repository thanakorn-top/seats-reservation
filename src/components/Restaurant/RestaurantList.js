import Restaurant from "./Restaurant";
import classes from "./RestaurantList.module.css";
import { DUMMY_RESTAURANT } from '../../constants/Restaurant'



const RestaurantList = (props) => {
  const filter_products = DUMMY_RESTAURANT.filter((item) =>
    item.title.toUpperCase().includes(props.name.toUpperCase())
  );
  return (
    <section className={classes.products}>
      {/* <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
          />
        ))}
      </ul> */}

      <div>
        {/* {DUMMY_PRODUCTS.filter((item) =>
          item.title.toUpperCase().includes(props.name.toUpperCase())
        ).map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
          />
        ))} */}
                {filter_products.map((product) => (
          <Restaurant
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
          />
        ))}
        {filter_products.length === 0 && <h2>Not Found</h2>}
      </div>
    </section>
  );
};

export default RestaurantList;
