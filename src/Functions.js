import React,{useState} from 'react';

function MyFunc(){
    const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);  //arrow function
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  function reset(){
    setCount(0);
  }

    return(
     <div className ='func'>
        <h3>Counter by Function</h3>
        <h1 className='count'>Count: {count}</h1>
        <button className='btn' onClick={increment}>Increment</button>
        <button className='btn' onClick={decrement}>Decrement</button>
        <button className='btn' onClick={reset}>Reset</button>
     </div>
    );
}
export default MyFunc;