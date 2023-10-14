import Product from "./Product"
import Card from "./Card"
import { useState, useEffect } from "react";

export default function Shopping () {
    const [title, setTitle] = useState(null)
    const [image, setImage] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const request1 = fetch('https://fakestoreapi.com/products?limit=9').then(response => response.json());
        const request2 = fetch('https://fakestoreapi.com/products').then(response => response.json());
        const request3 = fetch('https://fakestoreapi.com/products').then(response => response.json());
        Promise.all([request1, request2, request3])
        .then(([data1, data2, data3]) => {
            console.log(data1.map((item)=> item.title));
            console.log(data1.map((item)=> item.image))
            setTitle(data1)
            setImage(data2)
  })
  .catch((error) => setError(error))
  .finally(() => setLoading(false));
    },[])

    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;
    return(
            //    imageURL && (
        <div className="container">
            <div className="shopping">
               {title.map((item, pics) => {
                return <Product title={item.title} image={item.image}/>
               })}
               
            
            </div>
        </div>
    )
}