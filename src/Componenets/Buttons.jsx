

const Buttons = ({screen, setScreen}) => {

    const backspace = () => {
        screen.pop();
        setScreen([...screen]);
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
            <button onClick={() => setScreen([...screen, ' x '])}>x</button>
            <br/>
            <button onClick={() => setScreen([...screen, 1])}>1</button>
            <button onClick={() => setScreen([...screen, 2])}>2</button>
            <button onClick={() => setScreen([...screen, 3])}>3</button>
            <button onClick={() => setScreen([...screen, ' + '])}>+</button>
            <br/>
            <button onClick={() => setScreen([...screen, 0])}>0</button>
            <button onClick={() => setScreen([...screen, '.'])}>.</button>
            <button onClick={() => backspace() }>⬅️</button>
            <button onClick={() => setScreen([...screen, ' - '])}>-</button>
            <br />
            <button onClick={() => setScreen([])}>Clear</button>
            <span/>
            <button>=</button>
            
            <br />
            <br />
            <br />
            <h3>screen length {screen.length}</h3>
        </>
  )
}

export default Buttons