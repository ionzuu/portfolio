import React from 'react'
import './styles.css';

export const Calculator = () => {
  return (
    <>
        <div>Calculator</div>
        <div className="FigureCalc">
            <div className="screen">
                = Result
            </div>
            <div className="w-layout-grid btnscalcu">
                <div className="oper">C</div>
                <div className="oper">+/-</div>
                <div className="oper">%</div>
                <div className="oper">/</div>
                <div className="numb">7</div>
                <div className="numb">8</div>
                <div className="numb">9</div>
                <div className="oper">X</div>
                <div className="numb">4</div>
                <div className="numb">5</div>
                <div className="numb">6</div>
                <div className="oper">-</div>
                <div className="numb">1</div>
                <div className="numb">2</div>
                <div className="numb">3</div>
                <div className="oper">+</div>
                <div className="numb">.</div>
                <div className="numb">0</div>
                <div className="oper equal">=</div>
            </div>
        </div>
    </>
  )
}
