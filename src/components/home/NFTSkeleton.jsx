import React from 'react'
import { Link } from "react-router-dom";



const NFTSkelton = (props) => {
    return (
        <div className="col">
            <div className="nft__item">
                <div className="author_list_pp">
                <Link
                    to="/author"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Creator: Monica Lucas"
                    className="newItems__skeleton--headshot"
                    >
                    
                    <i className="fa fa-check"></i>
                </Link>
                </div>
                

                <div className="nft__item_wrap">
                <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                    <button>Buy Now</button>
                    <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="">
                        <i className="fa fa-envelope fa-lg"></i>
                        </a>
                    </div>
                    </div>
                </div>

                <Link to={`/item-details/`} className="newItems__skeleton--image">
                    
                </Link>
                </div>
                <div className="nft__item_info">
                <Link to={`/item-details/`} className="newItems__skeleton--title">
                </Link>
                <div className="nft__item_price newItems__skeleton--counts"></div>
                <div className="nft__item_like newItems__skeleton--counts">
                </div>
                </div>
            </div>
        </div>
    )
}

export default NFTSkelton