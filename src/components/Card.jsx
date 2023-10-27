export default function Card({image, title, price, amount, id, cart, setCart}) {
const remove = () => {
   let index = cart.map((item) => item.id).indexOf(id);
   setCart([...cart.slice(0, index), ...cart.slice(index + 1)])
}
    return(
        <div className="card">
            <img src={image} alt="" />
            <h2>{title}</h2>
            <h4 className="price">Price: ${price.toFixed(2)}</h4>
            <h4>Amount: {amount}</h4>
            <button onClick={remove}>Remove</button>
        </div>
    )
}