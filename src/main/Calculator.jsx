import React, { Component } from "react";
import './Calculator.css'

import Button from "../components/Button/Button";
import Display from "../components/Display/Display";

export default class Calculator extends Component{

    constructor(props){
        super(props)

        this.clearDisplay = this.clearDisplay.bind(this)        
        this.setOperation = this.setOperation.bind(this)        
        this.addDigit = this.addDigit.bind(this)        
    }

    clearDisplay(){
        console.log('Clear')
    }

    setOperation(op){
        console.log(op)
    }

    addDigit(n){
        console.log(n)
    }

    render(){
        return (
            <div className="calculator">
                <Display value="100"/>
                <Button label="AC" triple click={this.clearDisplay}/>
                <Button label="/" operation click={this.setOperation}/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" double click={this.addDigit}/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}