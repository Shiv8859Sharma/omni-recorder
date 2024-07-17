import { useEffect, useRef } from "react";

const PopUp = (props) => {
    let { children, show,  position = 'top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]', className = 'bg-[#FFFFFF]'  } = props
    const popupRef = useRef(null);

    if (!show) return;


    return (
        <div ref={popupRef} className="fixed modal z-10 top-0 w-full left-0 h-[100vh] bg-[#3E40488C]" >
            <div className={`absolute ${position} p-4 flex flex-col gap-10 rounded-lg border border-[#F1E7F8] bg-[#FFFFFF] ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default PopUp