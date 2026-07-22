import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import NFT from '../home/NFT'
import nftImage from "../../images/nftImage.jpg";

const AuthorItems = (props) => {
  
  const skeleton = new Array(8).fill(0);

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          
          {props.nfts.length > 0?
          props.nfts.map((item) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={item.nftId}>
                <NFT loading={false} authorId={item.authorId} 
                authorImage={item.authorImage} expiryDate={item.expiryDate} 
                nftId={item.nftId} nftImage={item.nftImage} price={item.price} likes={item.likes} title={item.title} />
              </div>
          )})
          :
          skeleton.map((_, index) => {
            return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <NFT key={index} loading={true} />
            </div>
            )
          })
          }
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
