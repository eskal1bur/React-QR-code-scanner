import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

import { GENERATE_DATA } from '../../constants';

import s from './qrCodeGenerator.module.css';

const QrCodeGenerator = () => {

    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    const onClickHandler = (event) => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA, 
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    };

    console.log("result: ", result);

    return (
        <div className={s.container}>
            <input 
                type="text" 
                value={value} 
                onChange={onChangeHandler} 
                className={s.input}
                placeholder='Введите текст'
            />
            <button className={s.button} type='button' onClick={onClickHandler}>
                Сгенерировать QR
            </button>
            {result !== '' ? (
                    <div className={s.qrWrapper}>
                        <QRCodeSVG value={result} size={200} />
                    </div>
                ) : null
            }
            {/* {result !== '' && (
                <div className="qrWrapper">
                    <QRCodeSVG value={result} size={200} />
                </div> 
            )} */} 
            {/* Или так */}
        </div>
    );
};

export { QrCodeGenerator };