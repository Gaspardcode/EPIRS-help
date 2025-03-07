import React, {useState} from "react";

const colors = {
    'info': 'bg-blue-900',
    'fundamentals': 'bg-green-900',
    'proficiencies': 'bg-red-900',
    'correction': 'bg-purple-900',
    'boss': 'bg-purple-600',
}

function Toggle({title, color, children}) {
    const [show, setShow] = useState(false);
    let bgColor = colors[color];
    return (
        <div className="my-6">
            <div className={"cursor-pointer select-none p-3 rounded-lg" + " " + (show ? "rounded-b-none " : "") + bgColor}
                 onClick={() => setShow(!show)}>
                <h3 className="text-3xl font-bold text-white">{(show) ? "▾" : "▸"} {title}</h3>
            </div>
            {show &&
            <div className={"border-4 border-t-0 rounded-lg rounded-t-none p-3"}>
                {children}
            </div>
            }
        </div>
    );
}

export default Toggle;