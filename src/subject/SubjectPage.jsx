import React from "react";
import {Route, Routes} from "react-router-dom";
import CoreSection from "./CoreSection.jsx";
import IntermediateSection from "./IntermediateSection";
import AdvancedSection from "./AdvancedSection";
import Nav from "../components/Nav";
import IntroductionSection from "./IntroductionSection";
import SubjectNav from "../components/SubjectNav.jsx";
import FundamentalsSection from "./FundamentalsSection.jsx";
import ProficienciesSection from "./ProficienciesSection.jsx";

const Redirect = () => { window.location.href = '/error'; return null; }
function SubjectPage() {
    document.title = "Subject | WinterPreparation";
    return (
        <>
            <Nav page="subject"/>
            <div className={"h-8"}/>
            <IntroductionSection/>
            <FundamentalsSection/>
            <ProficienciesSection/>
            {/*<CoreSection/>*/}
            {/*<IntermediateSection/>*/}
            {/*<AdvancedSection/>*/}
            {/*<Routes>*/}
            {/*    <Route index={true} element={<IntroductionSection/>}/>*/}
            {/*    <Route path="/core/" element={<CoreSection/>}/>*/}
            {/*    <Route path="/intermediate/" element={<IntermediateSection/>}/>*/}
            {/*    <Route path="/advanced/" element={<AdvancedSection/>}/>*/}
            {/*    <Route path="/*" element={<Redirect/>}/>*/}
            {/*</Routes>*/}
        </>
    )
}

export default SubjectPage;