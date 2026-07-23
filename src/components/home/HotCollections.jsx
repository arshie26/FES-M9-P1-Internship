import React from "react";
import { Link } from "react-router-dom";
import './HotCollections.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow } from "react-slick/lib/arrows";

const HotCollections = (props) => {

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

  function SampleNextArrow (props) {
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
    <section id="section-collections" data-aos="fade" data-aos-delay="1000" data-aos-duration="1000" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              {
                props.collections.length > 0?
                    props.collections.map((collection, index) => {
                      return (
                        <div className="col" key={index}>
                        <div className="nft_coll">
                          <div className="nft_wrap">
                            <Link to={`/item-details/${collection.nftId}`}>
                              <img src={collection?.nftImage} className="lazy img-fluid" alt="" />
                            </Link>
                          </div>
                          <div className="nft_coll_pp">
                            <Link to={`/author/${collection?.authorId}`}>
                              <img className="lazy pp-coll" src={collection?.authorImage} alt="" />
                            </Link>
                            <i className="fa fa-check"></i>
                          </div>
                          <div className="nft_coll_info">
                            <Link to="/explore">
                              <h4>{collection?.title}</h4>
                            </Link>
                            <span>ERC-192</span>
                          </div>
                        </div>
                      </div>
                      )
                    })
                    :
                    skeleton.map((_, index) => {
                      return (
                        <div className="col" key={index}>
                          <div className="nft_coll">
                            <div className="nft_wrap">
                              <Link className="skeleton__image skeleton-box" to={`/item-details/`}>
                                
                              </Link>
                            </div>
                            <div className="nft_coll_pp">
                              <Link to="/author">
                                <img className="lazy pp-coll" id="skeleton__author"  alt="" />
                              </Link>
                              <i className="fa fa-check"></i>
                            </div>
                            <div className="nft_coll_info skeleton__info">
                              <Link to="/explore" className="skeleton__info--link skeleton-box" >
                                
                              </Link>
                              <span className="skeleton__info--link skeleton-box"></span>
                            </div>
                          </div>
                        </div>
                      )
                    })
              }
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
