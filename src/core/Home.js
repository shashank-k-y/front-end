import React, { useState, useEffect } from "react";
import { getProducts } from "./Helper/CoreApiCalls";
import Base from "./Base";

import "../styles.css";
import Card from "./Card";


export default function Home () {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadAllProducts = () => {
        getProducts()
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    console.log(error);
                } else {
                    setProducts(data);
                }
            });
    };

    useEffect(() => {
        loadAllProducts();
    }, []);

    return (
        <Base title="Home Page" description="Welcome to Tshirt store">
    
            
            <div className="row ">
                <h1>Home component</h1>
                {products.map((product, index) => {
                    return (
                        <div key={index} className="col-md-3 col-lg-3 col-sm-12 mb-4">
                            <Card product={product} />
                        </div>
                    );
                })}
            </div>
        </Base>
    );
}
