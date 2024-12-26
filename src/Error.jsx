import React from 'react';
import {Link} from "react-router-dom";

function Error() {
    return (
        <div className="absolute top-0 bg-gray-50 h-screen w-screen">
            <div className="flex flex-col items-center justify-center w-screen h-screen">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="mt-6 text-center text-6xl font-extrabold text-gray-900">
                        404
                    </h1>
                    <h2 className="mt-2 text-center text-4xl text-gray-600">
                        Page not found
                    </h2>
                    <div className="h-4"></div>
                    <span className="text-3xl">
                        <Link to="/subject/core" className="text-blue-500 hover:underline">Go back home</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Error;