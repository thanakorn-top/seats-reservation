import { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  const searchHandler = (name) => {
    props.onSearch(name);
  };
  return (
    <Fragment>
      <MainHeader onSearch={searchHandler} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
