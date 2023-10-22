export default function Card({image, title, price, amount}) {

    return(
        <div className="card">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <h4 className="price">Price: ${price}</h4>
            <h4>Amount: {amount}</h4>
        </div>
    )
}