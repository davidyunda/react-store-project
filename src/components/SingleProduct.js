import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link, useParams } from "react-router-dom"
import data from '../data'

export default function SingleProduct() {

    const { productID } = useParams()

    // const product = data.find( (product) => productID === productID )

    console.log(data[productID-1])

    const product = data[productID - 1]


    return (
        <div>
        <div className="p-3">
            {/* <h2>{productID}</h2> */}
            
            <h3 className="underline">
                {product.ProductBrand}</h3>
            <h2 className="my-2 font-semibold text-lg">
                {product.ProductName}</h2>
            <div className="flex justify-center items-center">
                <img src={require(`../images/${product.ProductImage}`)}></img>
            </div>
            <p className="font-medium">
                ${product.ProductPrice.toFixed(2)} </p>
            <p className="line-through">
                ${product.OriginalPrice}</p>  
            <p className="my-4 font-medium text-lg">
                Summary</p>  
            <p className="A">
                {product.ProductDescription}</p>
        </div>
        <div className="card-question my-10 border-2 border-blue-800 rounded-lg border-slate-500 text-lg font-medium box-content w-80 h-64 text-center content-between">
            <p>
            If you would like to make a purchase or have any questions about our products, please don't hesitate to contact us via email at:
            </p>
            <p>
            contact-us@qatustore.com or send us a text message at (612)-306-3831.
            Don't forget to include your name and the product you want to buy.
            </p>
        </div>
        </div>
    )
}