import React from "react";
import Proptypes from "prop-types";

class Counter extends React.Component{
    static defaultProps = {
        color : 'red',
    }
    state = {
        color: this.props.color,
        value: 0,
    }

    onClick = () => {
        this.setState(prevState => ({
            value: prevState.value +1
        }))
    }

    onCountextMenu = (e) => {
        e.preventDefault();
        this.setState(({value: prevValue }) => ({
            value: (prevValue >= 1 ? prevValue -1 : 0),
        }))
    }

    render() {
        const { color, value } = this.state;
        return (
            <div onClick={this.onClick} 
                 onContextMenu={this.onCountextMenu}
            style={ {...style, backgroundColor: color}}>
                {value}
            </div>
        )
    }
}

const style={
    width: '100px',
    height: '100px',
    display: 'inline-block',
    borderRadius: '50px',
    textAlign: 'center',
    lineHeight: '100px',
    userSelect: 'none',
    fontSize: '3rem',
    margin: '1rem',

}

export default Counter;