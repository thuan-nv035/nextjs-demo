import React from "react";
import Slider from "react-slick";
const slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className = "w-screen h-64">
        <img  className = "w-screen h-64 object-cover" src = "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60" />
      </div>
      <div className = "w-screen h-64">
        <img className = "w-screen h-64 object-cover" src = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60" />
      </div>
      <div className = "w-screen h-64">
        <img className = "w-screen h-64 object-cover" src = "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60" />
      </div>
      <div className = "w-screen h-64">
        <img className = "w-screen h-64 object-cover" src = "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60" />
      </div>
    </Slider>
  );
};

export default slide;
