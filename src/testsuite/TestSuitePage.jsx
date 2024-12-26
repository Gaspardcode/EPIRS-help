import React from "react";
import Nav from "../components/Nav.jsx";
import Toggle from "../components/Toggle.jsx";

function TestSuitePage() {
    document.title = "Testsuite | WinterPreparation";
    return (<>
        <Nav page="testsuite"/>
        <section className="w-full p-16">
            <h2 className="text-6xl font-bold">Testsuite</h2>
            <p className="text-2xl italic text-red-700">This part shouldn't be visible by the student.</p>

            <a
                href="/ressources/Tests.zip"
                download
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mt-4"
            >
                Download
            </a>
        </section>
    </>)
}

export default TestSuitePage;