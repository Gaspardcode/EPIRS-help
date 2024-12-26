import './index.css'
import React from 'react'
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import TestSuitePage from "./testsuite/TestSuitePage.jsx";
import SubjectPage from "./subject/SubjectPage.jsx";
import Footer from "./components/Footer.jsx";
import Error from "./Error.jsx";
import CorrectionPage from "./result/CorrectionPage.jsx";

const Redirect = () => { window.location.href = '/error'; return null; }
function App() {
    document.title = "Winter Preparation";
    return (
        <div className="min-h-screen">
            <Header/>
            <Routes>
                <Route index={true} element={<SubjectPage/>}/>
                <Route path="/testsuite/*" element={<TestSuitePage/>}/>
                <Route path="/error/*" element={<Error/>}/>
                <Route path="/correction/*" element={<CorrectionPage/>}/>
                {<Route path="/*" element={<SubjectPage/>}/>}
            </Routes>
            <Footer/>
        </div>
    )
}
export default App