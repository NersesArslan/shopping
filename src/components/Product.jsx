import { useState, useEffect } from "react"


export default function Product ({key}) {
    const [imageURL, setImageURL] = useState(null)
    const [title, setTitle] = useState(null)
    const [price, setPrice] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    //fetching product items from fakestore api
    useEffect(() => {
        const request1 = fetch('https://fakestoreapi.com/products/1').then(response => response.json());
        const request2 = fetch('https://fakestoreapi.com/products/1').then(response => response.json());
        const request3 = fetch('https://fakestoreapi.com/products/1').then(response => response.json());
        Promise.all([request1, request2, request3])
        .then(([data1, data2, data3]) => {
            setImageURL(data1.image);
            setTitle(data2.title);
            setPrice(data3.price)
  })
  .catch((error) => setError(error))
  .finally(() => setLoading(false));
    }, [])
    
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;
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