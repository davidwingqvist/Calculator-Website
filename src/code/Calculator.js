import React from 'react';
import './Calculator.css'

class Calculator extends React.Component{
    constructor() {
        super();

        // end number
        this.num = 0;

        this.currentNum = '';
        this.previousNum = '';

        // holds the operation, + * - %
        this.operation = '';

        this.switch = false;
    }

    addToCurrentNum(number)
    {
        this.currentNum += number;

        // Update Input Window.
        document.getElementById("inputWindow").value = this.currentNum;
    }

    setCurrentNum(number)
    {
        this.currentNum = number;

        // Update Input Window.
        document.getElementById("inputWindow").value = this.currentNum;
    }

    setOperation(ops)
    {
        this.operation = ops;

        if(this.switch === false && this.currentNum !== '')
        {
            this.switch = true;
            this.previousNum = this.currentNum;
        }

        this.currentNum = '';

        // Update Input Window.
        document.getElementById("inputWindow").value = '';
    }

    doOperation()
    {
        if(this.operation === '*')
        {
            this.num = Number(this.previousNum) * Number(this.currentNum);
        }
        else if(this.operation === '+')
        {
            this.num = Number(this.previousNum) + Number(this.currentNum);
        }
        else if(this.operation === '-')
        {
            this.num = Number(this.previousNum) - Math.abs(Number(this.currentNum));
        }
        else if(this.operation === '÷')
        {
            this.num = Number(this.previousNum) / Number(this.currentNum);
        }
        else
        {
            // prevent null operation.
            return;
        }

        this.previousNum = this.num;

         // Update Input Window.
         document.getElementById("inputWindow").value = this.previousNum;
    }

    doFractional()
    {
        if(this.currentNum !== '')
        {
            let ret = this.currentNum;
            for(let i = this.currentNum - 1; i > 0; i--)
            {
                ret *= i;
            }

            this.currentNum = ret;
            // Update Input Window.
            document.getElementById("inputWindow").value = this.currentNum;
        }
    }

    resetState()
    {
        this.num = 0;
        this.currentNum = '';
        this.previousNum = '';
        this.operation = '';
        this.switch = false;

        document.getElementById("inputWindow").value = this.currentNum;
    }

    renderCalculator() {
        return (<div>
                <input className='InputField' value={this.currentNum} id="inputWindow" readOnly></input>
                <div className='CalculatorBackground'>
                <table>
                    <button className='NumberButton' onClick={this.addToCurrentNum.bind(this, '7')}>7</button>
                    <button className='NumberButton' onClick={this.addToCurrentNum.bind(this, '8')}>8</button>
                    <button className='NumberButton' onClick={this.addToCurrentNum.bind(this, '9')}>9</button>
                    <button className='OperationButton' onClick={this.setOperation.bind(this, '*')}>x</button>
                    <button className='NumberButton' onClick={this.setCurrentNum.bind(this, '2.718281')}>e</button>
                </table>
                <table>
                    <button className='NumberButton' onClick={this.addToCurrentNum.bind(this, '4')}>4</button>
                    <button className='NumberButton' onClick={this.addToCurrentNum.bind(this, '5')}>5</button>
                    <button className='NumberButton' onClick={this.addToCurrentNum.bind(this, '6')}>6</button>
                    <button className='OperationButton' onClick={this.setOperation.bind(this, '-')}>-</button>
                    <button className='NumberButton' onClick={this.setCurrentNum.bind(this, '3.1415926')}>π</button>
                </table>
                <table>
                    <button className='NumberButton' onClick={this.addToCurrentNum.bind(this, '1')}>1</button>
                    <button className='NumberButton' onClick={this.addToCurrentNum.bind(this, '2')}>2</button>
                    <button className='NumberButton' onClick={this.addToCurrentNum.bind(this, '3')}>3</button>
                    <button className='OperationButton' onClick={this.setOperation.bind(this, '+')}>+</button>
                    <button className='OperationButton' onClick={this.doFractional.bind(this)}>n!</button>
                </table>
                <table>
                    <button className='OperationButton' onClick={this.setOperation.bind(this, "÷")}>÷</button>
                    <button className='NumberButton' onClick={this.addToCurrentNum.bind(this, '0')}>0</button>
                    <button className='NumberButton' onClick={this.addToCurrentNum.bind(this, '.')}>.</button>
                </table>
                <button className='DoOperationButton' onClick={this.doOperation.bind(this)}>Enter</button>
                <button className='OperationCancelButton' onClick={this.resetState.bind(this)}>C</button>
                </div>
               </div>);
    };
}

export default Calculator;