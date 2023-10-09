import { useState, useEffect } from "react"


export default function Product ({key}) {
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [])
    return(
        <div key={key}>
            <div className="card"></div>
            <img src={json.image} alt="" />
            <h4>Product Title</h4>
        </div>
    )
}