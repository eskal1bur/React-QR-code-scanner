import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import s from './qrCodeScanner.module.css';

import { SCAN_DATA } from '../../constants';

const QrCodeScanner = () => {

    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue])
        );
    };

    return (
        <div className={s.container}>
            <Scanner 
                // allowMultiple={true} 
                onScan={scanHandler} 
                components={{
                    audio:false,
                    finder: false,
                }}
                styles={{
                    // container: { width:'350px' } // инлайновые значения
                    container: { width:350 }
                }}
            />
            <p className={s.result}>{scanned}</p>
        </div>
        
        
    );
};

export { QrCodeScanner }