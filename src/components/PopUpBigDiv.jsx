import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect} from "react";

function PopUpBigDiv({ title, show, setShow, children }) {

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to reset the overflow property when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  return (
      <div className={(show ? "block" : "hidden")}>
        <div className={"fixed inset-0 h-screen w-screen flex items-center justify-center z-20 bg-black bg-opacity-60"}>
          <div className="max-h-[90vh] min-h-[90vh] w-[95vw] flex flex-col">
            <div className="w-full bg-cyan-700 rounded-[5px] rounded-b-none flex items-center justify-between px-4 py-1">
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <button onClick={() => setShow(false)} className="text-4xl text-gray-700">
                <FontAwesomeIcon icon={faTimes}/>
              </button>
            </div>
            <div className="bg-white overflow-y-auto custom-scrollbar rounded-[5px] rounded-t-none p-5">
              {children}
            </div>
          </div>
        </div>
      </div>
  );
}

function PopUpBigDivLink({ title, label, children }) {
  const [show, setShow] = useState(false);

  return (
      <>
        <span
            onClick={() => setShow(true)}
            className="text-blue-700 font-semibold cursor-pointer">{label}</span>
        <PopUpBigDiv title={title} show={show} setShow={setShow}>
          {children}
        </PopUpBigDiv>
      </>
  );
}

export {PopUpBigDiv, PopUpBigDivLink};