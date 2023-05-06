import React from "react";
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ProductInfo from "./SingleProduct.js";
import Routes from "./Routes.js";

import { Link, useParams } from "react-router-dom"

import { useNavigate } from "react-router-dom"


export default function Content(props) {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/products/${props.product.ProductID}`)
        // console.log('You click:  ' + props.product.ProductName);
    }

    // if (handleClick) {
    //     return <ProductInfo/>
    // }

    

    return (
        
            // <div className="card" >
            <div className="card" onClick={handleClick}>
                <div className="product-card">
                    <img className="" src={require(`../images/${props.product.ProductImage}`)}/>
                    {/* <img src={props.product.ProductImage}/> */}
                    <div className="box-product rounded-sm">
                        <p className="product-brand text-gray-500">{props.product.ProductBrand}</p>
                        <p className="product-name">{props.product.ProductName}</p>
                        <p className="product-price">${props.product.ProductPrice.toFixed(2)}</p>
                        {/* <Link to={`/products/${props.product.ProductID}`} >more info</Link> */}
                    </div>
                </div>
               
            </div>
    )
}
