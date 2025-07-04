import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { GenerateHistory } from "./components/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory";

const Layout = () => {
    return (
        <div>
            <Navigation />
            {/* <QrCodeGenerator /> */}
            {/* <QrCodeScanner /> */}

        <Routes>
            <Route path="/react-QR-code-scanner/generate" element={<QrCodeGenerator />} />
            <Route path="/react-QR-code-scanner/scan" element={<QrCodeScanner />} />
            <Route path="/react-QR-code-scanner/generateHistory" element={<GenerateHistory />} />
            <Route path="/react-QR-code-scanner/scanHistory" element={<ScanHistory />} />
        </Routes>
        </div>
    );
};

export { Layout };