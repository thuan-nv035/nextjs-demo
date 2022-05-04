import React from "react";
import Product from "../components/Product";
import SlideProduct from "../components/SlideProduct";

const Index = () => {
  return (
    <>
      <div className="wrapper-home-page">
      <div>
      {/* <Slider slides={images} size="large" slideInterval={6} /> */}
      <SlideProduct />
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
