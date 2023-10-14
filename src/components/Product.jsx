import { useState, useEffect } from "react"


export default function Product ({title, image}) {
    const [imageURL, setImageURL] = useState(null)
   
    const [price, setPrice] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [amount, setAmount] = useState(1)

    const increment = () => {
       setAmount(amount + 1)
     
    }
    const decrement = () => {
        setAmount(amount - 1)
     }

    return(
       (  
            <div className="card" >
                <img src={image} />
                <h3>{title}</h3>
                <p>Price: ${price}</p>
                <label htmlFor="">Amount</label>
                
                <div className="input-amount">
                    <button onClick={decrement}>-</button>
                    <input type="number" value={amount} onChange={(event)=>setAmount(parseInt(event.target.value))} name="" id="" />
                    <button onClick={increment}>+</button>
                </div>
                <button>Add to Cart</button>
              
            </div>
         
           )
       
    )
}