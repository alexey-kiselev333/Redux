import React from "react";


function Value({value,onIncrement,onDecrement,step}){
console.log(value)
    return (
        <div>
            {value}
            <button onClick={onIncrement}>
                прибавь на {step}
            </button>
            <button onClick={onDecrement}>
                убавь на {step}
            </button>
        </div>
    )

}

export default Value;



