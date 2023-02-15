import React, {useState} from 'react';

const Input = () =>{
    const [txtValue, setTxtValue] = useState("");

    const onChange = (e) => {
        // 이벤트가 발생할 때마다 txtValue에 넣어줌
        setTxtValue(e.target.value);
    }

    return (
        <div>
            <input type="text" value ={txtValue} onChange={onChange}/>
            <br/>
            <p>{txtValue}</p>

        </div>
    );
}

export default Input;