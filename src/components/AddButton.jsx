export default function AddButton({listPrice, decrement, amount, increment, clickHandler, setAmount}) {

    return(
        <div>
            <p>Price: ${listPrice}</p>
            <label htmlFor="">Amount</label>
            
            <div className="input-amount">
                <button onClick={decrement}>-</button>
                <input type="number" value={amount} onChange={(event)=>setAmount(parseInt(event.target.value))} name="" id="" />
                <button onClick={increment}>+</button>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </div>
    )
}