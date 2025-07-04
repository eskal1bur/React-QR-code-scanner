import {QRCodeSVG} from 'qrcode.react';
import { SCAN_DATA } from '../constants';

const ScanHistory = () => {
    const data =  JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
      <div>
        {data.map((text) => (
            <p key={text}>
                {text}
                <QRCodeSVG value={text} size={100} />
            </p>
        ))}
      </div>  
    );
};

export { ScanHistory };