import React, { useState } from 'react';

const Form = () => {

    const [text, setText] = useState('');
    const [blur, setBlur] = useState(false);
    const [ok, setOk] = useState(false);
    const [sended, setSended] = useState(false);

    const handleSetText = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            console.log(text);
            setText('');
            setBlur(false)
            setSended(true)
        }

    }

    const handleSetBlur = () => {
        setBlur(true)
        setSended(false)
    }

    return (
        <>
            <form className='a' >
                <input className='inp' type='text' onBlur={handleSetBlur} value={text} onChange={handleSetText}></input>
                <button className='btn' onClick={handleSubmit} disabled={!text}>Отправить</button>
            </form>
            <div className='b'>
                {!text && blur ? <div className='blur'>Пустой поисковик</div> : null}
                {sended ? <div className='sended'>Отправлено</div> : null}
            </div>
        </>
    );
};

export default Form;