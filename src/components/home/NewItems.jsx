import React from "react";
import NFT from './NFT.jsx'
import './NewItems.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewItems = (props) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const skeleton = Array(4).fill(null);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor: "black", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor: "black", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
          {
          props.newItems.length > 0 ?

            props.newItems.map((newItem, index) => {
            return (
            <NFT key={newItem.nftId} loading={false} authorId={newItem.authorId} 
                authorImage={newItem.authorImage} expiryDate={newItem.expiryDate} 
                nftId={newItem.nftId} nftImage={newItem.nftImage} title={newItem.title} />
            )})
            :
            skeleton.map((_, index) => {
              return (
              <NFT key={index} loading={true}  />
              )})
        }
        </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
