import React,{useState} from 'react'
import ImageHelper from './Helper/ImageHelper';
import {Redirect} from "react-router-dom"
import { addItemToCart, removeItemFromCart } from './Helper/CartHelper';
import { isAuthenticated } from '../auth/helper';



const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false,
    reload = undefined,
    setReload = f => f,
    // function(f){return f}
}) => {

    const [redirect, setRedirect] = useState(false)
    const [sredirect, setSredirect] = useState(false)

        const cartTitle = product ? product.name : "A photo from pexel"
        const cartDescription = product ? product.description : "A good quality tshirt"
        const cartPrice = product ? product.price : "default"


        const getSredirect = (sredirect) => {
            if (sredirect) {
                return <Redirect to="/signin" />;
             }
        };
        const addToCart = () => {
            if (isAuthenticated()){
                addItemToCart(product, ()=> setRedirect(true));
                console.log("Added to cart");
            } else {
                console.log("login please!");
                setSredirect(true)
            }
        };

   

        const getAredirect = (redirect) => {
            if (redirect) {
                return <Redirect to="/cart" />;
            }
        };

        const showAddToCart = (addToCart) =>{
            return(
                addtoCart && (
                <button
                    onClick={addToCart}
                    className="btn btn-block btn-outline-primary mt-2 mb-2"
                >
                    Add to Cart
                </button>
                )
            );
        };

        const showRemoveFromCart = removeFromCart =>{
            return(
                removeFromCart && (
                    <button
                        onClick={() => {
                            //TODO handle this too
                            removeItemFromCart(product._id);
                            setReload(!reload)
                            console.log("Product removed from cart");
                        }}
                        className="btn btn-block btn-outline-danger mt-2 mb-2"
                    >
                        Remove from cart
                    </button>
                    
                )
            )
        }

    return (
        
        <div className="card  text-dark bg-light">
            <div className="card-header  lead"><h4>{cartTitle}</h4></div>
        <div className="card-body">
        {getAredirect(redirect)}
                {getSredirect(sredirect)}
            <ImageHelper product={product}/>
          <p className="lead font-weight-normal text-wrap">
                    <strong>{cartDescription}</strong>
          </p>
                <p className="lead"><strong>Price : $ {cartPrice}</strong></p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
                {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Card;
