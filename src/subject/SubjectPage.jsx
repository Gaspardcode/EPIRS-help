import React from "react";
import {Route, Routes} from "react-router-dom";
import Nav from "../components/Nav";
import IntroductionSection from "./IntroductionSection";
import SubjectNav from "../components/SubjectNav.jsx";
import FundamentalsSection from "./FundamentalsSection.jsx";
import ProficienciesSection from "./ProficienciesSection.jsx";

const Redirect = () => { window.location.href = '/error'; return null; }
function SubjectPage() {
    document.title = "Subject | UnoAdventure";
    return (
        <>
            <Nav page="subject"/>
            <div className={"h-8"}/>
            <IntroductionSection/>
            <FundamentalsSection/>
            <ProficienciesSection/>
        </>
    )
}

export default SubjectPage;