import React, {useState} from 'react';

// 여러개의 데이터를 한번에 받아 처리
const Input2 = () =>{
    const [inputs, setInputs] = useState({
        name : "",
        email : "",
        tel : ""
    });

    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        
        // inputs[id] = value; -> 상태관리가 안됨
        // 깊은 복사를 해야함, 새로운 object를 만듦
        setInputs({
            ...inputs,
            [id]:value
        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange} />
            </div>
            <div>
                <label>이메일</label>
                <input type="text" id="email" value={email} onChange={onChange} />
            </div>
            <div>
                <label>전화번호</label>
                <input type="text" id="tel" value={tel} onChange={onChange} />
            </div>

            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>
            <p>전화번호 : {tel}</p>
        </div>
    );
}

export default Input2;