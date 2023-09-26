import React from "react";
// import CartData from "../data/CardData";
import CardItem from "./CardItem";
import { MycartContext } from "../management/context";
//จัดการสินค้า
const Card=()=>{
    const {cart} = MycartContext()
    return(
        <div className="shopping-card">
            <div className="title">Your Product</div>
            {cart.map((data)=>{
                return <CardItem key={data.id} {...data}/>
            })}
            <div className="footer">Total</div>
        </div>
    )
}
export default Card