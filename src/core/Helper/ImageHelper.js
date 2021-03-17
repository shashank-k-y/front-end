import React from 'react'

 const ImageHelper = ({product})=> {
     const imageurl = product ? product.image 
     : `https://images.pexels.com/photos/1830433/pexels-photo-1830433.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`
    return (
        <div className="">
            <img
             src={imageurl}
             style={{maxHeight:"100%",maxWidth:"100%"}}
             className="mb-3 rounded" 
             alt=""
             />
        </div>
    );
};
export default ImageHelper;