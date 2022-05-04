import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "../components/Slider";
import Product from "../components/Product";

const Index = () => {
  const images = [
    "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
  ];
  return (
    <>
      <div className="wrapper-home-page">
      <div>
      {/* <Slider slides={images} size="large" slideInterval={6} /> */}
      <Product />
    </div>
      </div>
    </>
  );
};

Index.getInitialProps = async (ctx) => {
  // ctx.store.dispatch(getHomeBanner(5));
  // ctx.store.dispatch(getHomePropose(3));
  // ctx.store.dispatch(getHomeProduct(8));
  // ctx.store.dispatch(getHomeArticle(3));
};

export default Index;
