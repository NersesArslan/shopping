import Product from "./Product"
import Card from "./Card"
import { useState, useEffect } from "react";

export default function Shopping ({data, error, loading, setCart, cart, id}) {
  
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p className="loading">Loading...</p>;
    return( data &&
              (
        <div className="container">
            <div className="shopping">
             {data.map((item) => {
                return <Product unitPrice={item.price} 
                image={item.image} 
                title={item.title} 
                id={item.id} 
                key={item.id} 
              
                setCart={setCart} 
                cart={cart}
                />            
             })}
            </div>
        </div>
               )
    )
}