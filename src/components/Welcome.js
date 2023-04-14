import React, { Component } from "react"

const numbers = [4, 5, 14, 3, 9];
const maxNumbers = numbers.reduce((a, b) => Math.max(a, b));
const doubled = numbers.map((element, index) => <li key={index}>{element * 2}</li>);
const maxDoubled = numbers.reduce((a, b) => a>b ? a : b);
const numbersList = numbers.map((el, i) => <li key={i}>{el}</li>)

class Welcome extends Component{
    render(){
        return( 
        <div>
            <ul>
                {numbersList}
            </ul>
            <hr></hr>
            <ul>
                {doubled}
            </ul>
            <p>Max from numbers is {maxNumbers}</p>
            <p>Max from doubled is {maxDoubled}</p>
            <h1>Welcome class component</h1>
        </div>
        )
    }
}

export default Welcome