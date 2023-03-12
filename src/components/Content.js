import React from "react";

export default function Content(props) {
    return (
        
            <div className="card">
                <div className="product-card">
                    <img src={require(`../images/${props.product.ProductImage}`)}/>
                    {/* <img src={props.product.ProductImage}/> */}
                    <div className="box-product rounded-sm">
                        <p className="product-brand">{props.product.ProductBrand}</p>
                        <p className="product-name">{props.product.ProductName}</p>
                        <p className="product-price">${props.product.ProductPrice}</p>
                    </div>
                </div>

            </div>
    )
}
