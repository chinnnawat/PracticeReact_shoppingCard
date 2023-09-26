//สร้าง contex api => ให้บริการข้อมูลแก่ componnent ใน app
import React,{createContext,useContext,useReducer} from "react";
import CartData from "../data/CardData"
import reducer from "../management/reducer"
const initState ={
    //ข้อมูลสินค้าในตะกร้า
    cart:CartData,
    //ยอดรวม
    total:0,
    //จำนวนสินค้า
    amount:0
}
const CardContext = createContext()
export const MycartContext =()=>{
    return useContext(CardContext)
}
const CardProvider =({children})=>{
    const [state,dispath] = useReducer(reducer,initState)
    return(
        <CardContext.Provider value={{...state}}>
            {children}
        </CardContext.Provider>
    )
}
export {CardContext,CardProvider}