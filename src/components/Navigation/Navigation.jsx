import { Link } from "react-router-dom";
import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={s.container}>
            <Link to="/react-QR-code-scanner/generate">Генерировать QR-код</Link>
            <Link to='/react-QR-code-scanner/scan'>Сканировать QR-код</Link>
            <Link to='/react-QR-code-scanner/generateHistory'>История генерирования</Link>
            <Link to='/react-QR-code-scanner/scanHistory'>История сканирования</Link>
        </nav>
    );
};

export { Navigation }