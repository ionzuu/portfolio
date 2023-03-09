import React, { useState } from 'react'
import './styles.css';

export const Calculator = () => {
  const Resultado = 0
  const [numb, setnumb] = useState('')
  return (
    <>
        <div>Calculator</div>
        <div className="FigureCalc">
            <div className="screen">
                <p>=</p><p>{numb === '' ? '0' : numb}</p>
            </div>
            <div className="w-layout-grid btnscalcu">
                <div className="oper" onClick={() => setnumb('0')}>C</div>
                <div className="oper">+/-</div>
                <div className="oper">%</div>
                <div className="oper">/</div>
                <div className="numb" onClick={() => setnumb(numb.concat('7'))}>7</div>
                <div className="numb" onClick={() => setnumb(numb.concat('8'))}>8</div>
                <div className="numb" onClick={() => setnumb(numb.concat('9'))}>9</div>
                <div className="oper">X</div>
                <div className="numb" onClick={() => setnumb(numb.concat('4'))}>4</div>
                <div className="numb" onClick={() => setnumb(numb.concat('5'))}>5</div>
                <div className="numb" onClick={() => setnumb(numb.concat('6'))}>6</div>
                <div className="oper">-</div>
                <div className="numb" onClick={() => setnumb(numb.concat('1'))}>1</div>
                <div className="numb" onClick={() => setnumb(numb.concat('2'))}>2</div>
                <div className="numb" onClick={() => setnumb(numb.concat('3'))}>3</div>
                <div className="oper">+</div>
                <div className="numb dot" onClick={() => setnumb(numb.concat('.'))}>.</div>
                <div className="numb" onClick={() => setnumb(numb.concat('0'))}>0</div>
                <div className="oper equal" onClick={() => console.log(numb)}>=</div>
            </div>
        </div>
    </>
  )
}
