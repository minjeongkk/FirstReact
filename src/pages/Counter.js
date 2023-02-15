import React, {useState} from 'react';

const Counter = () =>{
    // num -> 변수
    // setNumber -> num 값을 변경시킬 수 있는 setter함수
    const [num, setNumber] = useState(0);
    
    const increase = () => {
        // num = num + 1 -> 이 의미이지만 이렇게 하면 상태관리가 안됨
        setNumber(num+1);
    }

    const decrease = () => {
        setNumber(num-1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
}

export default Counter;