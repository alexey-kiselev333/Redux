import React from "react";

import {connect} from "react-redux";
import Value from "./Value";
import * as actions from "../../redux/counter/counter-actions";


function Counters({value, onIncrement, onDecrement}) {

    return (
        <div>
            <Value
                onIncrement={() => onIncrement(5)}
                onDecrement={() => onDecrement(5)}
                value={value} step={5}
            />
        </div>
    )

}

const mapStateToProps = state => {
    console.log('ee33e',state)
    return {
        value: state.counterValue,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(actions.increment(5)),
        onDecrement: () => dispatch(actions.decrement(5))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counters);