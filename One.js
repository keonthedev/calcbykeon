import { useState } from "react";


const One = () => {
   //const [currentNumber, setCurrentNumber] = useState( () => {return '0'});
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [operation, setOperation] = useState(() => {return ''});
    const [result, setResult] = useState(() => {return '0'});
    const [decimalClicked1, setDecimalClicked1] = useState(false);
    const [decimalClicked2, setDecimalClicked2] = useState(false);
    // React Hooks above
    // make useState's above in to functions to prevent re-rendering to the console
    // eslint-disable-next-line no-lone-blocks
    // React Hooks above

    const handleNumberClick = (digit) => {
              setResult((prevNumber) => {
            if (prevNumber !== '0') {
              return prevNumber + digit;
            } else {
              return digit;
            }
          });
      
          if (operation === '') {
            if (digit === '.') {
              if (!decimalClicked1) {
                setNumber1((prevNumber1) => prevNumber1 + digit);
                setDecimalClicked1(true);
              }
            } else {
              setNumber1((prevNumber1) => parseFloat(prevNumber1 + digit));
            }
          } else {
            if (digit === '.') {
              if (!decimalClicked2) {
                setNumber2((prevNumber2) => prevNumber2 + digit);
                setDecimalClicked2(true);
              }
            } else {
              setNumber2((prevNumber2) => parseFloat(prevNumber2 + digit));
            }
          }
    };
   
    const handleDecClick = (digit) => {
            if (operation === '') {
            if (!decimalClicked1) {
              setResult((prevNumber) => prevNumber + '.');
              setNumber1((prevNumber1) => prevNumber1 + '.');
              setDecimalClicked1(true);
            }
          } else {
            if (!decimalClicked2) {
              setResult((prevNumber) => prevNumber + '.');
              setNumber2((prevNumber2) => prevNumber2 + '.');
              setDecimalClicked2(true);
            }
          }
          setDecimalClicked1(false);
          setDecimalClicked2(false);
    };
    
    const handlePlusClick = () => {
        setResult((prevResult) => {
            if (prevResult !== '0') {
                return prevResult + '+'
            } else { return '+'}
        })
        setOperation('+');
    };
    // above is for plus button

    const handleMinusClick = () => {
        setResult((prevResult) => {
            if (prevResult !== '0') {
                return prevResult + '-'
            } else {return '-'}
        })
        setOperation('-');
    };
    // above is for minus button

  const handleEqualsClick = () => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);
        let sum;

        if (operation === '+') {
           sum = num1 + num2;
        } else if (operation === '-') {
            sum = num1 - num2; 
        } else if (operation === '*') {
            sum = num1 * num2;
        } else if (operation === '/') {
            sum = num1 / num2;   
        } else {
            sum = '0';
        } 
        setNumber1(sum.toString());
        setNumber2('');
        setOperation('');
        setResult(sum.toString());
    }; 
   // above handles operations and is for equals button 

    // below are unique to AC and Push me buttons 
    const clear =  () => {
        setNumber1('');
        setNumber2('');
        setOperation('');
        setResult('0');
      };


    const pushMe = () => {
        const hire = "Please hire me :)"
        setResult((prevCount) => prevCount = hire)
    };

  return (
    <div id='container'>
        <div className='displayBox'>
            <span id="display">{result}</span>
        </div>
        <div id='buttonContainer'>
            <button id="clear" onClick={clear}>AC</button>
            <button id="divide">/</button>
            <button id="multiply">*</button>
            <button id='nine' onClick={() => handleNumberClick('9')}>9</button>
            <button id='eight' onClick={() => handleNumberClick('8')}>8</button>
            <button id='seven' onClick={() => handleNumberClick('7')}>7</button>
            <button id='six' onClick={() => handleNumberClick('6')}>6</button>
            <button id='five' onClick={() => handleNumberClick('5')}>5</button>
            <button id='four' onClick={() => handleNumberClick('4')}>4</button>
            <button id='three' onClick={() => handleNumberClick('3')}>3</button>
            <button id='two' onClick={() => handleNumberClick('2')}>2</button>
            <button id="one" onClick={() => handleNumberClick('1')}>1</button>
            <button id="equals" onClick={handleEqualsClick}>=</button>
            <button onClick={handlePlusClick}>+</button>
            <button id="subtract" onClick={handleMinusClick}>-</button>
            <button id="decimal" onClick={() => handleDecClick('.')}>.</button>
            <button id='zero' onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={pushMe}>Push Me!</button>
        </div>
    </div>
  )
}

export default One
