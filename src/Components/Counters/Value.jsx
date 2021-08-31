import React from "react";


function Value({value,onIncrement,onDecrement,step}){

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



