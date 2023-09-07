import './Counter.css'
import React , { useState } from 'react'

function Counter(){
    const [counter, setCounter] = useState(0)
    const [appleCounter, setApple] = useState({
        item: 'apple',
         quantity: 0
        });
    
    const [arr, setArray] = useState([])

    function decrementCOunter(){
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        setCounter(prevVal => prevVal - 1)
        setCounter((prevValue) => prevValue - 1)
    }

    function incrementCounter(){
        setCounter((prevValue) => prevValue + 1)
        setCounter((prevValue) => prevValue + 1)
    }

    // function addApple(){
    //     setApple({
    //         item: 'apple',
    //         quantity: 1
    //     })
    // }
    // function addApple(){
    //     setApple((prevCart) => ({
    //         item: 'orange' + prevCart.item,
    //         quantity: 1
    //     }))
    // }
    function addApple(){
        setApple((prevCart) => ({
            ...prevCart,
            quantity: prevCart.quantity + 1
        }))
    }

    function removeApple(){
        //1. Use a call back function to get the previous value
        //2. Spread out all properties of the previous state
        //3. Only change the property you need to change
        setApple((prevCart) => ({
            ...prevCart,
            item: 'Orange',
            quantity: prevCart.quantity - 1
        }))
    }

    function addPlusToArray(){
        // setArray([1, 2]) 
        setArray((prevArray) => [...prevArray, "+"])  
        //When have single line and use {} then need to have return keywork, or else  can use {} with multiple lines
    }

    function addMinusToArray(){
        setArray((prevArray) => [...prevArray, "-"])
    }

    function removeSymbol(){
        setArray((prevArray) => {
            if (prevArray) {
                return prevArray.slice(0, -1)
            }
        })
    }

    function resetArray(){
        setArray([])
    }


    return (
        <div>
            <div className='parent'>

                <button onClick={decrementCOunter} className="math">-</button>
                <div className="number">{counter}</div>
                {/* <button onClick={() => setCounter(counter + 1)} className="math">+</button> */}
                {/* <button onClick={() => setCounter((prevValue) => prevValue + 1)} className="math">+</button> */}
                <button onClick={incrementCounter} className='math'>+</button>
            </div>

            <div className='parent'>
                <button onClick={() => removeApple()} className="math">-</button>
                <div className="number">{appleCounter.quantity}</div>
                <div className="number">{appleCounter.item}</div>
                
                <button onClick={addApple} className='math'>+</button>
            </div>

            <div className='array'>
                <button onClick={addMinusToArray} className='math arrayHook'>Remove from Array -</button>
                <div>{arr}</div>
                {/* <div>{arr.toString()}</div> */}
                <button onClick={addPlusToArray} className='math arrayHook'>Add to array +</button>
                <button onClick={removeSymbol} className='math arrayHook'>Remove symbol</button>
                <button onClick={resetArray} className='math arrayHook'>Reset Array</button>
            </div>
        </div>
    );
}

export default Counter;