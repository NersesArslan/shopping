import Product from "./Product"
import Card from "./Card"
import { useState, useEffect } from "react";

export default function Shopping () {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
          
            .then(json=> setData(json))
            
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    },[])

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p className="loading">Loading...</p>;
    return(
               data && (
        <div className="container">
            <div className="shopping">
               {data.map((item) => {
                return <Product title={item.title} image={item.image} key={item.id}/>
               })}
               
            
            </div>
        </div>
               )
    )
}