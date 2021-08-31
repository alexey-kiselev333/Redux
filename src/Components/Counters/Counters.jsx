import React from "react";

import {connect} from "react-redux";
import Value from "./Value";
import * as actions from "../../redux/counter/counter-actions";


function Counters({value, onIncrement, onDecrement, step}) {

    return (
        <div>
            <Value
                onIncrement={() => onIncrement(step)}
                onDecrement={() => onDecrement(step)}
                value={value} step={step}
            />
        </div>
    )

}

const mapStateToProps = state => {
    console.log(state)
    return {
        value: state.counter.value,
        step: state.counter.step,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: (value) => dispatch(actions.increment(value)),
        onDecrement: (value) => dispatch(actions.decrement(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counters);