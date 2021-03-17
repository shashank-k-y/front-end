import React,{useState,useEffect} from 'react'
import Base from "./Base"
import Card from "./Card"
import { loadCart } from './Helper/CartHelper'
import Paymentb from './Paymentb'


    
 const Cart=()=> {
    const [reload, setReload] = useState(false)
    const [products, setProducts] = useState([]) 

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])

     const loadAllProducts = () => {
         return (
             <div>
                {products.map((product, index)=>(
                    <Card
                    key = {index}
                    product = {product}
                    removeFromCart = {true}
                    addtoCart = {false}
                    reload = {reload}
                    setReload = {setReload}
                    />
                ))}             
             </div>
         )
     }

     const loadCheckout = () => {
         return (
             <div>
                 <h1>Checkout</h1>
             </div>
         )
     }
    return (
        <Base title = "Cart Page" description = "Wellcome to checkout">
           
            <div className="row  justify-content-center">
                <div className = "col-sm-12 col-md-6 col-lg-6">
                    {loadAllProducts(products)}
                </div>
                </div>
           
            <hr></hr>
            <div className="row justify-content-center text-center">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    {products.length > 0 ?
                    (
                        <Paymentb products = {products} setReload = {setReload}/>
                    ):
                (
                    <h3>Please login or add products in cart</h3>
                )}
                </div>
            </div>
            
        </Base>
    )
}
export default Cart;