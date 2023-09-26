//แสดงสินค้าแต่ละรายการ
import React from "react";
import plus from "../image/plus/plus.svg"
import minus from "../image/minus/minus.svg"
import deleteIcaon from "../image/delete/delete-icn.svg"
const CardItem =({id,name,image_url,price,quantity})=>{
    return(
        <div className="item">
            <div className="product_image">
                <img src={image_url} alt={name}></img>
            </div>
            <div className="description">
                <span>{name}</span>
                <span>Price {price} Bath</span>
            </div>
            <div className="quantity">
                <button className="plus-btn">
                    <img src={plus}></img>
                </button>
                <input type="text" value={quantity} disabled></input>
                <button className="minus-btn">
                    <img src={minus}></img>
                </button>
            </div>
            <div className="total-price">
                {quantity*price}
            </div>
            <div className="remove"> 
                <img src={deleteIcaon}></img>
            </div>
        </div>
    )
}
export default CardItem