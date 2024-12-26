import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function SubjectNav({ currentIndex }) {
    const sections = ['', 'core', 'intermediate', 'advanced'];

    const handlePrevious = () => {
        if (currentIndex > 0) {
            window.location.href = `/${sections[currentIndex - 1]}`;
        }
    };

    const handleNext = () => {
        if (currentIndex < sections.length - 1) {
            window.location.href = `/${sections[currentIndex + 1]}`;
        }
    };

    return (
        <div className="bg-gray-800 text-white px-8 py-4">
            <nav className={"flex px-8" +
                (currentIndex === 0 ? " justify-end" : " justify-between")
            }>
                {currentIndex > 0 && (
                    <button className="bg-cyan-600 px-4 py-2 rounded-xl"
                            onClick={handlePrevious}>
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Previous
                    </button>
                )}
                {currentIndex < sections.length - 1 && (
                    <button className="bg-cyan-600 px-4 py-2 rounded-xl"
                            onClick={handleNext}>
                        Next
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                )}
            </nav>
        </div>
    );
}

export default SubjectNav;