import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import mealsImage from "../../assests/news.jpg";
import classes from "./NewsPage.module.css";
const NewsPage = () => {
  return (
    <Fragment>
      <div className={classes.center}>
          <p className={classes.storeurl}>Available Now On Youtube</p>
        <div><a
          href="https://www.youtube.com/watch?v=c9RzZpV460k"
          target="_blank"
          rel="noreferrer noopener"
          
        >
          <img
            className={classes.newsImg}
            src={mealsImage}
            alt="a table of food"
          ></img>
        </a></div>
        <Link to="/home" >
           <p className={classes.storeurl}>Click Here To Enter Store</p> 
      </Link>
      </div>


    </Fragment>
  );
};
export default NewsPage;
