

const Buttons = ({screen, setScreen}) => {

    const backSpace = () => {
        screen.pop();
        setScreen([...screen]);
    }

    const equals = () => {
        let nums = '';
        const newStatement = [];
        for (let i = 0; i < screen.length; i++) {
            if (typeof screen[i] === 'number') nums += screen[i];
            if (typeof screen[i] !== 'number') {
                newStatement.push(nums * 1);
                nums = '';
                newStatement.push(screen[i])
            }
        }
        if (nums.length > 0) newStatement.push(nums * 1)
        setScreen([...newStatement])
        setScreen([eval(screen.join(''))])
    }


  return (
        <>
            <button onClick={() => setScreen([...screen, 7])}>7</button>
            <button onClick={() => setScreen([...screen, 8])}>8</button>
            <button onClick={() => setScreen([...screen, 9])}>9</button>
            <button onClick={() => setScreen([...screen, ' / '])}>/</button>
            <br/>
            <button onClick={() => setScreen([...screen, 4])}>4</button>
            <button onClick={() => setScreen([...screen, 5])}>5</button>
            <button onClick={() => setScreen([...screen, 6])}>6</button>
            <button onClick={() => setScreen([...screen, ' * '])}>*</button>
            <br/>
            <button onClick={() => setScreen([...screen, 1])}>1</button>
            <button onClick={() => setScreen([...screen, 2])}>2</button>
            <button onClick={() => setScreen([...screen, 3])}>3</button>
            <button onClick={() => setScreen([...screen, ' + '])}>+</button>
            <br/>
            <button onClick={() => setScreen([...screen, 0])}>0</button>
            <button onClick={() => setScreen([...screen, '.'])}>.</button>
            <button onClick={() => backSpace() }>⬅️</button>
            <button onClick={() => setScreen([...screen, ' - '])}>-</button>
            <br />
            <button onClick={() => setScreen([])}>Clear</button>
            <span/>
            <button onClick={() => equals()}>=</button>
            
            <br />
            <br />
            <br />
            <h3>screen length {screen.length}</h3>
        </>
  )
}

export default Buttons