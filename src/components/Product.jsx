import { useState, useEffect } from "react"


export default function Product ({key}) {
    const [imageURL, setImageURL] = useState(null)
    const [title, setTitle] = useState(null)
    const [price, setPrice] = useState(null)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1', { mode: "cors" })
            .then(res=>res.json())
            .then(json=> setImageURL(json.image))
            .catch((error) => console.error(error));
        fetch('https://fakestoreapi.com/products/1', { mode: "cors" })
            .then(res=>res.json())
            .then(json=> setTitle(json.title))
            .catch((error) => console.error(error));
        fetch('https://fakestoreapi.com/products/1', { mode: "cors" })
            .then(res=>res.json())
            .then(json=> setPrice(json.price))
            .catch((error) => console.error(error));
    }, [])
    return(
       
        imageURL && (
           
            
            <div className="card">
                <img src={imageURL} />
                <h3>{title}</h3>
                <p>Price: ${price}</p>
            </div>
         
           )
       
    )
}