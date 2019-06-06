import React from "react"
import "./button.css"

function Button(props){
    return(
        <div className="button-container">
            <button 
                name="input"
                value="7" 
                onClick={props.click}>7
            </button>
            <button 
                name="input"
                value="8" 
                onClick={props.click}>8
            </button>
            <button 
                name="input"
                value="9" 
                onClick={props.click}>9
            </button>
            <button 
                className="arith" 
                name="input"
                value="/" 
                onClick={props.click}>/
            </button>
            <button 
                name="input"
                value="4" 
                onClick={props.click}>4
            </button>
            <button 
                name="input"
                value="5" 
                onClick={props.click}>5
            </button>
            <button 
                name="input"
                value="6" 
                onClick={props.click}>6
            </button>
            <button 
                className="arith"
                name="input"
                value="*" 
                onClick={props.click}>X
            </button>
            <button 
                name="input"
                value="1" 
                onClick={props.click}>1
            </button>
            <button 
                name="input"
                value="2" 
                onClick={props.click}>2
            </button>
            <button 
                name="input"
                value="3" 
                onClick={props.click}>3
            </button>
            <button 
                className="arith" 
                name="input"
                value="+" 
                onClick={props.click}>+
            </button>
            <button 
                name="input"
                value="." 
                onClick={props.click}>.
            </button>
            <button 
                name="input"
                value="0" 
                onClick={props.click}>0
            </button>
            <button 
                name="input"
                value="=" 
                onClick={props.equal}>=
            </button>
            <button 
                className="arith" 
                name="input"
                value="-" 
                onClick={props.click}>-
            </button>
            <button 
                className="clear" 
                name="input"
                onClick={props.click}>Clear
            </button>

        </div>
    )
}
export default Button