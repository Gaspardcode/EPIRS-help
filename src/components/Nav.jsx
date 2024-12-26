import {Link} from "react-router-dom";
import React from "react";

function Nav({ page }) {
    return (
        <nav className="border-gray-200 py-3 bg-gray-800 flex justify-center items-center sticky top-0 z-10">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className="justify-between items-center flex w-auto order-1"
                     id="mobile-menu-2">
                    <ul className="flex font-medium flex-row space-x-8 mt-0">
                        <li>
                            <Link to="/"
                                  className={"block py-2 pr-4 pl-3 border-gray-100 hover:text-white border-0 hover:text-primary-700 p-0" + (page === 'subject' ? ' text-white' : ' text-gray-400')}>Subject</Link>
                        </li>
                        <li>
                            <Link to="/testsuite"
                                  className={"block py-2 pr-4 pl-3 border-gray-100 hover:text-white border-0 hover:text-primary-700 p-0" + (page === 'testsuite' ? ' text-white' : ' text-gray-400')} >Testsuite</Link>
                        </li>
                        <li>
                            <Link to="/correction"
                                  className={"block py-2 pr-4 pl-3 border-gray-100 hover:text-white border-0 hover:text-primary-700 p-0" + (page === 'correction' ? ' text-white' : ' text-gray-400')}>Correction</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;